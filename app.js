/* realpolitiks - application logic */
(function(){
'use strict';

var TIERS = [
  {id:'basic', name:'Basic', n:50,  desc:'A quick but genuine read on your core politics.', time:'~7 min'},
  {id:'inter', name:'Intermediate', n:100, desc:'A thorough profile across every value axis.', time:'~14 min'},
  {id:'elite', name:'Elite', n:150, desc:'The deepest, most accurate result we produce.', time:'~22 min', feat:true}
];

var OPTS = [
  {v:1,    t:'Strongly Agree'},
  {v:0.5,  t:'Agree'},
  {v:0,    t:'Neutral / Unsure'},
  {v:-0.5, t:'Disagree'},
  {v:-1,   t:'Strongly Disagree'}
];

var IW = [1.2,1.15,1.1,1,1,0.7,0.75,0.85,0.85,0.9,0.9,0.85,1,0.8]; // ideology axis weights, AXES order
var PW = [1.3,1,1];                    // party axis weights: eq,lb,pr

var S = { code:null, name:null, tier:null, n:0, questions:[], answers:[], idx:0 };

/* ---------- helpers ---------- */
function $(id){return document.getElementById(id);}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function show(name){
  var scr=document.querySelectorAll('.screen');
  for(var i=0;i<scr.length;i++)scr[i].classList.remove('active');
  $('screen-'+name).classList.add('active');
  window.scrollTo(0,0);
}
function country(code){for(var i=0;i<COUNTRIES.length;i++)if(COUNTRIES[i].c===code)return COUNTRIES[i];return null;}

/* ---------- home stats ---------- */
function initHome(){
  $('stat-ideologies').textContent = IDEOLOGIES.length;
  $('stat-axes').textContent = AXES.length;
  $('stat-questions').textContent = GENERAL.length + '+';
  $('stat-countries').textContent = COUNTRIES.length + '+';
}

/* ---------- country screen ---------- */
function renderCountries(filter){
  var host=$('country-groups'); host.innerHTML='';
  filter=(filter||'').trim().toLowerCase();
  var tailored=[],others=[];
  COUNTRIES.forEach(function(c){
    if(filter && c.n.toLowerCase().indexOf(filter)===-1)return;
    (c.t?tailored:others).push(c);
  });
  function grid(list,label,tag){
    if(!list.length)return;
    host.appendChild(el('div','grid-label',label));
    var g=el('div','cgrid');
    list.forEach(function(c){
      var b=el('button','country');
      b.innerHTML='<span class="fl">'+flagOf(c.c)+'</span><span class="nm">'+esc(c.n)+'</span>'+(tag?'<span class="bdg">Tailored</span>':'');
      b.onclick=function(){ pickCountry(c); };
      g.appendChild(b);
    });
    host.appendChild(g);
  }
  grid(tailored,'Tailored question sets',true);
  grid(others, filter?'Other countries':'All other countries (general test)',false);
  if(!tailored.length && !others.length) host.appendChild(el('p','center',' No countries match \u201c'+esc(filter)+'\u201d.'));
}
function pickCountry(c){ S.code=c.c; S.name=c.n; renderMode(); show('mode'); }

/* ---------- mode screen ---------- */
function renderMode(){
  var c=country(S.code);
  var tailoredN=(COUNTRY_Q[S.code]||[]).length;
  $('mode-country').innerHTML='<span class="fl">'+flagOf(S.code)+'</span> '+esc(S.name)+
    (tailoredN?(' \u00b7 includes '+tailoredN+' questions about your own politics'):' \u00b7 general questions');
  var host=$('mode-cards'); host.innerHTML='';
  TIERS.forEach(function(t){
    var card=el('div','mode'+(t.feat?' feat':''));
    card.innerHTML=(t.feat?'<span class="ribbon">Most accurate</span>':'')+
      '<div class="qn">'+t.n+'</div><div class="qlbl">questions</div>'+
      '<h3>'+t.name+'</h3><div class="desc">'+t.desc+'</div><div class="time">'+t.time+'</div>';
    card.onclick=function(){ startQuiz(t); };
    host.appendChild(card);
  });
}

/* ---------- build question set ---------- */
function buildQuestions(code,n){
  var tailored=(COUNTRY_Q[code]||[]).map(function(q){return {t:q.t,ax:q.ax,m:q.m,local:true};});
  var general=GENERAL.map(function(q){return {t:q.t,ax:q.ax,m:q.m,local:false};});
  var tCount=0;
  if(tailored.length){
    var frac = n<=50?0.45:(n<=100?0.40:0.35);
    tCount=Math.min(tailored.length, Math.round(n*frac));
  }
  var gCount=n-tCount;
  if(gCount>general.length){ gCount=general.length; }
  // balance general questions across all axes (round-robin) so every value is probed
  var byAx={}; AXES.forEach(function(a){byAx[a.id]=[];});
  shuffle(general.slice()).forEach(function(q){ byAx[q.ax].push(q); });
  var gSel=[], ids=AXES.map(function(a){return a.id;});
  while(gSel.length<gCount){
    var progressed=false;
    for(var i=0;i<ids.length;i++){
      var bucket=byAx[ids[i]];
      if(bucket.length){ gSel.push(bucket.pop()); progressed=true; if(gSel.length>=gCount)break; }
    }
    if(!progressed)break;
  }
  var tSel=shuffle(tailored.slice()).slice(0,tCount);
  return shuffle(gSel.concat(tSel));
}

function startQuiz(tier){
  S.tier=tier.id; S.n=tier.n;
  S.questions=buildQuestions(S.code,tier.n);
  S.answers=new Array(S.questions.length).fill(null);
  S.idx=0;
  $('quiz-country').innerHTML='<span class="fl">'+flagOf(S.code)+'</span>'+esc(S.name);
  show('quiz');
  renderQuestion();
}

/* ---------- quiz ---------- */
function renderQuestion(){
  var q=S.questions[S.idx];
  var num=S.idx+1;
  $('quiz-counter').textContent='Question '+num+' of '+S.questions.length;
  $('quiz-qnum').textContent=(num<10?'0':'')+num;
  $('quiz-badge').style.display=q.local?'inline-block':'none';
  $('quiz-question').textContent=q.t;
  $('quiz-fill').style.width=Math.round((S.idx)/S.questions.length*100)+'%';
  var host=$('quiz-opts'); host.innerHTML='';
  OPTS.forEach(function(o){
    var b=el('button','opt'); b.setAttribute('data-v',o.v);
    if(S.answers[S.idx]===o.v)b.classList.add('sel');
    b.innerHTML='<span class="rd"></span>'+o.t;
    b.onclick=function(){ answer(o.v); };
    host.appendChild(b);
  });
  $('quiz-back').style.visibility=S.idx===0?'hidden':'visible';
}
function answer(v){
  S.answers[S.idx]=v;
  if(S.idx<S.questions.length-1){ S.idx++; renderQuestion(); }
  else { finish(); }
}
function goBack(){ if(S.idx>0){ S.idx--; renderQuestion(); } }
function skip(){ answer(0); }

/* ---------- scoring ---------- */
function computeAxes(){
  var acc={}; AXES.forEach(function(a){acc[a.id]={s:0,max:0};});
  S.questions.forEach(function(q,i){
    var v=S.answers[i]; if(v==null)return;
    acc[q.ax].s += v*q.m; acc[q.ax].max += 1;
  });
  var pct={};
  AXES.forEach(function(a){ var o=acc[a.id]; pct[a.id]= o.max>0 ? Math.round(100*(o.max+o.s)/(2*o.max)) : 50; });
  return pct;
}
function fingerprint(p){ return [p.econ,p.civil,p.dmcy,p.scty,p.dipl,p.state,p.ecol,p.reln,p.tact,p.mil,p.prop,p.welf,p.imm,p.just]; }
function rankIdeologies(fp){
  var maxD=0; for(var k=0;k<IW.length;k++)maxD+=IW[k]*IW[k]*10000; maxD=Math.sqrt(maxD);
  return IDEOLOGIES.map(function(id){
    var s=0; for(var i=0;i<IW.length;i++){var d=(fp[i]-id.c[i])*IW[i]; s+=d*d;}
    return {n:id.n,d:id.d,s:id.s,match:Math.max(0,Math.round(100*(1-Math.sqrt(s)/maxD)))};
  }).sort(function(a,b){return b.match-a.match;});
}
function rankParties(p){
  var list=PARTIES[S.code]||PARTIES.DEFAULT;
  var pt=[p.econ,p.civil,p.scty];
  var maxD=0; for(var k=0;k<3;k++)maxD+=PW[k]*PW[k]*10000; maxD=Math.sqrt(maxD);
  return list.map(function(pa){
    var s=0; for(var i=0;i<3;i++){var d=(pt[i]-pa.c[i])*PW[i]; s+=d*d;}
    return {n:pa.n,match:Math.max(0,Math.round(100*(1-Math.sqrt(s)/maxD)))};
  }).sort(function(a,b){return b.match-a.match;});
}

/* ---------- results ---------- */
function finish(){
  $('quiz-fill').style.width='100%';
  var pct=computeAxes();
  var fp=fingerprint(pct);
  var ideo=rankIdeologies(fp);
  var parties=rankParties(pct);

  var top=ideo[0];
  $('res-name').textContent=top.n;
  $('res-match').textContent=top.match+'% match';
  $('res-desc').textContent=top.d;

  var run=$('res-runners'); run.innerHTML='';
  ideo.slice(1,5).forEach(function(x){
    var r=el('div','runner');
    r.innerHTML='<span class="rn">'+esc(x.n)+'</span><span class="rp">'+x.match+'%</span><span class="desc">'+esc(x.d)+'</span>';
    run.appendChild(r);
  });

  renderCompass(pct);
  renderParties(parties);
  renderAxes(pct);

  var note='This test covers ideologies from across the entire political spectrum for the sake of completeness and understanding. Inclusion is never an endorsement.';
  if(top.s){ note='Note: your answers most closely matched an ideology that is included for historical and educational understanding only. This is not an endorsement of it. '+note; }
  $('res-note').textContent=note;

  var pl=PARTIES[S.code]?'':' (generic ideological families, since we do not yet have a tailored party set for '+esc(S.name)+')';
  $('res-party-sub').textContent='How closely your answers match the main parties'+pl+'.';

  show('results');
}

function renderCompass(pct){
  var size=340, pad=26, span=size-pad*2;
  var x=pad + (100-pct.econ)/100*span;   // econ high = left
  var y=pad + (pct.civil)/100*span;      // civil low (authority) = top
  var svg='<svg viewBox="0 0 '+size+' '+size+'">'+
    '<rect x="'+pad+'" y="'+pad+'" width="'+span+'" height="'+span+'" rx="14" style="fill:var(--compass-board);stroke:var(--compass-stroke)"/>'+
    '<rect x="'+pad+'" y="'+pad+'" width="'+span/2+'" height="'+span/2+'" fill="#f5484812"/>'+
    '<rect x="'+(pad+span/2)+'" y="'+pad+'" width="'+span/2+'" height="'+span/2+'" fill="#4f46e510"/>'+
    '<rect x="'+pad+'" y="'+(pad+span/2)+'" width="'+span/2+'" height="'+span/2+'" fill="#16a34a10"/>'+
    '<rect x="'+(pad+span/2)+'" y="'+(pad+span/2)+'" width="'+span/2+'" height="'+span/2+'" fill="#eab30814"/>'+
    '<line x1="'+(size/2)+'" y1="'+pad+'" x2="'+(size/2)+'" y2="'+(size-pad)+'" style="stroke:var(--compass-grid)" stroke-width="1"/>'+
    '<line x1="'+pad+'" y1="'+(size/2)+'" x2="'+(size-pad)+'" y2="'+(size/2)+'" style="stroke:var(--compass-grid)" stroke-width="1"/>'+
    '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="11" fill="#4f46e5" stroke="#fff" stroke-width="3"/>'+
    '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="20" fill="#4f46e5" opacity="0.14"/>'+
    '</svg>'+
    '<div class="clabel top">Authoritarian</div><div class="clabel bot">Libertarian</div>'+
    '<div class="clabel lft">Left</div><div class="clabel rgt">Right</div>';
  $('res-compass').innerHTML=svg;
  var ecoSide=pct.econ>=50?'Left':'Right', ecoMag=Math.round(Math.abs(pct.econ-50)*2);
  var socSide=pct.civil>=50?'Libertarian':'Authoritarian', socMag=Math.round(Math.abs(pct.civil-50)*2);
  $('res-compass-sum').innerHTML=
    '<div><div class="cs-v">'+ecoSide+' '+ecoMag+'%</div><div class="cs-l">Economic axis</div></div>'+
    '<div><div class="cs-v">'+socSide+' '+socMag+'%</div><div class="cs-l">Social axis</div></div>';
}

function renderParties(parties){
  var host=$('res-parties'); host.innerHTML='';
  parties.forEach(function(p,i){
    var row=el('div','party'+(i===0?' top':''));
    row.innerHTML='<div class="prow"><span class="pn">'+(i===0?'\u2b50 ':'')+esc(p.n)+'</span><span class="pp">'+p.match+'%</span></div>'+
      '<div class="pbar"><div class="pf" style="width:'+p.match+'%"></div></div>';
    host.appendChild(row);
  });
}

function renderAxes(pct){
  var host=$('res-axes'); host.innerHTML='';
  AXES.forEach(function(a){
    var v=pct[a.id];
    var side=v>=50?a.pos:a.neg, mag=v>=50?v:100-v;
    var row=el('div','axis');
    row.innerHTML='<div class="axis-top"><span class="side">'+esc(a.pos)+'</span>'+
      '<span class="lean">'+esc(side)+' '+mag+'%</span>'+
      '<span class="side">'+esc(a.neg)+'</span></div>'+
      '<div class="axis-track"><div class="mid"></div><div class="axis-marker" style="left:'+v+'%"></div></div>'+
      '<div class="axis-blurb">'+esc(a.blurb)+'</div>';
    host.appendChild(row);
  });
}

/* ---------- theme ---------- */
function applyTheme(t){ document.documentElement.setAttribute('data-theme',t); var ic=$('theme-ic'),lbl=$('theme-lbl'); if(ic)ic.textContent=t==='dark'?'\u2600\ufe0f':'\ud83c\udf19'; if(lbl)lbl.textContent=t==='dark'?'Light':'Dark'; }
function initTheme(){ var t=document.documentElement.getAttribute('data-theme'); if(!t){ try{t=localStorage.getItem('rp-theme');}catch(e){} if(!t)t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'; } applyTheme(t); }
function toggleTheme(){ var cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; applyTheme(cur); try{localStorage.setItem('rp-theme',cur);}catch(e){} }

/* ---------- wiring ---------- */
function wire(){
  initHome();
  initTheme();
  var tt=$('theme-toggle'); if(tt) tt.onclick=toggleTheme;
  $('btn-start').onclick=function(){ renderCountries(''); show('country'); };
  $('btn-restart').onclick=function(){ show('home'); };
  var backs=document.querySelectorAll('[data-go]');
  for(var i=0;i<backs.length;i++)(function(b){ b.onclick=function(){ show(b.getAttribute('data-go')); }; })(backs[i]);
  $('country-search').addEventListener('input',function(e){ renderCountries(e.target.value); });
  $('quiz-back').onclick=goBack;
  $('quiz-skip').onclick=skip;
  handleHash();
}

/* ---------- QA / demo hooks ---------- */
function demoFill(seed){
  var r=seed||1; function rnd(){ r=(r*9301+49297)%233280; return r/233280; }
  S.answers=S.questions.map(function(){ return OPTS[Math.floor(rnd()*OPTS.length)].v; });
}
function handleHash(){
  var h=(location.hash||'').replace('#','');
  if(h==='country'){ renderCountries(''); show('country'); }
  else if(h==='mode'){ S.code='US'; S.name='United States'; renderMode(); show('mode'); }
  else if(h==='quiz-demo'){ S.code='GB'; S.name='United Kingdom'; startQuiz(TIERS[1]); }
  else if(h==='results-demo'){ S.code='US'; S.name='United States'; S.n=150; S.questions=buildQuestions('US',150); demoFill(7); S.idx=S.questions.length-1; finish(); }
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire); else wire();
window.addEventListener('hashchange',handleHash);
})();
