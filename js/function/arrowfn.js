function sum(n1,n2){ 
    console.log( n1+n2);
}
sum(40,50);

//정의방법이 기존과 달라진다
const arrowsum = (n1,n2) => {
    console.log (n1+n2);
}
//호출방법은 똑같다
arrowsum(40,50);

//화살표함수는 파라미터가 1개일떄 ()생략가능
//코드가 1줄일때는 {}도 생략가능
//리턴함수에서 {}생략하면 return도 생략가능

function returnpow1(num){
    return num*num;
}

const returnpow =num => num*num;
const returnpow2 =num => {num*num};// 중괄호생략시에만 리턴이 생략됨