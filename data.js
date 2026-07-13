/* realpolitiks - data layer: axes, question banks, ideologies, parties, countries */

/* ============ 14 value axes ============ */
const AXES = [
  { id:'econ',  pos:'Equality',        neg:'Markets',       blurb:'Wealth shared by society vs. left to the free market.' },
  { id:'civil', pos:'Liberty',         neg:'Authority',     blurb:'Personal freedom vs. state control and order.' },
  { id:'dmcy',  pos:'Democracy',       neg:'Autocracy',     blurb:'Power held by the people vs. by a strong elite or leader.' },
  { id:'scty',  pos:'Progress',        neg:'Tradition',     blurb:'Embracing social change vs. preserving tradition.' },
  { id:'dipl',  pos:'Globalism',       neg:'Nationalism',   blurb:'World cooperation vs. nation-first sovereignty.' },
  { id:'state', pos:'Localism',        neg:'Centralism',    blurb:'Local and regional power vs. a strong central state.' },
  { id:'ecol',  pos:'Ecology',         neg:'Growth',        blurb:'Protecting the planet vs. prioritising the economy.' },
  { id:'reln',  pos:'Secular',         neg:'Religious',     blurb:'Separating faith from state vs. faith in public life.' },
  { id:'tact',  pos:'Reform',          neg:'Revolution',    blurb:'Gradual change vs. sweeping upheaval of the system.' },
  { id:'mil',   pos:'Pacifism',        neg:'Militarism',    blurb:'Peace and diplomacy vs. military strength and force.' },
  { id:'prop',  pos:'Collective',      neg:'Private',       blurb:'Common ownership vs. private property rights.' },
  { id:'welf',  pos:'Welfare',         neg:'Self-Reliance', blurb:'A strong safety net vs. individual responsibility.' },
  { id:'imm',   pos:'Openness',        neg:'Nativism',      blurb:'Open, multicultural society vs. cultural protection.' },
  { id:'just',  pos:'Rehabilitation',  neg:'Punishment',    blurb:'Reforming offenders vs. tough punishment and order.' }
];

/* ============ General question bank (154) ============ */
/* m: +1 => Agree pushes toward pos pole; -1 => Agree pushes toward neg pole */
const GENERAL = [
  // econ
  {t:'The government should redistribute wealth from the rich to the poor.',ax:'econ',m:1},
  {t:'A large gap between rich and poor is acceptable as long as the economy grows.',ax:'econ',m:-1},
  {t:'Essential services like water and energy should be publicly owned.',ax:'econ',m:1},
  {t:'The free market, not the state, should set wages.',ax:'econ',m:-1},
  {t:'Higher taxes on the wealthy are needed to fund public services.',ax:'econ',m:1},
  {t:'Private business generally serves society better than government programs.',ax:'econ',m:-1},
  {t:'Workers should own and control the companies they work for.',ax:'econ',m:1},
  {t:'Economic inequality is a natural and beneficial feature of society.',ax:'econ',m:-1},
  {t:'A universal basic income should be provided to all citizens.',ax:'econ',m:1},
  {t:'Cutting taxes on business helps everyone through economic growth.',ax:'econ',m:-1},
  {t:'The minimum wage should be significantly increased.',ax:'econ',m:1},
  {t:'The pursuit of private profit does society more harm than good.',ax:'econ',m:1},
  {t:'The wealthy earned their success and owe society nothing extra.',ax:'econ',m:-1},
  // civil
  {t:'People should be free to do as they wish provided they harm no one.',ax:'civil',m:1},
  {t:'The government should be able to monitor communications to keep people safe.',ax:'civil',m:-1},
  {t:'Recreational drug use should be decriminalised.',ax:'civil',m:1},
  {t:'National security matters more than personal privacy.',ax:'civil',m:-1},
  {t:'People should be free to criticise the government without restriction.',ax:'civil',m:1},
  {t:'The state has the right to censor dangerous or offensive ideas.',ax:'civil',m:-1},
  {t:'Citizens should have a broad right to own firearms.',ax:'civil',m:1},
  {t:'A strong state is needed to keep order, even at the cost of some freedoms.',ax:'civil',m:-1},
  {t:'Adults should be free to make risky personal choices.',ax:'civil',m:1},
  {t:'The state should be able to detain people it considers dangerous without a trial.',ax:'civil',m:-1},
  {t:'A government should be allowed to ban political parties it sees as a threat.',ax:'civil',m:-1},
  {t:'People should have the right to medically assisted dying.',ax:'civil',m:1},
  // dmcy
  {t:'Democracy, despite its flaws, is the best system of government.',ax:'dmcy',m:1},
  {t:'A strong leader who does not have to bother with elections would be good for the country.',ax:'dmcy',m:-1},
  {t:'Ordinary citizens, not elites, should hold ultimate political power.',ax:'dmcy',m:1},
  {t:'Some decisions are too important to be left to ordinary voters.',ax:'dmcy',m:-1},
  {t:'Major national issues should be decided directly by referendum.',ax:'dmcy',m:1},
  {t:'A one-party state can be acceptable if it delivers good results.',ax:'dmcy',m:-1},
  {t:'The country would be better off if the military stepped in to run the government.',ax:'dmcy',m:-1},
  {t:'Elections and parliaments mostly just get in the way of effective government.',ax:'dmcy',m:-1},
  {t:'Leaders should face strict limits on how long they can hold power.',ax:'dmcy',m:1},
  {t:'Political power is better held by a capable elite than by the masses.',ax:'dmcy',m:-1},
  {t:'A free and independent press is essential to hold power to account.',ax:'dmcy',m:1},
  {t:'In a crisis, it is acceptable for a leader to rule by decree.',ax:'dmcy',m:-1},
  {t:'Decisions should be made by elected representatives, not unelected officials.',ax:'dmcy',m:1},
  // scty
  {t:'Society should embrace new social norms and lifestyles.',ax:'scty',m:1},
  {t:'Traditional values are the foundation of a healthy society.',ax:'scty',m:-1},
  {t:'Same-sex marriage should be fully legal and recognised.',ax:'scty',m:1},
  {t:'Society changes too fast and should return to older ways.',ax:'scty',m:-1},
  {t:'Rigid gender roles are outdated and should be abandoned.',ax:'scty',m:1},
  {t:'Long-standing customs deserve respect even when they seem outdated.',ax:'scty',m:-1},
  {t:'Abortion should be legal and accessible.',ax:'scty',m:1},
  {t:'Schools should promote traditional patriotic and moral values.',ax:'scty',m:-1},
  {t:'A woman\u2019s most important role is as a wife and mother.',ax:'scty',m:-1},
  {t:'Society was healthier when it upheld stricter moral and gender norms.',ax:'scty',m:-1},
  {t:'A diversity of lifestyles makes a nation stronger.',ax:'scty',m:1},
  {t:'Marriage should be defined only as between a man and a woman.',ax:'scty',m:-1},
  {t:'Transgender people should be free to live as their identified gender.',ax:'scty',m:1},
  // dipl
  {t:'Countries should cooperate closely through bodies like the United Nations.',ax:'dipl',m:1},
  {t:'My nation\u2019s interests should always come before global concerns.',ax:'dipl',m:-1},
  {t:'Free movement of people across borders benefits the world.',ax:'dipl',m:1},
  {t:'Global trade deals undermine national sovereignty.',ax:'dipl',m:-1},
  {t:'We should prioritise global human rights over national interest.',ax:'dipl',m:1},
  {t:'Patriotism and national pride are among the highest virtues.',ax:'dipl',m:-1},
  {t:'National borders matter far less than our shared humanity.',ax:'dipl',m:1},
  {t:'International institutions have too much power over individual nations.',ax:'dipl',m:-1},
  {t:'Wealthy countries have a duty to help poorer ones through foreign aid.',ax:'dipl',m:1},
  {t:'Our country should reduce its involvement in foreign alliances.',ax:'dipl',m:-1},
  {t:'A shared global identity matters more than national identity.',ax:'dipl',m:1},
  {t:'Our nation is superior to others and should act accordingly.',ax:'dipl',m:-1},
  {t:'The country should withdraw from most international treaties and organisations.',ax:'dipl',m:-1},
  // state
  {t:'Power should be devolved to local and regional governments.',ax:'state',m:1},
  {t:'A single strong central government governs most effectively.',ax:'state',m:-1},
  {t:'Local communities understand their needs better than the capital.',ax:'state',m:1},
  {t:'National standards should override local decisions.',ax:'state',m:-1},
  {t:'Regions should have the right to self-government or independence.',ax:'state',m:1},
  {t:'A federal system is better than a centralised one.',ax:'state',m:1},
  {t:'Decisions should be made as close to ordinary people as possible.',ax:'state',m:1},
  {t:'The central government should set uniform rules for the whole country.',ax:'state',m:-1},
  {t:'Cities and towns should control their own taxes and spending.',ax:'state',m:1},
  {t:'Too much local control creates chaos and should be limited.',ax:'state',m:-1},
  {t:'Small, self-governing communities are the ideal way to organise society.',ax:'state',m:1},
  // ecol
  {t:'Protecting the environment should take priority over economic growth.',ax:'ecol',m:1},
  {t:'Environmental regulations are an unnecessary burden on business.',ax:'ecol',m:-1},
  {t:'We should rapidly switch to renewable energy even at high cost.',ax:'ecol',m:1},
  {t:'Concerns about climate change are exaggerated.',ax:'ecol',m:-1},
  {t:'Industrial growth and consumption must be limited to save the planet.',ax:'ecol',m:1},
  {t:'A carbon tax should be introduced to cut emissions.',ax:'ecol',m:1},
  {t:'Economic growth matters more than environmental limits.',ax:'ecol',m:-1},
  {t:'Protecting endangered habitats is worth real economic sacrifice.',ax:'ecol',m:1},
  {t:'People should change their lifestyles to help fight climate change.',ax:'ecol',m:1},
  {t:'Strict environmental rules cost jobs and should be relaxed.',ax:'ecol',m:-1},
  {t:'The environment for future generations matters more than present-day profit.',ax:'ecol',m:1},
  // reln
  {t:'Religion should have no influence on government policy.',ax:'reln',m:1},
  {t:'Laws should be grounded in religious or moral tradition.',ax:'reln',m:-1},
  {t:'Public life should be entirely secular.',ax:'reln',m:1},
  {t:'Faith and religious institutions strengthen society.',ax:'reln',m:-1},
  {t:'Religious teaching should help guide education.',ax:'reln',m:-1},
  {t:'Religious symbols should be kept out of public institutions.',ax:'reln',m:1},
  {t:'Our moral values come primarily from religious tradition.',ax:'reln',m:-1},
  {t:'Religious leaders should stay out of politics.',ax:'reln',m:1},
  {t:'A nation is stronger when its people share a common religious faith.',ax:'reln',m:-1},
  {t:'Marriage, family and morality should follow religious teaching.',ax:'reln',m:-1},
  {t:'People are perfectly capable of being moral without religion.',ax:'reln',m:1},
  {t:'The nation\u2019s laws should be based on religious commandments.',ax:'reln',m:-1},
  {t:'Religious law should be the main foundation of the legal system.',ax:'reln',m:-1},
  {t:'Religious authorities should hold formal power in government.',ax:'reln',m:-1},
  // tact
  {t:'Change should happen gradually through existing institutions.',ax:'tact',m:1},
  {t:'The current system is broken and must be replaced entirely.',ax:'tact',m:-1},
  {t:'Working within the system is the best way to improve society.',ax:'tact',m:1},
  {t:'Sometimes a revolution is necessary to achieve justice.',ax:'tact',m:-1},
  {t:'Radical, sweeping change usually does more harm than good.',ax:'tact',m:1},
  {t:'Protest and civil disobedience are legitimate tools for change.',ax:'tact',m:-1},
  {t:'Existing institutions can be trusted to deliver real progress.',ax:'tact',m:1},
  {t:'The established order should be overthrown, not merely reformed.',ax:'tact',m:-1},
  {t:'Steady compromise achieves more than confrontation.',ax:'tact',m:1},
  {t:'Only mass movements from below can create real change.',ax:'tact',m:-1},
  {t:'Reforming the system step by step is wiser than tearing it down.',ax:'tact',m:1},
  {t:'Only a complete revolution can fix a fundamentally unjust system.',ax:'tact',m:-1},
  // mil
  {t:'Military spending should be reduced significantly.',ax:'mil',m:1},
  {t:'A strong military is essential to national greatness.',ax:'mil',m:-1},
  {t:'Diplomacy should always be tried before the use of force.',ax:'mil',m:1},
  {t:'Military intervention abroad is often justified.',ax:'mil',m:-1},
  {t:'War is almost never justified.',ax:'mil',m:1},
  {t:'Nuclear weapons should be abolished worldwide.',ax:'mil',m:1},
  {t:'Increasing defence spending should be a top national priority.',ax:'mil',m:-1},
  {t:'Our country should avoid getting involved in foreign wars.',ax:'mil',m:1},
  {t:'A powerful army is the best guarantee of peace.',ax:'mil',m:-1},
  {t:'Arms sales to other countries should be banned.',ax:'mil',m:1},
  {t:'Sometimes force is the only language aggressors understand.',ax:'mil',m:-1},
  {t:'Our nation should be willing to go to war to expand its power and influence.',ax:'mil',m:-1},
  {t:'Military discipline and values should shape the whole of society.',ax:'mil',m:-1},
  // prop
  {t:'Major industries should be nationalised and run for public benefit.',ax:'prop',m:1},
  {t:'Private property is a sacred right that must be strongly protected.',ax:'prop',m:-1},
  {t:'Land and natural resources should be held in common.',ax:'prop',m:1},
  {t:'People have the right to accumulate unlimited private wealth.',ax:'prop',m:-1},
  {t:'Inheritance of large fortunes should be heavily taxed or abolished.',ax:'prop',m:1},
  {t:'Cooperatives and public ownership should replace big private firms.',ax:'prop',m:1},
  {t:'The means of production should remain in private hands.',ax:'prop',m:-1},
  {t:'Housing should be treated as a public good, not an investment.',ax:'prop',m:1},
  {t:'Billionaires are a sign of a healthy, successful economy.',ax:'prop',m:-1},
  {t:'Key resources like water should never be privately owned.',ax:'prop',m:1},
  {t:'Private enterprise, not the state, should own most of the economy.',ax:'prop',m:-1},
  {t:'All large private companies should be brought under public ownership.',ax:'prop',m:1},
  // welf
  {t:'Healthcare should be free and provided by the state.',ax:'welf',m:1},
  {t:'People should rely on themselves, not government support.',ax:'welf',m:-1},
  {t:'A strong welfare safety net makes society stronger.',ax:'welf',m:1},
  {t:'Generous welfare makes people lazy and dependent.',ax:'welf',m:-1},
  {t:'Education should be free at all levels.',ax:'welf',m:1},
  {t:'Pensions and unemployment support should be generous.',ax:'welf',m:1},
  {t:'Government should guarantee a job to everyone who wants one.',ax:'welf',m:1},
  {t:'Welfare spending should be cut in order to lower taxes.',ax:'welf',m:-1},
  {t:'The state should provide affordable housing for all.',ax:'welf',m:1},
  {t:'Charity and family, not government, should help those in need.',ax:'welf',m:-1},
  {t:'Everyone deserves a guaranteed minimum standard of living.',ax:'welf',m:1},
  // imm
  {t:'Immigration enriches our culture and our economy.',ax:'imm',m:1},
  {t:'Immigration should be strictly limited to protect our culture.',ax:'imm',m:-1},
  {t:'We have a moral duty to welcome refugees.',ax:'imm',m:1},
  {t:'A nation should always prioritise its native-born citizens.',ax:'imm',m:-1},
  {t:'Multiculturalism strengthens society.',ax:'imm',m:1},
  {t:'Border walls and strict controls are necessary.',ax:'imm',m:-1},
  {t:'Immigrants should be required to culturally assimilate.',ax:'imm',m:-1},
  {t:'Legal immigration should be increased.',ax:'imm',m:1},
  {t:'Ethnic and cultural diversity weakens a nation\u2019s unity.',ax:'imm',m:-1},
  {t:'A diversity of cultures and religions is good for a country.',ax:'imm',m:1},
  {t:'Immigrants who refuse to adopt our way of life should have to leave.',ax:'imm',m:-1},
  {t:'The country should be preserved above all for its native-born people.',ax:'imm',m:-1},
  // just
  {t:'The justice system should focus on rehabilitation over punishment.',ax:'just',m:1},
  {t:'Criminals deserve harsh punishment rather than second chances.',ax:'just',m:-1},
  {t:'Prison should aim to reintegrate offenders back into society.',ax:'just',m:1},
  {t:'Longer, tougher prison sentences make society safer.',ax:'just',m:-1},
  {t:'The death penalty should be abolished everywhere.',ax:'just',m:1},
  {t:'Drug addiction should be treated as a health issue, not a crime.',ax:'just',m:1},
  {t:'We need more police and stricter law enforcement.',ax:'just',m:-1},
  {t:'Social programs prevent crime better than harsh punishment.',ax:'just',m:1},
  {t:'Being soft on crime endangers ordinary people.',ax:'just',m:-1},
  {t:'Even serious offenders can be reformed and given a second chance.',ax:'just',m:1},
  {t:'Zero-tolerance policing is the best way to cut crime.',ax:'just',m:-1},
  {t:'The worst criminals deserve the death penalty.',ax:'just',m:-1},
  {t:'Public order matters more than the rights of the accused.',ax:'just',m:-1}
];

