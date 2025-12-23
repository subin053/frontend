/*
0번방 값과 1번방 값을 교체하는 작업
*/
const arr=[10,20] ;


//정답
const temp = arr[0];
arr[0]= arr[1];
arr[1]= temp;

//내답 ㅜㅜ 0번방 왜안없어짐

arr.push(arr[0]);
arr.pop(arr[0]);

console.log(arr);