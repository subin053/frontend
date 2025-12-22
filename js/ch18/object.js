/*
자바스크립트에서 객체를 만드는방법
객체는 속성,메소드로 이루어진다
person1에 저장되는 객체의 주소값을 알면 
속성값 읽기/쓰기 , 메소드호출을 할수있다
키:값 key: value(속성값 or 함수 (function))
*/
const person1 ={
    name: '김철수',//속성
    age:25,//속성
    married: false,//속성
    run: function() {console.log('나는 뛴다.!!!');} //메소드
};
person1.run();

const person2 = person1; //shallow copy(얕은 복사)
//객체 자체를 복사하는건 deep copy(깊은 복사

console.log( 'person1',person1.age);

person1.age = 30;
console.log( 'person1',person1.age);

person1.married= true;
console.log(person1.married);
const result = (person1.married ==true ? '짝수' : '홀수');
console.log( result);

person1['age']=50;
const key = 'name';
person1[key]= '김수빈';
//person1['name']= '김수빈' 이렇게 작성한것과 같다
console.log(person1);

//객체 생성이후에 속성추가가 가능하다.(동적할당)
person1.address= '대구';
person1['height'] = 179;
console.log(person1);
