/* 
배열의 mapp함수, 새로운 배열을 만든다.
아이템값을 변경할수있다. 대신 길이가 변하진 않는다.
*/

const arr = [3,88,76,9,34,65];

const arr2 = arr.map( item=> item +2);
console.log(arr2)
