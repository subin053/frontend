/*
A함수한테 B함수 주소값을 보내면 A함수가 B함수를 호출할수있는 상태
*/


function sum(n1,n2){
    return n1+n2;
}

function calc(fn,n1,n2){
    return fn(n1,n2);
}

const result = calc(sum,10,20);
console.log('result:',result);