/* ============ Tailored country questions (real figures, parties & events) ============ */
const COUNTRY_Q = {
  US: [
    {t:'Donald Trump has been good for the United States.',ax:'dipl',m:-1},
    {t:'The MAGA movement is a positive force in American politics.',ax:'scty',m:-1},
    {t:'Joe Biden was a good president.',ax:'econ',m:1},
    {t:'The January 6th storming of the Capitol was an attack on democracy.',ax:'dmcy',m:1},
    {t:'The 2020 election was legitimate and fairly won by Joe Biden.',ax:'dmcy',m:1},
    {t:'Overturning Roe v. Wade was the right decision.',ax:'scty',m:-1},
    {t:'Bernie Sanders-style democratic socialism is right for America.',ax:'econ',m:1},
    {t:'Trump was right to put tariffs on foreign goods.',ax:'dipl',m:-1},
    {t:'The Black Lives Matter movement has been a positive force.',ax:'scty',m:1},
    {t:'A wall along the southern border is necessary.',ax:'imm',m:-1},
    {t:'The United States should keep funding Ukraine against Russia.',ax:'mil',m:-1},
    {t:'A government-run Medicare for All system should be adopted.',ax:'welf',m:1},
    {t:'The Second Amendment should not be restricted by new gun laws.',ax:'civil',m:1},
    {t:'Ending affirmative action in college admissions was the right call.',ax:'scty',m:-1},
    {t:'Climate change demands a Green New Deal.',ax:'ecol',m:1},
    {t:'The influence of billionaires like Elon Musk on politics is a good thing.',ax:'econ',m:-1},
    {t:'Capital punishment should remain legal.',ax:'just',m:-1},
    {t:'Reforming or redirecting police funding toward social services is a good idea.',ax:'just',m:1},
    {t:'Marijuana should be legalised nationwide.',ax:'civil',m:1},
    {t:'The Electoral College should be abolished in favour of the popular vote.',ax:'dmcy',m:1},
    {t:'Christianity should have a larger role in American government.',ax:'reln',m:-1},
    {t:'The United States spends too much on its military.',ax:'mil',m:1},
    {t:'Extreme wealth should be capped; billionaires should not exist.',ax:'prop',m:1},
    {t:'Immigration makes America stronger.',ax:'imm',m:1},
    {t:'States should have far more power relative to the federal government.',ax:'state',m:1},
    {t:'Free trade deals like NAFTA have hurt American workers.',ax:'dipl',m:-1},
    {t:'LGBTQ+ rights should be protected by federal law.',ax:'scty',m:1},
    {t:'Labor unions are good for American workers.',ax:'econ',m:1},
    {t:'Withdrawing from international climate agreements was the right move.',ax:'ecol',m:-1},
    {t:'The government should guarantee paid family and medical leave.',ax:'welf',m:1},
    {t:'The Supreme Court has become too politicised.',ax:'dmcy',m:1},
    {t:'Patriotic education should be mandatory in public schools.',ax:'scty',m:-1}
  ],
  GB: [
    {t:'Brexit was the right decision for Britain.',ax:'dipl',m:-1},
    {t:'Nigel Farage and Reform UK offer what Britain needs.',ax:'imm',m:-1},
    {t:'Keir Starmer\u2019s Labour government is good for the country.',ax:'econ',m:1},
    {t:'Boris Johnson was a good Prime Minister.',ax:'dipl',m:-1},
    {t:'The monarchy should be abolished in favour of an elected head of state.',ax:'scty',m:1},
    {t:'The NHS should remain publicly funded and free at the point of use.',ax:'welf',m:1},
    {t:'Scotland should become an independent country.',ax:'state',m:1},
    {t:'The Rwanda deportation scheme was good policy.',ax:'imm',m:-1},
    {t:'The UK should rejoin the European Union.',ax:'dipl',m:1},
    {t:'Britain should keep its Trident nuclear deterrent.',ax:'mil',m:-1},
    {t:'Immigration into the UK is too high.',ax:'imm',m:-1},
    {t:'The House of Lords should be abolished or fully elected.',ax:'dmcy',m:1},
    {t:'Boris Johnson\u2019s 2019 suspension of Parliament was wrong.',ax:'dmcy',m:1},
    {t:'The monarchy is a valuable national institution worth keeping.',ax:'scty',m:-1},
    {t:'The railways and water companies should be renationalised.',ax:'prop',m:1},
    {t:'The UK should pursue net zero by 2050 as a priority.',ax:'ecol',m:1},
    {t:'Private schools should lose their charitable tax breaks.',ax:'econ',m:1},
    {t:'The right to strike should be firmly protected.',ax:'econ',m:1},
    {t:'University tuition fees should be abolished.',ax:'welf',m:1},
    {t:'Britain should be proud of the British Empire.',ax:'scty',m:-1},
    {t:'Proportional representation should replace first-past-the-post.',ax:'dmcy',m:1},
    {t:'Transgender rights and self-identification should be supported.',ax:'scty',m:1},
    {t:'The BBC licence fee should be abolished.',ax:'econ',m:-1},
    {t:'Tougher sentencing and law-and-order policies are needed.',ax:'just',m:-1},
    {t:'More power should be devolved to English regions and cities.',ax:'state',m:1},
    {t:'The Church of England should be separated from the state.',ax:'reln',m:1},
    {t:'ULEZ-style clean air zones are good for cities.',ax:'ecol',m:1},
    {t:'The UK should cut its foreign aid budget.',ax:'dipl',m:-1}
  ],
  AU: [
    {t:'The 2023 Indigenous Voice to Parliament referendum should have passed.',ax:'scty',m:1},
    {t:'Anthony Albanese\u2019s Labor government is good for Australia.',ax:'econ',m:1},
    {t:'Peter Dutton and the Coalition would offer better leadership.',ax:'econ',m:-1},
    {t:'Pauline Hanson\u2019s One Nation represents legitimate concerns.',ax:'imm',m:-1},
    {t:'Australia should become a republic.',ax:'scty',m:1},
    {t:'The AUKUS nuclear submarine deal is good for Australia.',ax:'mil',m:-1},
    {t:'Australia should phase out coal and gas exports.',ax:'ecol',m:1},
    {t:'Immigration to Australia is too high.',ax:'imm',m:-1},
    {t:'Offshore detention of asylum seekers should end.',ax:'imm',m:1},
    {t:'Medicare should be expanded and kept fully public.',ax:'welf',m:1},
    {t:'Negative gearing property tax breaks should be scrapped.',ax:'econ',m:1},
    {t:'Australia Day should be moved from January 26th.',ax:'scty',m:1},
    {t:'Australia\u2019s strict gun laws should be maintained.',ax:'civil',m:-1},
    {t:'Australia should reduce its economic reliance on China.',ax:'dipl',m:-1},
    {t:'The mining industry is vital and should be protected.',ax:'ecol',m:-1},
    {t:'University should be free or much cheaper.',ax:'welf',m:1},
    {t:'Legalising same-sex marriage was a positive change.',ax:'scty',m:1},
    {t:'Compulsory voting is a good thing for democracy.',ax:'dmcy',m:1},
    {t:'The states should have more power than the federal government in Canberra.',ax:'state',m:1},
    {t:'Renewables should be prioritised over new fossil-fuel projects.',ax:'ecol',m:1},
    {t:'The ABC public broadcaster should be well funded.',ax:'econ',m:1},
    {t:'Religion should have more influence in Australian politics.',ax:'reln',m:-1},
    {t:'Tougher sentencing and law-and-order policies are needed.',ax:'just',m:-1},
    {t:'The wealthy should pay higher taxes to fund public services.',ax:'econ',m:1}
  ],
  CA: [
    {t:'Justin Trudeau was a good Prime Minister.',ax:'scty',m:1},
    {t:'Pierre Poilievre and the Conservatives offer what Canada needs.',ax:'econ',m:-1},
    {t:'The 2022 \u2018Freedom Convoy\u2019 trucker protest was a legitimate protest.',ax:'civil',m:1},
    {t:'Invoking the Emergencies Act to end the convoy was justified.',ax:'civil',m:-1},
    {t:'The federal carbon tax is good policy.',ax:'ecol',m:1},
    {t:'Canada\u2019s universal healthcare should stay public and be strengthened.',ax:'welf',m:1},
    {t:'Immigration levels into Canada are too high.',ax:'imm',m:-1},
    {t:'Quebec should have the right to become an independent country.',ax:'state',m:1},
    {t:'Canada should keep the British monarch as its head of state.',ax:'scty',m:-1},
    {t:'Multiculturalism is one of Canada\u2019s greatest strengths.',ax:'imm',m:1},
    {t:'Canada should increase military spending to meet NATO targets.',ax:'mil',m:-1},
    {t:'Canada\u2019s gun ownership laws should be relaxed.',ax:'civil',m:1},
    {t:'Indigenous reconciliation should be a top national priority.',ax:'scty',m:1},
    {t:'The wealthy and big corporations should pay higher taxes.',ax:'econ',m:1},
    {t:'Canada should rapidly wind down the Alberta oil sands.',ax:'ecol',m:1},
    {t:'Assisted dying (MAID) laws are a positive step.',ax:'civil',m:1},
    {t:'The government should provide universal dental care and pharmacare.',ax:'welf',m:1},
    {t:'Provinces should have more autonomy from Ottawa.',ax:'state',m:1},
    {t:'Canada should welcome more refugees.',ax:'imm',m:1},
    {t:'Tougher criminal sentencing is needed in Canada.',ax:'just',m:-1},
    {t:'Protecting Canadian industries through supply management is good policy.',ax:'dipl',m:-1},
    {t:'Religion should play a bigger role in Canadian public life.',ax:'reln',m:-1},
    {t:'Proportional representation should replace first-past-the-post.',ax:'dmcy',m:1},
    {t:'Bilingualism in English and French should remain official policy.',ax:'scty',m:1}
  ],
  DE: [
    {t:'Angela Merkel\u2019s long chancellorship was good for Germany.',ax:'econ',m:1},
    {t:'The AfD (Alternative f\u00fcr Deutschland) raises legitimate concerns.',ax:'imm',m:-1},
    {t:'Merkel was right to welcome over a million refugees in 2015.',ax:'imm',m:1},
    {t:'Germany should complete its phase-out of coal power.',ax:'ecol',m:1},
    {t:'The constitutional \u2018debt brake\u2019 on spending should be relaxed.',ax:'econ',m:1},
    {t:'Germany should increase military spending and keep supporting Ukraine.',ax:'mil',m:-1},
    {t:'Immigration into Germany is too high.',ax:'imm',m:-1},
    {t:'The European Union should become more deeply integrated.',ax:'dipl',m:1},
    {t:'Germany should take a harder line against Russia.',ax:'dipl',m:-1},
    {t:'The social market economy and strong welfare state should be protected.',ax:'welf',m:1},
    {t:'Same-sex and LGBTQ rights should be fully protected.',ax:'scty',m:1},
    {t:'Germany should keep openly remembering and atoning for its history.',ax:'scty',m:1},
    {t:'The minimum wage should be raised significantly.',ax:'econ',m:1},
    {t:'Legalising cannabis was a positive step.',ax:'civil',m:1},
    {t:'Asylum rules should be tightened and immigration reduced.',ax:'imm',m:-1},
    {t:'The Energiewende shift to renewable energy should be accelerated.',ax:'ecol',m:1},
    {t:'National pride in Germany should be more openly encouraged.',ax:'dipl',m:-1},
    {t:'The wealthy should pay higher taxes.',ax:'econ',m:1},
    {t:'Religion should have more influence in German politics.',ax:'reln',m:-1},
    {t:'The federal states (L\u00e4nder) should have more power.',ax:'state',m:1},
    {t:'Germany should support shared EU debt and deeper fiscal union.',ax:'dipl',m:1},
    {t:'Tougher law and order and policing are needed.',ax:'just',m:-1}
  ],
  FR: [
    {t:'Emmanuel Macron has been good for France.',ax:'econ',m:-1},
    {t:'Marine Le Pen and the National Rally offer what France needs.',ax:'imm',m:-1},
    {t:'Jean-Luc M\u00e9lenchon\u2019s left-wing programme is right for France.',ax:'econ',m:1},
    {t:'Raising the retirement age to 64 was a mistake.',ax:'welf',m:1},
    {t:'France\u2019s strict secularism (la\u00efcit\u00e9) should be firmly upheld.',ax:'reln',m:1},
    {t:'Banning conspicuous religious symbols in public schools is justified.',ax:'reln',m:1},
    {t:'Immigration into France is too high.',ax:'imm',m:-1},
    {t:'The Yellow Vests (Gilets Jaunes) protests were justified.',ax:'econ',m:1},
    {t:'France should rapidly expand renewable energy.',ax:'ecol',m:1},
    {t:'A wealth tax on the richest should be reinstated.',ax:'prop',m:1},
    {t:'The European Union should have more power over member states.',ax:'dipl',m:1},
    {t:'France should act independently and reduce US and NATO influence.',ax:'dipl',m:-1},
    {t:'Same-sex marriage and LGBTQ rights are a positive for France.',ax:'scty',m:1},
    {t:'Strong law and order and tougher policing are needed.',ax:'just',m:-1},
    {t:'The 35-hour week and strong labour protections should be kept.',ax:'econ',m:1},
    {t:'France should take a tougher stance on immigration and integration.',ax:'imm',m:-1},
    {t:'Public healthcare and welfare should be expanded.',ax:'welf',m:1},
    {t:'French national identity and pride should be actively promoted.',ax:'dipl',m:-1},
    {t:'Power should be decentralised to France\u2019s regions.',ax:'state',m:1},
    {t:'Tackling climate change should take priority over economic growth.',ax:'ecol',m:1},
    {t:'The wealthy should pay much higher taxes.',ax:'econ',m:1},
    {t:'A strong president who can act decisively is better than messy coalitions.',ax:'dmcy',m:-1}
  ],
  IN: [
    {t:'Narendra Modi has been good for India.',ax:'dipl',m:-1},
    {t:'The BJP\u2019s Hindu-nationalist vision is good for the country.',ax:'reln',m:-1},
    {t:'The Citizenship Amendment Act (CAA) was the right policy.',ax:'imm',m:-1},
    {t:'India should remain a secular state that favours no religion.',ax:'reln',m:1},
    {t:'The Congress party\u2019s secular, welfare vision is better for India.',ax:'econ',m:1},
    {t:'Caste-based reservations (affirmative action) should continue.',ax:'scty',m:1},
    {t:'Removing Article 370\u2019s special status for Kashmir was justified.',ax:'dipl',m:-1},
    {t:'India should prioritise rapid free-market economic growth.',ax:'econ',m:-1},
    {t:'The farmers were right to protest the 2020 farm laws.',ax:'econ',m:1},
    {t:'India should build a much stronger welfare state for the poor.',ax:'welf',m:1},
    {t:'Cow-protection laws should be strictly enforced.',ax:'reln',m:-1},
    {t:'India should take a hard military line against Pakistan and China.',ax:'mil',m:-1},
    {t:'Women\u2019s rights and gender equality should be a top priority.',ax:'scty',m:1},
    {t:'Inequality should be reduced through higher taxes on the rich.',ax:'econ',m:1},
    {t:'A strong central government is better than powerful state governments.',ax:'state',m:-1},
    {t:'Freedom of the press and the right to dissent must be fully protected.',ax:'civil',m:1},
    {t:'India should transition away from coal toward renewables.',ax:'ecol',m:1},
    {t:'Western influence should give way to Indian tradition and culture.',ax:'scty',m:-1},
    {t:'LGBTQ rights should be fully recognised in India.',ax:'scty',m:1},
    {t:'A powerful decisive leader is better for India than coalition politics.',ax:'dmcy',m:-1},
    {t:'India\u2019s democratic institutions should be strengthened against concentration of power.',ax:'dmcy',m:1},
    {t:'State-owned industries should be privatised.',ax:'prop',m:-1}
  ],
  NZ: [
    {t:'Jacinda Ardern was a good Prime Minister.',ax:'scty',m:1},
    {t:'Christopher Luxon and the National Party offer better leadership.',ax:'econ',m:-1},
    {t:'The Treaty of Waitangi and M\u0101ori rights should be strengthened.',ax:'scty',m:1},
    {t:'Attempts to weaken the Treaty principles are a bad idea.',ax:'scty',m:1},
    {t:'The strict gun laws passed after the Christchurch attack were right.',ax:'civil',m:-1},
    {t:'New Zealand should remain proudly nuclear-free.',ax:'mil',m:1},
    {t:'New Zealand should become a republic.',ax:'scty',m:1},
    {t:'Immigration into New Zealand is too high.',ax:'imm',m:-1},
    {t:'Public healthcare should be well funded and free.',ax:'welf',m:1},
    {t:'New Zealand should take strong action on climate change.',ax:'ecol',m:1},
    {t:'The wealthy should pay higher taxes, including a capital gains tax.',ax:'econ',m:1},
    {t:'Te reo M\u0101ori and biculturalism should be actively promoted.',ax:'scty',m:1},
    {t:'New Zealand should align more closely with the US on security.',ax:'dipl',m:-1},
    {t:'University and education should be much more affordable.',ax:'welf',m:1},
    {t:'Cannabis should be legalised.',ax:'civil',m:1},
    {t:'Same-sex and LGBTQ rights are a positive for society.',ax:'scty',m:1},
    {t:'Tougher law-and-order policies are needed.',ax:'just',m:-1},
    {t:'Farming should be protected from strict environmental rules.',ax:'ecol',m:-1},
    {t:'Local councils should be given more power.',ax:'state',m:1},
    {t:'Religion should have more influence in politics.',ax:'reln',m:-1}
  ],
  IE: [
    {t:'Sinn F\u00e9in offers the leadership Ireland needs.',ax:'econ',m:1},
    {t:'Ireland should be reunified with Northern Ireland.',ax:'state',m:1},
    {t:'Legalising abortion by repealing the Eighth Amendment was right.',ax:'scty',m:1},
    {t:'Same-sex marriage was a positive change for Ireland.',ax:'scty',m:1},
    {t:'The Catholic Church should have less influence over Irish society.',ax:'reln',m:1},
    {t:'Immigration into Ireland is too high.',ax:'imm',m:-1},
    {t:'Ireland\u2019s low corporate tax rate should be protected.',ax:'econ',m:-1},
    {t:'The housing crisis requires a big state-led public housing programme.',ax:'welf',m:1},
    {t:'Ireland should remain militarily neutral.',ax:'mil',m:1},
    {t:'The European Union has been good for Ireland.',ax:'dipl',m:1},
    {t:'The wealthy and big corporations should pay higher taxes.',ax:'econ',m:1},
    {t:'The Irish language and culture should be actively promoted.',ax:'dipl',m:-1},
    {t:'Public healthcare (Sl\u00e1intecare) should be fully funded and universal.',ax:'welf',m:1},
    {t:'Ireland should take strong action on climate change.',ax:'ecol',m:1},
    {t:'Tougher law and order is needed.',ax:'just',m:-1},
    {t:'LGBTQ rights should be fully protected.',ax:'scty',m:1},
    {t:'The asylum system (direct provision) should be reformed to be more humane.',ax:'imm',m:1},
    {t:'Ireland should welcome more refugees.',ax:'imm',m:1},
    {t:'Local and regional government should have more power.',ax:'state',m:1},
    {t:'Religion should play a bigger role in public life.',ax:'reln',m:-1}
  ]
};

