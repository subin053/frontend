/*
변수, 상수 값 1개 저장할수 있다.
숫자 5개를 저장하여 사용해야되는 상황이 발생
여러값을 한곳에 담기위해 배열을 사용, 구분을 index로 한다
index(방번호)는 0번부터 시작
*/객체
let num1 = 5, num2= 10, num3=15, num4=20, num5=25;

const arr =[5,10,15,20,25]; //  [ ] 대괄호는 배열생성,공간할당
const arr2 = new Array(2000);  //공간만 할당

console.log( 'arr', arr.length);//배열에 값이 몇개있는지
console.log( 'arr2', arr2.length);
console.log(arr[0], arr[1], '....', arr[4]);

const arr3= []; //빈공간에 배열 추가추가추가
arr3.push(1);
arr3.push(2);
arr3.push(3);
arr3.push(30);
console.log('arr3',arr3.length);

