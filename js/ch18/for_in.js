/*
객체가 가지고있는 key를 순차적으로 준다.
*/

const person1 ={
    name: '김철수',
    age:25,
    married:false
};
for (const key in person1){
    console.log('key:',key);
}


for (const key in person1){
    console.log(person1[key])
}



