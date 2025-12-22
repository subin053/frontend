/* 대입연산자   */

let n1 =10;
n1 = n1 + 5;
n1 = n1 +4
console.log('n1', n1);

let n3 = 50;
n3++; //증가 연산자
++n3; //증가 연산자
++n3; //증가 연산자

--n3;
n3--;//감소연산자
console.log('n3:' , n3);
let n4= 10;
let result4 = n4++; //읽기>쓰기

let n5=10;
let result5 =++n5; //쓰기 >읽기
console.log('result4:', result4); 
console.log('result5:', result5);
console.log('n4',n4);
console.log('n5', n5);

let n6 =10;
n6++; 
console.log('n6',n6)

let n7 = 10;
console.log('n7',n7++); //10
console.log('n7',n7); //11

let n8= 10;
console.log('n8',++n8)//11