/* ============ Ideologies ============ */
/* coords 0-100 on all 14 axes, in AXES order:
   [econ, civil, dmcy, scty, dipl, state, ecol, reln, tact, mil, prop, welf, imm, just] */
const IDEOLOGIES = [
  {n:'Anarcho-Communism',c:[96,95,88,85,85,92,78,80,8,75,98,95,88,90],d:'A stateless, classless society built on voluntary communes and common ownership, combining radical equality with maximum personal freedom.'},
  {n:'Anarcho-Syndicalism',c:[92,88,85,76,72,85,70,76,12,70,95,88,80,82],d:'Workers run society through revolutionary trade unions, abolishing the state in favour of federated worker councils.'},
  {n:'Libertarian Socialism',c:[86,90,90,80,74,84,76,74,25,74,88,86,78,84],d:'Socialism without a coercive state, emphasising self-management, direct democracy and decentralised common ownership.'},
  {n:'Council Communism',c:[94,70,82,74,74,70,60,80,12,55,95,88,70,72],d:'Rule by democratic workers\u2019 councils rather than a party or bureaucracy, rejecting both capitalism and one-party rule.'},
  {n:'Left-Communism',c:[96,55,55,72,86,55,56,82,8,55,96,88,78,70],d:'A revolutionary Marxist current critical of both parliamentary reform and authoritarian party-states.'},
  {n:'Trotskyism',c:[95,44,45,76,90,40,55,86,6,40,96,88,80,66],d:'Revolutionary Marxism advocating international permanent revolution and opposition to bureaucratic one-party rule.'},
  {n:'Marxism\u2013Leninism',c:[95,15,20,60,66,20,45,86,10,25,97,85,65,45],d:'A vanguard party leads a centralised state to abolish private ownership of the means of production.'},
  {n:'Maoism',c:[95,18,18,55,50,40,40,80,4,15,96,80,55,40],d:'A peasant-based revolutionary communism built on continuous class struggle and mass mobilisation.'},
  {n:'Stalinism',c:[90,8,5,45,35,10,30,80,20,8,95,80,45,20],d:'A highly centralised, authoritarian Marxism\u2013Leninism built on a powerful one-party state and command economy.'},
  {n:'Democratic Socialism',c:[82,66,85,76,66,55,70,66,62,65,78,92,72,78],d:'Aims for a socialist economy achieved democratically, with extensive public ownership and strong civil liberties.'},
  {n:'Social Democracy',c:[70,64,88,68,66,52,64,62,80,60,55,90,68,74],d:'A regulated market economy with a generous welfare state, strong unions and redistribution within democracy.'},
  {n:'Eco-Socialism / Green Left',c:[82,70,82,82,76,65,97,68,35,78,82,88,80,82],d:'Merges socialism with environmentalism, arguing ecological survival requires ending profit-driven growth.'},
  {n:'Progressivism',c:[63,70,82,88,72,52,72,70,65,62,45,78,78,78],d:'Focuses on social reform, expanding rights and using government to correct injustice and inequality.'},
  {n:'Social Liberalism',c:[58,74,85,74,70,55,62,66,78,60,38,72,74,72],d:'Combines a market economy with civil liberties, a welfare safety net and progressive social values.'},
  {n:'Left-Populism',c:[76,52,70,58,38,50,56,56,45,55,55,82,45,55],d:'Champions ordinary people against economic elites, favouring redistribution and often economic nationalism.'},
  {n:'Mutualism',c:[68,82,82,66,60,82,66,64,45,72,62,55,70,78],d:'A market socialism based on cooperatives, mutual credit and workers owning what they produce, with a minimal state.'},
  {n:'Georgism',c:[58,68,78,62,62,60,72,60,70,60,55,55,68,65],d:'Argues land and natural resources belong to all, funding society through a land-value tax while keeping free markets.'},
  {n:'Distributism',c:[54,50,60,35,40,78,58,28,60,45,35,45,45,45],d:'Seeks to spread property ownership as widely as possible, rooted in family, community and Christian social teaching.'},
  {n:'Classical Liberalism',c:[40,80,78,60,62,60,42,60,70,55,20,30,62,58],d:'Prioritises individual liberty, constitutional government, free markets and limited state power.'},
  {n:'Neoliberalism',c:[26,60,68,56,78,50,36,60,72,45,15,25,62,45],d:'Favours free markets, deregulation, privatisation and global trade, with a limited economic role for the state.'},
  {n:'Libertarianism',c:[20,92,72,56,58,72,35,64,60,62,12,15,58,58],d:'Maximum individual freedom in personal and economic life, with a very small state and strong property rights.'},
  {n:'Anarcho-Capitalism',c:[10,95,50,52,55,92,26,58,20,60,5,8,55,50],d:'Would abolish the state entirely, replacing all public functions with private property and voluntary exchange.'},
  {n:'Minarchism',c:[22,86,70,54,55,78,32,58,60,50,15,15,55,50],d:'A night-watchman state limited to police, courts and defence, leaving everything else to free markets.'},
  {n:'Centrism',c:[50,52,75,52,52,52,50,52,72,52,48,50,52,52],d:'Rejects strong ideology, favouring pragmatic, moderate policy that balances left and right.'},
  {n:'Third Way',c:[54,60,78,62,68,52,56,58,80,55,42,60,62,58],d:'A centre-left blend of market economics with social investment and modernised public services.'},
  {n:'Christian Democracy',c:[50,46,70,40,55,55,52,26,72,48,42,60,50,48],d:'A centre-right tradition blending market economics with a welfare state and conservative Christian social values.'},
  {n:'One-Nation Conservatism',c:[48,46,68,36,50,45,46,42,72,42,40,55,42,42],d:'A paternalistic conservatism that accepts the welfare state to preserve social unity and stability.'},
  {n:'Conservatism',c:[35,42,65,26,42,50,36,38,68,38,30,35,38,35],d:'Values tradition, order, national institutions and gradual change, with a preference for free enterprise.'},
  {n:'Liberal Conservatism',c:[38,52,70,42,55,55,40,50,70,45,28,35,48,42],d:'Combines free-market economics and individual liberty with respect for tradition and social order.'},
  {n:'Neoconservatism',c:[30,36,60,40,48,40,32,52,65,18,25,30,45,32],d:'Right-leaning economics paired with an assertive, interventionist foreign policy promoting national values abroad.'},
  {n:'Right-Populism',c:[38,30,45,24,16,45,26,46,42,30,30,40,12,25],d:'Champions the people against elites and outsiders, combining nationalism, social conservatism and border control.'},
  {n:'National Conservatism',c:[42,28,40,18,15,40,32,28,55,28,32,42,14,28],d:'Emphasises nation, family, tradition and strong borders, with deep scepticism of globalisation.'},
  {n:'Traditionalist Conservatism',c:[38,28,35,12,32,55,32,14,55,35,32,35,22,25],d:'Prioritises religion, hierarchy and inherited custom, resisting most social and cultural change.'},
  {n:'Nationalism',c:[42,30,40,30,8,35,36,46,45,25,36,45,14,30],d:'Places the interests, identity and sovereignty of the nation above all other political concerns.'},
  {n:'Constitutional Monarchism',c:[50,55,65,45,55,50,50,45,75,50,45,55,52,50],d:'Retains a hereditary monarch as head of state within a democratic constitution that limits royal power.'},
  {n:'Absolute Monarchism',c:[46,12,8,12,35,30,42,22,55,30,42,45,40,25],d:'Rule by a hereditary monarch holding supreme, largely unchecked authority over the state.'},
  {n:'Reactionary Traditionalism',c:[40,18,20,6,28,45,34,12,45,30,38,40,22,18],d:'Seeks to reverse modern change and restore an idealised social, religious and political order of the past.'},
  {n:'Theocracy',c:[46,10,10,8,30,35,36,3,45,25,42,50,30,18],d:'Government founded on religious law and clerical authority, where faith directly governs public life.'},
  {n:'Religious Fundamentalism',c:[48,10,10,5,26,40,38,2,40,25,44,50,26,15],d:'Insists that strict religious doctrine should shape law, morality and the structure of the state.'},
  {n:'Christian Nationalism',c:[36,20,30,10,20,45,30,8,45,22,34,42,18,22],d:'Fuses national identity with a dominant Christian religious character enforced through the state.'},
  {n:'Islamism',c:[55,7,14,6,16,32,32,3,28,22,46,60,14,10],d:'Political Islam seeking to order the state, law and society according to Islamic principles and sharia.'},
  {n:'Islamic Democracy',c:[56,42,62,26,42,46,46,12,60,46,48,60,42,32],d:'Combines representative democracy with Islamic values, accepting elections and pluralism within a religious framework.'},
  {n:'Hindu Nationalism (Hindutva)',c:[42,26,44,12,10,38,32,10,50,26,34,45,10,22],d:'An Indian nationalism that defines the nation through Hindu culture, identity and civilisation.'},
  {n:'Religious Socialism',c:[82,56,74,46,60,55,64,26,52,62,74,86,60,55],d:'Holds that religious ethics demand social justice, uniting faith with collective ownership and a strong welfare state.'},
  {n:'Clerical Fascism',c:[40,6,6,10,12,20,30,7,26,10,40,50,10,9],s:1,d:'Fuses fascist dictatorship with religious authority, using faith to sanctify an authoritarian state. Listed for historical understanding, not endorsement.'},
  {n:'Falangism',c:[42,10,10,18,15,25,30,12,30,10,40,50,12,15],s:1,d:'An authoritarian nationalist movement blending corporatism, traditional religion and a single-party state.'},
  {n:'Fascism',c:[35,5,4,22,8,15,30,45,25,5,35,45,8,8],s:1,d:'A dictatorial, ultranationalist ideology built on a one-party state, suppression of dissent and militarism. Listed for historical understanding, not endorsement.'},
  {n:'National Socialism',c:[35,3,3,14,4,12,30,42,20,3,35,48,3,4],s:1,d:'The racist, totalitarian ideology of Nazi Germany, combining ultranationalism, dictatorship and genocidal racial doctrine. Listed for historical understanding, not endorsement.'},
  {n:'Green Environmentalism',c:[60,64,82,72,68,65,96,62,55,78,45,68,72,72],d:'Places ecological sustainability at the centre of politics, favouring strong environmental protection and grassroots democracy.'},
  {n:'Technocracy',c:[52,42,45,56,62,40,56,66,65,50,45,55,58,60],d:'Government by scientific and technical experts who make decisions on evidence rather than popular opinion.'},
  {n:'Feminism',c:[68,70,80,90,68,52,64,66,60,68,45,72,74,72],d:'Seeks full political, economic and social equality between the sexes and the dismantling of patriarchal structures.'},
  {n:'Agrarianism',c:[55,50,60,30,30,78,72,35,60,50,45,50,40,45],d:'Champions rural life, farming communities and land stewardship as the moral foundation of society.'},
  {n:'Cosmopolitan Globalism',c:[56,62,75,66,96,40,60,64,70,65,42,60,90,65],d:'Views humanity as a single global community, favouring open borders, global governance and world citizenship.'}
];

