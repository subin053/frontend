/*
reduce함수 배열을 하나의 값으로 변경하고싶을때 사용
*/

const arr = [3,88,76,9,34,65];

const result =arr.reduce ( (prev, current) => {
    //prev는 이전에 return한 값, current는 현재값

    return prev + current; //최초 prev는 0번방부터 들어감 current는 1번방
})

const result2 =arr.reduce ( (prev, current) => {
    return prev+ current;
},0); //최초값이 0으로들어감. 두번째 아규먼트는 최초값으로 쓰임