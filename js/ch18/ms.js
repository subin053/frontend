const person ={ 
    married: false
}
person.married= !person.married

console.log(person);

const value = "";
if(value == ""){ console.log('입력안됨')} else {console.log('입력됨')};


const v = null;
if (!v) {
    console.log('입력안됨')
} else {
    console.log('입력됨')
};



const score = parseInt(Math.random()*81 )+20;
console.log( score);
if (score>=90){console.log('A'); if (score>=98){console.log('+');}else if (score >= 93 && score <= 97){console.log('0');} else {console.log('-');}}
else if (score>=80){console.log('B'); if (score>=88){console.log('+');}else if (score >= 83 && score <= 87){console.log('0');} else {console.log('-');}}
else if (score>=70){console.log('C'); if (score>=78){console.log('+');}else if (score >= 73 && score <= 77){console.log('0');}  else{console.log('-');}}
else if (score>=60){console.log('D'); if (score>=68){console.log('+');}else if (score >= 63 && score <= 67){console.log('0');} else{console.log('-');}}
else {console.log('F')}