/* ============ Parties by country ============ */
/* coords 0-100 on [eq, lb, pr] = [Equality, Liberty, Progress] */
const PARTIES = {
  US: [
    {n:'Democratic Party',c:[62,60,70]},
    {n:'Republican Party',c:[30,36,26]},
    {n:'Libertarian Party',c:[24,90,56]},
    {n:'Green Party',c:[80,70,86]},
    {n:'Progressive Left',c:[84,68,84]},
    {n:'Constitution Party',c:[30,20,10]}
  ],
  GB: [
    {n:'Labour Party',c:[65,58,68]},
    {n:'Conservative Party',c:[35,40,30]},
    {n:'Liberal Democrats',c:[54,72,72]},
    {n:'Green Party',c:[78,72,86]},
    {n:'Reform UK',c:[34,32,16]},
    {n:'Scottish National Party',c:[62,60,68]},
    {n:'Plaid Cymru',c:[68,62,72]}
  ],
  AU: [
    {n:'Labor Party',c:[62,56,65]},
    {n:'Liberal Party',c:[33,42,32]},
    {n:'The Nationals',c:[36,35,22]},
    {n:'The Greens',c:[80,70,86]},
    {n:'One Nation',c:[36,26,12]}
  ],
  CA: [
    {n:'Liberal Party',c:[58,60,68]},
    {n:'Conservative Party',c:[33,42,30]},
    {n:'New Democratic Party (NDP)',c:[76,62,78]},
    {n:'Bloc Qu\u00e9b\u00e9cois',c:[62,58,70]},
    {n:'Green Party',c:[74,68,84]},
    {n:'People\u2019s Party (PPC)',c:[30,30,16]}
  ],
  DE: [
    {n:'SPD (Social Democrats)',c:[66,60,68]},
    {n:'CDU/CSU (Christian Democrats)',c:[40,46,38]},
    {n:'Alliance 90/The Greens',c:[72,68,84]},
    {n:'FDP (Free Democrats)',c:[30,66,60]},
    {n:'AfD',c:[34,26,14]},
    {n:'Die Linke (The Left)',c:[88,58,78]}
  ],
  FR: [
    {n:'Renaissance (Macron)',c:[42,58,60]},
    {n:'National Rally',c:[36,26,18]},
    {n:'La France Insoumise',c:[82,54,72]},
    {n:'Les R\u00e9publicains',c:[34,40,30]},
    {n:'Socialist Party',c:[66,60,70]},
    {n:'The Greens (EELV)',c:[72,66,84]}
  ],
  IN: [
    {n:'Bharatiya Janata Party (BJP)',c:[40,32,22]},
    {n:'Indian National Congress',c:[58,58,62]},
    {n:'Aam Aadmi Party (AAP)',c:[60,56,60]},
    {n:'CPI(M) / Left Front',c:[88,50,70]},
    {n:'Regional / Others',c:[52,50,50]}
  ],
  NZ: [
    {n:'Labour Party',c:[62,58,68]},
    {n:'National Party',c:[34,44,34]},
    {n:'Green Party',c:[80,70,86]},
    {n:'ACT New Zealand',c:[24,70,52]},
    {n:'New Zealand First',c:[40,34,26]},
    {n:'Te P\u0101ti M\u0101ori',c:[72,62,80]}
  ],
  IE: [
    {n:'Fianna F\u00e1il',c:[48,50,50]},
    {n:'Fine Gael',c:[38,52,48]},
    {n:'Sinn F\u00e9in',c:[70,56,66]},
    {n:'Green Party',c:[72,66,84]},
    {n:'Labour Party',c:[64,60,70]},
    {n:'Social Democrats',c:[70,64,76]},
    {n:'People Before Profit',c:[90,60,82]}
  ],
  IT: [
    {n:'Brothers of Italy',c:[34,30,18]},
    {n:'Democratic Party',c:[64,58,68]},
    {n:'Five Star Movement',c:[66,52,60]},
    {n:'Lega',c:[34,28,16]},
    {n:'Forza Italia',c:[36,46,36]},
    {n:'Greens and Left Alliance',c:[82,64,84]}
  ],
  ES: [
    {n:'PSOE (Socialists)',c:[64,58,68]},
    {n:'People\u2019s Party (PP)',c:[36,44,34]},
    {n:'Vox',c:[32,26,14]},
    {n:'Sumar / Podemos',c:[86,60,80]},
    {n:'ERC (Catalan Left)',c:[72,62,74]},
    {n:'PNV (Basque Nationalists)',c:[44,50,46]}
  ],
  PT: [
    {n:'Socialist Party (PS)',c:[64,58,68]},
    {n:'Social Democratic Party (PSD)',c:[42,50,44]},
    {n:'Chega',c:[34,26,14]},
    {n:'Left Bloc',c:[88,60,82]},
    {n:'CDU (Communists\u2013Greens)',c:[90,48,72]},
    {n:'Liberal Initiative',c:[24,80,58]}
  ],
  NL: [
    {n:'VVD (Liberals)',c:[34,60,55]},
    {n:'PVV (Freedom Party)',c:[36,28,16]},
    {n:'GreenLeft\u2013Labour',c:[74,64,82]},
    {n:'D66',c:[46,70,72]},
    {n:'CDA (Christian Democrats)',c:[44,48,42]},
    {n:'Party for the Animals',c:[82,66,88]}
  ],
  BE: [
    {n:'PS (Socialists)',c:[72,56,70]},
    {n:'N-VA (Flemish Nationalists)',c:[36,42,30]},
    {n:'Vlaams Belang',c:[34,24,14]},
    {n:'Open VLD (Liberals)',c:[34,62,58]},
    {n:'CD&V (Christian Democrats)',c:[46,48,42]},
    {n:'Ecolo\u2013Groen (Greens)',c:[78,66,86]},
    {n:'PVDA\u2013PTB (Workers)',c:[90,50,74]}
  ],
  SE: [
    {n:'Social Democrats',c:[66,58,70]},
    {n:'Moderates',c:[32,52,44]},
    {n:'Sweden Democrats',c:[36,28,16]},
    {n:'Left Party',c:[86,60,80]},
    {n:'Centre Party',c:[46,58,58]},
    {n:'Greens',c:[78,66,86]}
  ],
  NO: [
    {n:'Labour Party',c:[66,58,70]},
    {n:'Conservative Party',c:[32,54,46]},
    {n:'Progress Party',c:[30,36,20]},
    {n:'Socialist Left',c:[84,62,80]},
    {n:'Centre Party',c:[48,50,48]},
    {n:'Greens',c:[78,66,86]}
  ],
  DK: [
    {n:'Social Democrats',c:[62,54,66]},
    {n:'Venstre (Liberals)',c:[32,58,50]},
    {n:'Denmark Democrats',c:[36,30,18]},
    {n:'Red\u2013Green Alliance',c:[90,60,82]},
    {n:'Conservative People\u2019s Party',c:[36,46,38]},
    {n:'Socialist People\u2019s Party',c:[80,62,80]}
  ],
  FI: [
    {n:'Social Democrats (SDP)',c:[64,58,70]},
    {n:'National Coalition',c:[30,56,48]},
    {n:'Finns Party',c:[34,28,16]},
    {n:'Centre Party',c:[46,52,48]},
    {n:'Left Alliance',c:[86,60,80]},
    {n:'Greens',c:[78,66,86]}
  ],
  PL: [
    {n:'Law and Justice (PiS)',c:[46,26,16]},
    {n:'Civic Coalition (KO)',c:[40,58,58]},
    {n:'The Left (Lewica)',c:[72,58,74]},
    {n:'Third Way',c:[44,48,42]},
    {n:'Confederation',c:[24,40,14]}
  ],
  AT: [
    {n:'SP\u00d6 (Social Democrats)',c:[66,58,70]},
    {n:'\u00d6VP (People\u2019s Party)',c:[40,44,38]},
    {n:'FP\u00d6 (Freedom Party)',c:[34,28,14]},
    {n:'Greens',c:[78,66,86]},
    {n:'NEOS (Liberals)',c:[32,66,62]}
  ],
  CH: [
    {n:'Swiss People\u2019s Party (SVP)',c:[34,36,20]},
    {n:'Social Democrats',c:[70,58,72]},
    {n:'FDP.The Liberals',c:[30,62,54]},
    {n:'The Centre',c:[44,50,44]},
    {n:'Greens',c:[78,66,86]},
    {n:'Green Liberals',c:[46,64,66]}
  ],
  GR: [
    {n:'New Democracy',c:[34,44,34]},
    {n:'SYRIZA',c:[80,58,74]},
    {n:'PASOK',c:[62,56,66]},
    {n:'KKE (Communists)',c:[92,42,66]},
    {n:'Greek Solution',c:[34,26,14]}
  ],
  CZ: [
    {n:'ANO',c:[46,44,38]},
    {n:'ODS (Civic Democrats)',c:[30,54,46]},
    {n:'Pirates',c:[50,72,74]},
    {n:'SPD (Freedom & Direct Democracy)',c:[36,28,14]},
    {n:'Communist Party',c:[88,42,64]},
    {n:'Mayors (STAN)',c:[44,54,52]}
  ],
  HU: [
    {n:'Fidesz',c:[40,26,16]},
    {n:'TISZA',c:[44,54,52]},
    {n:'Democratic Coalition (DK)',c:[56,58,64]},
    {n:'Momentum',c:[46,64,66]},
    {n:'Jobbik',c:[40,34,20]},
    {n:'Socialists (MSZP)',c:[66,56,66]}
  ],
  RO: [
    {n:'PSD (Social Democrats)',c:[60,46,44]},
    {n:'PNL (Liberals)',c:[38,54,48]},
    {n:'USR (Save Romania)',c:[40,64,66]},
    {n:'AUR (Nationalists)',c:[40,28,14]},
    {n:'UDMR (Hungarian Union)',c:[46,48,44]}
  ],
  UA: [
    {n:'Servant of the People',c:[46,58,60]},
    {n:'European Solidarity',c:[38,50,46]},
    {n:'Batkivshchyna',c:[54,50,52]},
    {n:'Holos (Voice)',c:[40,64,62]},
    {n:'Opposition Platform',c:[50,36,30]}
  ],
  RU: [
    {n:'United Russia',c:[38,18,26]},
    {n:'Communist Party (KPRF)',c:[82,36,50]},
    {n:'LDPR',c:[34,26,16]},
    {n:'A Just Russia',c:[64,42,52]},
    {n:'Yabloko (liberal opposition)',c:[46,70,70]}
  ],
  TR: [
    {n:'AKP (Justice & Development)',c:[46,26,20]},
    {n:'CHP (Republican People\u2019s)',c:[56,58,62]},
    {n:'MHP (Nationalists)',c:[36,26,14]},
    {n:'\u0130Y\u0130 (Good Party)',c:[40,44,42]},
    {n:'DEM (pro-Kurdish left)',c:[80,58,76]},
    {n:'Saadet (Islamist)',c:[50,24,12]}
  ],
  JP: [
    {n:'Liberal Democratic Party (LDP)',c:[36,40,32]},
    {n:'Constitutional Democratic Party',c:[58,58,64]},
    {n:'Komeito',c:[48,44,42]},
    {n:'Japan Innovation (Ishin)',c:[34,54,48]},
    {n:'Japanese Communist Party',c:[86,52,72]},
    {n:'Democratic Party for the People',c:[46,52,52]}
  ],
  KR: [
    {n:'Democratic Party',c:[58,58,64]},
    {n:'People Power Party',c:[34,42,34]},
    {n:'Rebuilding Korea Party',c:[60,56,64]},
    {n:'Justice Party',c:[82,60,78]}
  ],
  CN: [
    {n:'Communist Party of China',c:[58,10,24]},
    {n:'Maoist / Old Left',c:[88,18,40]},
    {n:'Liberal reformers',c:[40,66,64]}
  ],
  BR: [
    {n:'Workers\u2019 Party (PT)',c:[76,58,74]},
    {n:'Liberal Party (PL)',c:[28,28,16]},
    {n:'PSDB (Social Democracy)',c:[42,52,50]},
    {n:'MDB',c:[46,46,42]},
    {n:'PSOL',c:[88,62,82]},
    {n:'Novo (Libertarian)',c:[20,74,54]}
  ],
  MX: [
    {n:'Morena',c:[70,48,60]},
    {n:'PAN (National Action)',c:[34,44,32]},
    {n:'PRI',c:[46,42,42]},
    {n:'Citizens\u2019 Movement (MC)',c:[48,60,62]},
    {n:'PRD',c:[62,54,62]}
  ],
  AR: [
    {n:'La Libertad Avanza (Milei)',c:[16,72,50]},
    {n:'Union for the Homeland (Peronist)',c:[72,44,56]},
    {n:'Republican Proposal (PRO)',c:[32,50,44]},
    {n:'Radical Civic Union (UCR)',c:[44,54,52]},
    {n:'Left Front (FIT)',c:[92,54,74]}
  ],
  CL: [
    {n:'Socialist Party',c:[72,56,68]},
    {n:'Communist Party',c:[90,46,70]},
    {n:'Broad Front (Frente Amplio)',c:[80,62,80]},
    {n:'National Renewal (RN)',c:[32,48,42]},
    {n:'UDI (Conservatives)',c:[30,38,26]},
    {n:'Republican Party',c:[28,28,14]}
  ],
  CO: [
    {n:'Historic Pact (Petro)',c:[78,56,72]},
    {n:'Democratic Center (Uribe)',c:[28,32,20]},
    {n:'Liberal Party',c:[48,52,50]},
    {n:'Conservative Party',c:[36,40,28]},
    {n:'Green Alliance',c:[66,62,74]}
  ],
  ZA: [
    {n:'African National Congress (ANC)',c:[64,52,60]},
    {n:'Democratic Alliance (DA)',c:[34,62,56]},
    {n:'Economic Freedom Fighters (EFF)',c:[92,46,72]},
    {n:'uMkhonto weSizwe (MK)',c:[58,36,40]},
    {n:'Inkatha Freedom Party',c:[40,42,34]}
  ],
  NG: [
    {n:'All Progressives Congress (APC)',c:[42,40,32]},
    {n:'Peoples Democratic Party (PDP)',c:[46,44,38]},
    {n:'Labour Party',c:[58,54,58]},
    {n:'NNPP',c:[46,44,40]}
  ],
  EG: [
    {n:'Pro-government bloc',c:[40,20,28]},
    {n:'Muslim Brotherhood tradition',c:[46,22,12]},
    {n:'Wafd (Liberals)',c:[42,52,48]},
    {n:'Social Democratic Party',c:[62,54,60]}
  ],
  SA: [
    {n:'Ruling establishment (monarchy)',c:[40,12,16]},
    {n:'Reformist modernisers',c:[36,50,52]},
    {n:'Islamic conservatives',c:[48,14,8]}
  ],
  AE: [
    {n:'Federal monarchy establishment',c:[38,18,20]},
    {n:'Liberal modernisers',c:[34,54,54]},
    {n:'Islamic conservatives',c:[48,16,10]}
  ],
  IL: [
    {n:'Likud',c:[34,40,30]},
    {n:'Yesh Atid (Centrist)',c:[44,60,60]},
    {n:'Labor',c:[64,58,68]},
    {n:'Religious Zionism',c:[40,20,10]},
    {n:'Shas (Religious)',c:[52,26,14]},
    {n:'Meretz (Left)',c:[78,64,82]}
  ],
  PK: [
    {n:'PTI (Movement for Justice)',c:[48,44,38]},
    {n:'PML-N',c:[40,40,30]},
    {n:'Pakistan People\u2019s Party',c:[64,50,56]},
    {n:'Jamaat-e-Islami (Islamist)',c:[46,20,10]},
    {n:'MQM',c:[46,44,42]}
  ],
  BD: [
    {n:'Awami League',c:[52,38,46]},
    {n:'Bangladesh Nationalist Party (BNP)',c:[42,42,34]},
    {n:'Jatiya Party',c:[44,40,36]},
    {n:'Jamaat-e-Islami (Islamist)',c:[46,20,10]}
  ],
  ID: [
    {n:'PDI-P',c:[58,50,56]},
    {n:'Golkar',c:[42,44,40]},
    {n:'Gerindra',c:[40,34,26]},
    {n:'PKS (Islamist)',c:[46,26,12]},
    {n:'NasDem',c:[46,50,48]},
    {n:'PKB',c:[50,44,38]}
  ],
  PH: [
    {n:'PDP\u2013Laban',c:[40,36,30]},
    {n:'Liberal Party',c:[48,58,58]},
    {n:'Nacionalista',c:[40,42,36]},
    {n:'Makabayan (Left)',c:[82,56,74]},
    {n:'Lakas\u2013CMD',c:[40,42,36]}
  ],
  TH: [
    {n:'People\u2019s Party (Move Forward)',c:[58,66,74]},
    {n:'Pheu Thai',c:[58,48,56]},
    {n:'Bhumjaithai',c:[42,42,38]},
    {n:'Democrat Party',c:[38,48,44]},
    {n:'Palang Pracharath',c:[36,28,22]}
  ],
  VN: [
    {n:'Communist Party of Vietnam',c:[58,14,30]},
    {n:'Reformist wing',c:[46,50,54]},
    {n:'Conservative wing',c:[64,16,26]}
  ],
  SG: [
    {n:'People\u2019s Action Party (PAP)',c:[40,36,40]},
    {n:'Workers\u2019 Party',c:[56,54,58]},
    {n:'Progress Singapore Party',c:[42,46,46]}
  ],
  MY: [
    {n:'Pakatan Harapan',c:[54,56,60]},
    {n:'Barisan Nasional (UMNO)',c:[42,40,32]},
    {n:'Perikatan Nasional (PAS)',c:[44,26,12]},
    {n:'DAP',c:[58,58,66]}
  ],
  IR: [
    {n:'Reformists',c:[50,42,48]},
    {n:'Moderates',c:[46,38,42]},
    {n:'Principlists (Conservatives)',c:[46,18,12]},
    {n:'Hardliners',c:[44,12,8]}
  ],
  IQ: [
    {n:'State of Law (Shia)',c:[50,32,30]},
    {n:'Sadrist Movement',c:[56,32,26]},
    {n:'Sunni coalition',c:[42,36,28]},
    {n:'Kurdistan Democratic Party',c:[42,44,40]},
    {n:'Patriotic Union of Kurdistan',c:[52,46,46]}
  ],
  TW: [
    {n:'Democratic Progressive Party (DPP)',c:[50,62,68]},
    {n:'Kuomintang (KMT)',c:[40,44,36]},
    {n:'Taiwan People\u2019s Party (TPP)',c:[44,54,54]}
  ],
  PE: [
    {n:'Free Peru (Left)',c:[78,50,64]},
    {n:'Popular Force (Fujimori)',c:[30,34,22]},
    {n:'Popular Renewal',c:[30,34,20]},
    {n:'Together for Peru',c:[72,56,70]}
  ],
  VE: [
    {n:'PSUV (Chavista)',c:[82,26,50]},
    {n:'Democratic opposition (PUD)',c:[38,54,52]},
    {n:'Vente Venezuela (Machado)',c:[26,60,52]}
  ],
  CU: [
    {n:'Communist Party of Cuba',c:[82,16,44]},
    {n:'Democratic opposition',c:[42,64,60]}
  ],
  BO: [
    {n:'MAS (Movement for Socialism)',c:[82,48,64]},
    {n:'Civic Community',c:[36,52,48]},
    {n:'Creemos (Conservatives)',c:[30,36,24]}
  ],
  UY: [
    {n:'Broad Front (Frente Amplio)',c:[72,58,72]},
    {n:'National Party (Blancos)',c:[36,48,42]},
    {n:'Colorado Party',c:[40,50,46]}
  ],
  EC: [
    {n:'Citizen Revolution',c:[74,48,62]},
    {n:'Social Christian right',c:[30,40,26]},
    {n:'Liberal / Centrist',c:[40,54,52]}
  ],
  GT: [
    {n:'Movimiento Semilla (Progressive)',c:[58,58,66]},
    {n:'Vamos (Conservative)',c:[32,38,26]},
    {n:'UNE',c:[48,44,42]}
  ],
  CR: [
    {n:'National Liberation (PLN)',c:[46,52,52]},
    {n:'Progressive tradition (PAC)',c:[58,58,66]},
    {n:'Social Christian Unity',c:[40,44,36]},
    {n:'Broad Front (Frente Amplio)',c:[78,58,76]}
  ],
  IS: [
    {n:'Independence Party',c:[32,54,48]},
    {n:'Left-Green Movement',c:[82,64,82]},
    {n:'Social Democratic Alliance',c:[64,58,70]},
    {n:'Progressive Party',c:[46,48,46]},
    {n:'Pirate Party',c:[54,72,76]}
  ],
  LU: [
    {n:'CSV (Christian Social)',c:[44,48,42]},
    {n:'LSAP (Socialists)',c:[64,58,70]},
    {n:'DP (Liberals)',c:[34,62,58]},
    {n:'The Greens',c:[78,66,86]}
  ],
  EE: [
    {n:'Reform Party',c:[30,62,56]},
    {n:'Centre Party',c:[56,46,48]},
    {n:'EKRE (Nationalists)',c:[36,28,14]},
    {n:'Estonia 200',c:[38,58,58]},
    {n:'Social Democrats',c:[64,58,70]}
  ],
  LV: [
    {n:'New Unity',c:[40,54,50]},
    {n:'Harmony (Social Democrats)',c:[60,50,54]},
    {n:'National Alliance',c:[36,28,16]},
    {n:'Union of Greens and Farmers',c:[46,48,46]}
  ],
  LT: [
    {n:'Homeland Union (Conservatives)',c:[36,48,42]},
    {n:'Social Democrats',c:[64,56,66]},
    {n:'Farmers and Greens Union',c:[50,46,46]},
    {n:'Liberal Movement',c:[30,66,60]}
  ],
  SK: [
    {n:'Smer (Direction)',c:[58,34,36]},
    {n:'Progressive Slovakia',c:[46,64,66]},
    {n:'Hlas (Voice)',c:[56,44,46]},
    {n:'Slovak National Party (SNS)',c:[40,28,16]},
    {n:'Slovakia (O\u013daNO)',c:[40,44,40]}
  ],
  SI: [
    {n:'Freedom Movement',c:[48,60,64]},
    {n:'SDS (Democratic Party)',c:[34,36,24]},
    {n:'Social Democrats',c:[64,56,68]},
    {n:'New Slovenia (Christian)',c:[42,44,36]},
    {n:'The Left',c:[86,58,80]}
  ],
  HR: [
    {n:'HDZ (Christian Democrats)',c:[40,42,34]},
    {n:'SDP (Social Democrats)',c:[64,56,68]},
    {n:'Homeland Movement',c:[36,28,16]},
    {n:'Most (Bridge)',c:[40,38,28]},
    {n:'Mo\u017eemo! (Green-Left)',c:[82,62,82]}
  ],
  RS: [
    {n:'Progressive Party (SNS)',c:[42,32,30]},
    {n:'Socialist Party (SPS)',c:[58,38,42]},
    {n:'Serbia Against Violence',c:[46,60,64]},
    {n:'Nationalist right',c:[38,28,16]}
  ],
  BG: [
    {n:'GERB',c:[38,44,38]},
    {n:'We Continue the Change',c:[42,62,64]},
    {n:'Socialist Party (BSP)',c:[62,44,48]},
    {n:'DPS (Movement for Rights)',c:[46,46,44]},
    {n:'Revival (Vazrazhdane)',c:[40,28,14]}
  ],
  BY: [
    {n:'Ruling establishment (Lukashenko)',c:[58,14,30]},
    {n:'Democratic opposition',c:[44,66,64]}
  ],
  GE: [
    {n:'Georgian Dream',c:[44,38,38]},
    {n:'United National Movement',c:[36,52,50]},
    {n:'Coalition for Change',c:[42,62,62]}
  ],
  AM: [
    {n:'Civil Contract (Pashinyan)',c:[46,56,56]},
    {n:'Armenia Alliance',c:[42,38,34]},
    {n:'Prosperous Armenia',c:[40,44,40]}
  ],
  KZ: [
    {n:'Amanat (ruling party)',c:[46,26,34]},
    {n:'Democratic reformers',c:[42,60,58]},
    {n:'OSDP (Social Democrats)',c:[58,48,52]}
  ],
  MA: [
    {n:'PJD (Islamist)',c:[48,28,16]},
    {n:'RNI (Liberals)',c:[36,48,46]},
    {n:'Istiqlal (Nationalist)',c:[44,40,32]},
    {n:'USFP (Socialists)',c:[62,52,58]},
    {n:'PAM',c:[40,46,44]}
  ],
  DZ: [
    {n:'FLN (National Liberation)',c:[52,32,36]},
    {n:'RND',c:[44,36,36]},
    {n:'MSP (Islamist)',c:[48,26,14]},
    {n:'Socialist Forces (FFS)',c:[64,54,60]}
  ],
  TN: [
    {n:'Ennahda (Islamist)',c:[48,32,16]},
    {n:'Free Destourian Party',c:[38,40,34]},
    {n:'Democratic Current',c:[56,58,62]},
    {n:'Workers\u2019 Party (Left)',c:[80,54,70]}
  ],
  KE: [
    {n:'UDA (United Democratic Alliance)',c:[42,44,38]},
    {n:'ODM / Azimio',c:[56,50,52]},
    {n:'Jubilee',c:[44,44,40]},
    {n:'Wiper',c:[48,46,44]}
  ],
  ET: [
    {n:'Prosperity Party',c:[50,34,42]},
    {n:'Citizens for Social Justice',c:[48,52,52]},
    {n:'TPLF',c:[58,38,44]}
  ],
  GH: [
    {n:'New Patriotic Party (NPP)',c:[38,50,44]},
    {n:'National Democratic Congress (NDC)',c:[58,50,54]},
    {n:'Convention People\u2019s Party (CPP)',c:[72,50,60]}
  ],
  NP: [
    {n:'Nepali Congress',c:[50,54,56]},
    {n:'CPN-UML (Communists)',c:[78,42,58]},
    {n:'Maoist Centre',c:[86,40,60]},
    {n:'Rastriya Swatantra Party',c:[44,58,60]},
    {n:'RPP (Monarchist / Hindu)',c:[36,32,18]}
  ],
  LK: [
    {n:'NPP / JVP (Left)',c:[80,52,66]},
    {n:'Samagi Jana Balawegaya (SJB)',c:[46,52,54]},
    {n:'SLPP (Rajapaksa)',c:[42,34,26]},
    {n:'United National Party (UNP)',c:[38,50,48]}
  ],
  MM: [
    {n:'National League for Democracy',c:[50,58,60]},
    {n:'Military / USDP',c:[34,14,18]},
    {n:'Ethnic federal parties',c:[56,54,56]}
  ],
  MN: [
    {n:'Mongolian People\u2019s Party',c:[56,48,50]},
    {n:'Democratic Party',c:[38,54,50]},
    {n:'HUN Party',c:[48,52,52]}
  ],
  KH: [
    {n:'Cambodian People\u2019s Party',c:[46,24,30]},
    {n:'Candlelight Party (opposition)',c:[48,58,58]}
  ],
  QA: [
    {n:'Ruling establishment (monarchy)',c:[40,18,20]},
    {n:'Modernisers',c:[36,50,50]},
    {n:'Conservatives',c:[48,16,10]}
  ],
  KW: [
    {n:'Islamist bloc',c:[48,28,14]},
    {n:'Liberal bloc',c:[36,56,56]},
    {n:'Populist / opposition',c:[56,48,50]},
    {n:'Tribal conservatives',c:[42,34,24]}
  ],
  JO: [
    {n:'Islamic Action Front (Islamist)',c:[48,30,16]},
    {n:'Pro-government / centrist',c:[40,40,38]},
    {n:'Leftist / nationalist',c:[62,48,52]}
  ],
  LB: [
    {n:'Hezbollah',c:[56,26,22]},
    {n:'Free Patriotic Movement',c:[44,42,38]},
    {n:'Lebanese Forces',c:[34,42,34]},
    {n:'Future Movement',c:[40,46,42]},
    {n:'Change / reformists',c:[48,62,64]}
  ],
  DEFAULT: [
    {n:'Communist / Far-Left',c:[92,40,72]},
    {n:'Social-Democratic / Labour',c:[68,60,68]},
    {n:'Green / Ecologist',c:[76,68,84]},
    {n:'Liberal / Centrist',c:[50,70,64]},
    {n:'Conservative / Christian-Democratic',c:[40,42,28]},
    {n:'Libertarian / Classical-Liberal',c:[22,88,55]},
    {n:'Nationalist / Far-Right',c:[38,25,14]}
  ]
};

