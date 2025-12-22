/*
math.random() 메소드를 호출하면 0.0000~0.9999 사이의 랜덤값을 리턴한다
*/
let rval = Math.random();
console.log('rval',rval)
let rval3 =Math.random()*10;
console.log('rval', rval3);
console.log('rval3',parseInt(rval3));

let rval4 = Math.random()*9+4;

console.log('rval4',parseInt(rval4));

let rval5 = Math.random()*38+22;

console.log('rval5',parseInt(rval5));