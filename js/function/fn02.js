/*
 
*/

function voidadd(n1,n2){
    let sum = n1+n2;
    return; //생략가능
}

function returnadd(n1,n2){
    let sum = n1+n2;
    return sum; //값과함께돌아가겠다 명시해야되서 생략불가
}

const voidval = voidadd(10,20);
voidadd(10,20); //void는 홀로 쓰여야한다
const returnval = returnadd(10,20);

console.log(voidval);
console.log(returnval);