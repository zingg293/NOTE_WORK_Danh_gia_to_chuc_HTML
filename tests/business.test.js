const assert=require('node:assert/strict');
const B=require('../assets/logic.js');
let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name);}
const s=B.seed(),t=s.templates[0],i={target:500,cap:10};
test('480/500 = 9.60, still below target',()=>{assert.equal(B.score(t,i,{value:480}),9.6);assert.equal(B.achieved(t,500,null,480),false);});
test('Over target capped at max',()=>assert.equal(B.score(t,i,{value:550}),10));
test('Completion cannot divide by zero',()=>assert.equal(B.score(t,{target:0,cap:10},{value:5}),null));
test('Ratio requires valid numerator and denominator',()=>{const r={measure:'ratio'};assert.equal(B.value(r,{numerator:1980,total:2000}),99);assert.equal(B.value(r,{numerator:0,total:0}),null);assert.equal(B.value(r,{numerator:21,total:20}),null);assert.equal(B.value(r,{numerator:-1,total:20}),null);});
test('Range scoring includes exactly one boundary',()=>{const r={...t,scoring:'range',ranges:[{lo:0,hi:98,li:true,ui:false,pct:0},{lo:98,hi:99,li:true,ui:false,pct:80},{lo:99,hi:null,li:true,ui:false,pct:100}]};assert.equal(B.validateRanges(r.ranges),'');assert.equal(B.score(r,i,{value:98.5}),8);assert.equal(B.score(r,i,{value:99}),10);assert.equal(B.score(r,i,{value:98}),8);});
test('Range overlap, gap and uncovered domain blocked',()=>{const a=[{lo:0,hi:100,li:true,ui:true,pct:50},{lo:100,hi:null,li:true,ui:false,pct:100}];assert.ok(B.validateRanges(a));a[0].ui=false;a[1].li=false;assert.ok(B.validateRanges(a));a[1].li=true;a[1].lo=101;assert.ok(B.validateRanges(a));assert.ok(B.validateRanges([{lo:1,hi:null,li:true,ui:false,pct:100}]));});
test('Qualitative levels calculate from percentage of max',()=>{assert.equal(B.score({...t,measure:'level',scoring:'level'},i,{level:'Đạt một phần'}),5);assert.equal(B.score({...t,measure:'level',scoring:'level'},i,{level:'Unconfigured'}),null);});
test('Target comparisons are separate from scoring',()=>{assert.equal(B.achieved({compare:'lte'},0,null,0),true);assert.equal(B.achieved({compare:'eq'},100,null,99.999),false);assert.equal(B.achieved({compare:'between'},95,100,100),true);assert.equal(B.achieved({compare:'between'},95,100,101),false);});
test('Missing report never becomes zero score',()=>{assert.equal(B.score(t,i,null),null);assert.equal(B.value(t,{}),null);});
test('Report cannot submit without evidence / quality',()=>assert.ok(B.reportErrors(t,{value:10,date:'2026-10-13',completed:'2026-10-12',evidence:'',quality:false}).length>=2));
function items(state){state.plan.items=state.templates.map((t,n)=>({id:'CT'+n,templateId:t.id,templateVersion:t.version,name:t.name,criterion:t.criterion,target:t.target,cap:state.criteria[n].cap,due:'2026-12-14',requirement:t.definition}));}
items(s);
test('Plan requires correct allocation in all 11 criteria',()=>{assert.deepEqual(B.planErrors(s),[]);s.plan.items[0].cap=9;assert.ok(B.planErrors(s).some(x=>x.startsWith('A1')));s.plan.items[0].cap=10;});
test('Only confirmed values contribute to final total',()=>{const rs={};s.plan.items.forEach(i=>rs[i.id]={status:'confirmed',value:i.target,numerator:100,total:100});let n=B.totals(s,rs);assert.equal(n.total,100);assert.equal(n.complete,true);rs.CT0.status='waiting';n=B.totals(s,rs);assert.equal(n.total,90);assert.equal(n.complete,false);assert.equal(n.by.A1,null);});
test('Task IDs deduplicated; 3/12 = 25% does not meet 30%',()=>{s.tasks.push({...s.tasks[0]});assert.equal(B.metrics(s).n,12);assert.ok(B.eligibility(s,'excellent',100).some(x=>x.name.includes('30%')&&x.ok===false));});
test('Rating point ranges use unrounded score',()=>{assert.equal(B.eligibility(s,'good',89.999999)[0].ok,true);assert.equal(B.eligibility(s,'good',90)[0].ok,false);assert.equal(B.eligibility(s,'pass',70)[0].ok,false);});
test('Quota counts only good in same year/scope and floors',()=>{assert.equal(B.quota(s).max,4);s.config.quota=25;assert.equal(B.quota(s).max,5);s.otherFinals=s.otherFinals.slice(0,2);s.config.quota=20;assert.equal(B.quota(s).max,0);s.otherFinals.push({year:2026,scope:'Cấp quản lý mẫu',rating:'excellent'});assert.equal(B.quota(s).max,0);assert.equal(B.quota(s).excellent,1);});
test('No tasks means unknown conditions',()=>{s.tasks=[];assert.equal(B.eligibility(s,'excellent',100)[0].ok,null);});
console.log(checks+' business checks passed.');
