/*
자료형(데이터유형)
boolean: 참(true)과 거짓(false)을 나타내는 논리적 데이터 유형
*/
let bool1 = true;
let bool2 = false;
console.log(true);  // true
console.log(false); // false
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean 
/*
불린타입은 비교연산자의 결과로 많이 사용된다.
비교연산자: >, <, >=, <=, ==, !=
*/
let n1  = 10,n2 = 20; 
bool1 = (n1 > n2);  // 10 > 20
bool2 = (n1 < n2);
console.log(bool1); // false
console.log(bool2); // true    
/*
논리연산자: &&(AND), ||(OR), !(NOT) 
and 연산자: 피연산자 모두 참일 때 참을 반환
or 연산자: 피연산자 중 하나라도 참이면 참을 반환
not 연산자: 피연산자가 참이면 거짓을, 거짓이면 참을 반환
*/
let a = 10, b = 20, c = 30;
bool1 = (a < b) && (b < c); // true && true
bool2 = (a > b) || (b < c); // false || true
console.log(bool1); // true 
console.log(bool2); // true
bool1 = !(a < b); // !(true)
bool2 = !(a > b); // !(false)
console.log(bool1); // false
console.log(bool2); // true




