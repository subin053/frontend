/*
조건문 (분기문,if문)
if(식- 결과타입은 boolean)
만약 식이 true라면 {} 중괄호 사이에있는 모든 코드가 실행이 된다.
false라면 실행이 되지 않는다.
*/

const rval= parseInt(Math.random()*25)+1;

if (rval % 2 ==0) {console.log('짝수입니다')} else{ }
//if가 참이면 첫번쨰 중괄호 거짓이면 두번째 중괄호 실행

if (rval <15 ) { console.log('15보다 작습니다')} else{console.log('15이상입니다')};


const arr = (new Array(2));
if (arr.length<3 ) {arr.push(random)};
console.log(arr.length);