/* ============ Countries ============ */
/* t:1 => has a tailored question set. Flags are generated at runtime from the code. */
function flagOf(cc){
  if(cc==='XX')return '\uD83C\uDF10';
  const base='A'.charCodeAt(0);
  return cc.toUpperCase().split('').map(function(ch){return String.fromCodePoint(0x1F1E6 + ch.charCodeAt(0) - base);}).join('');
}
const COUNTRIES = [
  {c:'US',n:'United States',t:1},
  {c:'GB',n:'United Kingdom',t:1},
  {c:'CA',n:'Canada',t:1},
  {c:'AU',n:'Australia',t:1},
  {c:'NZ',n:'New Zealand',t:1},
  {c:'IE',n:'Ireland',t:1},
  {c:'DE',n:'Germany',t:1},
  {c:'FR',n:'France',t:1},
  {c:'IN',n:'India',t:1},
  {c:'IT',n:'Italy'},
  {c:'ES',n:'Spain'},
  {c:'PT',n:'Portugal'},
  {c:'NL',n:'Netherlands'},
  {c:'BE',n:'Belgium'},
  {c:'SE',n:'Sweden'},
  {c:'NO',n:'Norway'},
  {c:'DK',n:'Denmark'},
  {c:'FI',n:'Finland'},
  {c:'PL',n:'Poland'},
  {c:'AT',n:'Austria'},
  {c:'CH',n:'Switzerland'},
  {c:'GR',n:'Greece'},
  {c:'CZ',n:'Czechia'},
  {c:'HU',n:'Hungary'},
  {c:'RO',n:'Romania'},
  {c:'UA',n:'Ukraine'},
  {c:'RU',n:'Russia'},
  {c:'TR',n:'Turkey'},
  {c:'JP',n:'Japan'},
  {c:'KR',n:'South Korea'},
  {c:'CN',n:'China'},
  {c:'BR',n:'Brazil'},
  {c:'MX',n:'Mexico'},
  {c:'AR',n:'Argentina'},
  {c:'CL',n:'Chile'},
  {c:'CO',n:'Colombia'},
  {c:'ZA',n:'South Africa'},
  {c:'NG',n:'Nigeria'},
  {c:'EG',n:'Egypt'},
  {c:'SA',n:'Saudi Arabia'},
  {c:'AE',n:'United Arab Emirates'},
  {c:'IL',n:'Israel'},
  {c:'PK',n:'Pakistan'},
  {c:'BD',n:'Bangladesh'},
  {c:'ID',n:'Indonesia'},
  {c:'PH',n:'Philippines'},
  {c:'TH',n:'Thailand'},
  {c:'VN',n:'Vietnam'},
  {c:'SG',n:'Singapore'},
  {c:'MY',n:'Malaysia'},
  {c:'IR',n:'Iran'},
  {c:'IQ',n:'Iraq'},
  {c:'TW',n:'Taiwan'},
  {c:'PE',n:'Peru'},
  {c:'VE',n:'Venezuela'},
  {c:'CU',n:'Cuba'},
  {c:'BO',n:'Bolivia'},
  {c:'UY',n:'Uruguay'},
  {c:'EC',n:'Ecuador'},
  {c:'GT',n:'Guatemala'},
  {c:'CR',n:'Costa Rica'},
  {c:'IS',n:'Iceland'},
  {c:'LU',n:'Luxembourg'},
  {c:'EE',n:'Estonia'},
  {c:'LV',n:'Latvia'},
  {c:'LT',n:'Lithuania'},
  {c:'SK',n:'Slovakia'},
  {c:'SI',n:'Slovenia'},
  {c:'HR',n:'Croatia'},
  {c:'RS',n:'Serbia'},
  {c:'BG',n:'Bulgaria'},
  {c:'BY',n:'Belarus'},
  {c:'GE',n:'Georgia'},
  {c:'AM',n:'Armenia'},
  {c:'KZ',n:'Kazakhstan'},
  {c:'MA',n:'Morocco'},
  {c:'DZ',n:'Algeria'},
  {c:'TN',n:'Tunisia'},
  {c:'KE',n:'Kenya'},
  {c:'ET',n:'Ethiopia'},
  {c:'GH',n:'Ghana'},
  {c:'NP',n:'Nepal'},
  {c:'LK',n:'Sri Lanka'},
  {c:'MM',n:'Myanmar'},
  {c:'MN',n:'Mongolia'},
  {c:'KH',n:'Cambodia'},
  {c:'QA',n:'Qatar'},
  {c:'KW',n:'Kuwait'},
  {c:'JO',n:'Jordan'},
  {c:'LB',n:'Lebanon'}
];

