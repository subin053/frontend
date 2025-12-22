/* 
조건식(삼항식), 분기식 
식? true일때 : false일때*/
let val= 10;
const result = (val % 2 ==0 ? '짝수' : '홀수');
console.log ('result', result);


let val2= -101 ;
const result2 = (val2 >0   ? val2 : val2*-1);
console.log ('result2', result2);

let score=  60 ;
const dap = (score<60 ? '불합격': '합격');
console.log( dap);