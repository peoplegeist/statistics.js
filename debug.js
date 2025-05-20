let Statistics = require('./statistics.js');

const intervalAsTable = [
	{idx:12, interval: 1},
	{idx:2, interval: 4},
	{idx:1, interval: 7},
	{idx:12, interval: 1},
	{idx:2, interval: 0},
	//{idx:12, interval: 0}
];
//const intervalAsTable = [140, 140, 140, 130, 131, 125, 120, 115, 116, 111].map((i, idx) => { return { idx: idx+1, interval: i };});

stats0 = new Statistics(intervalAsTable, {idx: 'metric', interval: 'metric'});
//result1 = stats1.kendallsTau('interviewer1', 'interviewer2'),
console.log(stats0.kendallsTau('idx', 'interval'));
/*
const lifeTable = [
{ l:78, c:4 },
{ l:78, c:23 },
{ l:60, c:25 },
{ l:53, c:48 },
{ l:85, c:17 },
{ l:84, c:8 },
{ l:73, c:4 },
{ l:78, c:26 },
{ l:78, c:23 },
{ l:75, c:19 },
{ l:65, c:24 },
{ l:72, c:35 },
{ l:58, c:29 },
{ l:92, c:4 },
{ l:65, c:14 }];
statsl = new Statistics(lifeTable, {l: 'metric', c: 'metric'});
console.log(statsl.kendallsTau('l', 'c'));

	// http://www.statisticshowto.com/kendalls-tau/
let example1Values = [
	{ interviewer1: 1, interviewer2: 1 },
	{ interviewer1: 2, interviewer2: 2 },
	{ interviewer1: 3, interviewer2: 4 },
	{ interviewer1: 4, interviewer2: 3 },
	{ interviewer1: 5, interviewer2: 6 },
	{ interviewer1: 6, interviewer2: 5 },
	{ interviewer1: 7, interviewer2: 8 },
	{ interviewer1: 8, interviewer2: 7 },
	{ interviewer1: 9, interviewer2: 10 },
	{ interviewer1: 10, interviewer2: 9 },
	{ interviewer1: 11, interviewer2: 12 },
	{ interviewer1: 12, interviewer2: 11 }
];
example1Vars = { interviewer1: 'ordinal', interviewer2: 'ordinal' };

let stats1 = new Statistics(example1Values, example1Vars);
console.log(stats1.kendallsTau('interviewer1', 'interviewer2'));

// http://www.brynmawr.edu/socialwork/GSSW/Vartanian/Handouts/Kendall2.hnd.PDF
example2Values = [
	{ grade: 1, iq: 1 },
	{ grade: 2, iq: 4 },
	{ grade: 3, iq: 3 },
	{ grade: 4, iq: 5 },
	{ grade: 5, iq: 2 }
];
example2Vars = { grade: 'ordinal', iq: 'metric' };
let stats2 = new Statistics(example2Values, example2Vars);
console.log(stats2.kendallsTau('grade', 'iq'));


*/