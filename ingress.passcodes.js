/**
Step1: Open https://ingress.com/intel
Step2: Open Passcode Window and Open ChromiumBrowser Console (F12)
Step3: Insert "jQuery" Lib
*/
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


/**
Step4: Inset other js code
*/
passcodes = [
	'RESONATE3YD72HE7',
	'vi2jo15nd0',
	'VI9BB02FK7',
	'VI9UH67MO6',
	'LVBOYNXAIE',
	'portal7cc88cd2',
	'tycho7vu99ta2',
	'glyphs6gj75yq2',
	'vi8zu85il7',
	'4zh4cipherz4s8v',
	'jarvis5ye63mv9',
	'8ye3transpositionu2p9y',
	'green3ou25jt4',
	'ADA3zc36qq9',
	'ADA9yv83mp5',
	'WOLFE7jq38cj3',
	'VOYNICH8cg82pb6',
	'ALGORITHM9gh35cj3',
	'BLETCHLEY9ob65ca4',
	'BLUE3dg99cm6',
	'CASSANDRA2yu35cp6',
	'CERN5wu99oq2',
	'CHAOTIC5gg23pf9',
	'CONFLICT5av38pw2',
	'DRONE5sg25ez6',
	'DRONE9rc88jy5',
	'EVOLUTION6xu68ru7',
	'EVOLVE5uu33zd4',
	'EVOLVE7yo65nm9',
	'EZEKIEL3xh34ug4',
	'EZEKIEL7eu89au4',
	'FIELD5jk36yh6',
	'GLYPH7jb25yw3',
	'GLYPHS6gj75yq2',
	'GREEN3ou25jt4',
	'GREEN7dv85mp8',
	'HUBERT4su42qt2',
	'HUBERT6db54fa6',
	'HULONG7tr85ub6',
	'INGRESS3nd85fu9',
	'INGRESS9tu32jk7',
	'INVENIRI2hc78yy4',
	'JACKLAND8vf92qz5',
	'JARVIS5ye63mv9',
	'JOHNSON3ba26qb2',
	'JOHNSON3fx84aw9',
	'KUREZE2sg38gt2',
	'KUREZE3ft26jc6',
	'LIGHTMAN8nd48zb2',
	'lvboynxaie',
	'MESSAGE5ka73rp4',
	'MINOTAUR8dm83gg5',
	'MOYER4wr38qz8',
	'MOYER5pp56fg2',
	'ni7up28fu6',
	'NIANTIC4rv29wc6',
	'NIANTIC9ns77ww9',
	'PHILLIPS6wc29mc7',
	'PORTAL7cc88cd2',
	'POWERCUBE3hu72ut7',
	'ROLAND8cx62mk4',
	'RESONATE3yd72he7',
	'RESONATE6wb48ec4',
	'SPACETIME7ap46rr6',
	'SUSANNA3ku75cm9',
	'SYMBOLS4ye57bs7',
	'TYCHO7vu99ta2',
	'TYCHO9uo99qa2',
	'TIMEZERO2kk78gx5',
	'vi2jo15nd0',
	'vi8zu85il7',
	'vi9bb02fk7',
	'vi9rp62ex1',
	'vi9uh67mo6',
	'VOYNICH6sx52zr5',
	'VOYNICH8cg82pb6'
].forEach(
		function(passcode, i)
		{
			setTimeout( function()
			{
				$("#passcode").val(passcode);
				$("#submit").click();
				console.log("auto typing passcode:", i + 1, passcode);
			}, i * 3000)
		}
	);

/**
Step5: Eat cookie, drinking tea and wait!
Step6: Profit ^_^)))
*/