/* ============ Political figures ============ */
/* c: 0-100 on all 14 axes in AXES order. s:1 => historical figure, shown for educational comparison only. */
const FIGURES = [
  {n:'Bernie Sanders',cc:'US',r:'US Senator, democratic socialist',c:[88,78,82,82,66,55,82,72,60,74,70,92,76,80]},
  {n:'Alexandria Ocasio-Cortez',cc:'US',r:'US Representative, progressive',c:[85,80,84,90,72,52,88,74,58,74,66,88,82,80]},
  {n:'Barack Obama',cc:'US',r:'44th US President',c:[62,64,82,78,70,48,66,58,80,52,44,70,68,62]},
  {n:'Joe Biden',cc:'US',r:'46th US President',c:[60,58,80,68,62,45,62,55,80,46,42,68,62,58]},
  {n:'Donald Trump',cc:'US',r:'45th & 47th US President',c:[30,32,42,20,10,45,22,32,50,26,28,35,10,22]},
  {n:'Ronald Reagan',cc:'US',r:'40th US President',c:[24,45,68,30,45,55,32,32,68,26,20,28,45,30]},
  {n:'Ron Paul',cc:'US',r:'US libertarian congressman',c:[20,90,72,45,50,80,35,45,60,70,15,15,45,60]},
  {n:'Franklin D. Roosevelt',cc:'US',r:'32nd US President, New Deal',c:[70,55,75,64,60,35,55,50,70,40,45,85,60,55]},
  {n:'Jeremy Corbyn',cc:'GB',r:'Former UK Labour leader',c:[88,68,80,80,72,55,80,72,55,80,70,90,80,78]},
  {n:'Keir Starmer',cc:'GB',r:'UK Prime Minister',c:[62,58,80,66,62,45,62,60,80,46,44,70,60,58]},
  {n:'Tony Blair',cc:'GB',r:'Former UK PM, New Labour',c:[52,55,78,68,72,42,55,55,82,36,38,62,66,52]},
  {n:'Margaret Thatcher',cc:'GB',r:'Former UK PM, conservative',c:[20,45,70,28,45,50,30,42,72,26,15,25,40,28]},
  {n:'Winston Churchill',cc:'GB',r:'Wartime UK Prime Minister',c:[32,45,68,25,40,45,35,45,65,20,25,35,35,25]},
  {n:'Nigel Farage',cc:'GB',r:'Reform UK leader',c:[32,40,50,20,8,50,25,45,50,32,28,38,8,25]},
  {n:'Jacinda Ardern',cc:'NZ',r:'Former NZ Prime Minister',c:[68,68,84,85,72,50,78,66,72,76,50,82,80,78]},
  {n:'Justin Trudeau',cc:'CA',r:'Former Canadian PM',c:[60,62,80,82,72,48,70,62,78,52,45,72,78,65]},
  {n:'Emmanuel Macron',cc:'FR',r:'President of France',c:[42,58,76,66,78,42,58,60,78,46,35,58,66,55]},
  {n:'Marine Le Pen',cc:'FR',r:'French national-populist',c:[40,32,48,25,10,45,30,35,50,32,35,50,8,25]},
  {n:'Jean-Luc M\u00e9lenchon',cc:'FR',r:'French left leader',c:[88,60,72,78,60,52,80,70,45,72,70,88,72,72]},
  {n:'Charles de Gaulle',cc:'FR',r:'French wartime leader & president',c:[42,40,62,35,20,40,40,35,60,26,35,50,35,30]},
  {n:'Angela Merkel',cc:'DE',r:'Former German Chancellor',c:[42,55,80,60,75,45,58,50,82,52,38,60,68,55]},
  {n:'Willy Brandt',cc:'DE',r:'Former West German Chancellor',c:[68,60,80,70,72,48,60,55,72,55,50,85,68,60]},
  {n:'Karl Marx',cc:'DE',r:'Philosopher, founder of communism',c:[96,55,60,80,88,50,55,88,8,55,98,90,80,60]},
  {n:'Vladimir Lenin',cc:'RU',r:'Leader of the Russian Revolution',c:[95,15,20,62,66,20,45,88,6,22,97,85,68,40]},
  {n:'Leon Trotsky',cc:'RU',r:'Bolshevik revolutionary',c:[95,42,45,75,90,40,52,86,6,40,96,88,80,62]},
  {n:'Joseph Stalin',cc:'RU',r:'Soviet dictator',s:1,c:[90,6,4,42,32,10,28,80,20,8,95,80,42,15]},
  {n:'Vladimir Putin',cc:'RU',r:'President of Russia',c:[35,15,25,18,12,25,28,25,55,16,30,45,20,18]},
  {n:'Mao Zedong',cc:'CN',r:'Founder of the PRC',s:1,c:[94,15,15,52,48,38,38,80,4,15,96,80,52,25]},
  {n:'Xi Jinping',cc:'CN',r:'Leader of China',c:[55,10,15,30,30,20,40,75,45,20,70,65,35,20]},
  {n:'Fidel Castro',cc:'CU',r:'Cuban revolutionary leader',c:[92,22,25,55,45,30,50,78,10,26,95,85,55,30]},
  {n:'Che Guevara',cc:'AR',r:'Marxist revolutionary',c:[94,45,40,70,72,45,55,80,4,20,96,85,70,35]},
  {n:'Hugo Ch\u00e1vez',cc:'VE',r:'President of Venezuela',c:[88,35,45,60,45,40,52,55,25,36,88,88,60,40]},
  {n:'Salvador Allende',cc:'CL',r:'Socialist president of Chile',c:[88,60,78,72,60,50,60,60,50,66,80,88,65,60]},
  {n:'Augusto Pinochet',cc:'CL',r:'Chilean military dictator',s:1,c:[18,10,15,15,30,35,28,25,45,15,12,20,30,15]},
  {n:'Lula da Silva',cc:'BR',r:'President of Brazil',c:[76,58,78,70,62,48,62,50,60,58,58,85,68,62]},
  {n:'Jair Bolsonaro',cc:'BR',r:'Former Brazilian president',c:[28,28,45,15,15,45,20,22,55,20,25,32,20,18]},
  {n:'Javier Milei',cc:'AR',r:'Libertarian president of Argentina',c:[12,80,68,40,55,70,20,35,55,55,8,10,50,45]},
  {n:'Nelson Mandela',cc:'ZA',r:'Anti-apartheid leader & president',c:[72,68,82,80,72,52,62,60,55,60,60,82,80,70]},
  {n:'Mahatma Gandhi',cc:'IN',r:'Leader of Indian independence',c:[72,70,78,55,55,78,72,35,45,92,65,72,72,70]},
  {n:'Jawaharlal Nehru',cc:'IN',r:'First PM of India',c:[72,60,78,70,68,45,58,55,65,55,60,80,70,60]},
  {n:'Narendra Modi',cc:'IN',r:'PM of India, Hindu nationalist',c:[38,32,50,18,15,40,32,15,55,26,30,45,15,22]},
  {n:'Recep Tayyip Erdo\u011fan',cc:'TR',r:'President of Turkey',c:[45,20,35,15,20,35,32,10,50,26,40,58,20,20]},
  {n:'Ruhollah Khomeini',cc:'IR',r:'Founder of the Islamic Republic',s:1,c:[55,6,12,6,18,30,32,3,25,20,48,62,15,8]},
  {n:'Viktor Orb\u00e1n',cc:'HU',r:'Prime Minister of Hungary',c:[38,25,40,18,12,40,30,28,55,30,32,45,10,22]},
  {n:'Giorgia Meloni',cc:'IT',r:'Prime Minister of Italy',c:[36,32,55,20,15,42,30,25,58,30,30,42,12,25]},
  {n:'Benito Mussolini',cc:'IT',r:'Italian Fascist dictator',s:1,c:[36,6,6,20,10,18,30,30,25,8,38,48,10,8]},
  {n:'Adolf Hitler',cc:'DE',r:'Nazi dictator of Germany',s:1,c:[35,3,3,12,4,12,28,40,20,3,35,48,3,4]},
  {n:'Francisco Franco',cc:'ES',r:'Spanish dictator',s:1,c:[38,8,8,10,15,25,30,8,30,15,38,48,12,12]},
  {n:'Pope Francis',cc:'AR',r:'Head of the Catholic Church',c:[68,55,70,45,72,55,72,15,55,80,60,80,80,72]},
  {n:'Volodymyr Zelensky',cc:'UA',r:'President of Ukraine',c:[48,58,75,60,60,45,50,55,70,32,40,62,60,55]}
];

if (typeof module !== 'undefined') { module.exports = { AXES, GENERAL, COUNTRY_Q, IDEOLOGIES, PARTIES, COUNTRIES, FIGURES, flagOf }; }
