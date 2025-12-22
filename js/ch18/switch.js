/*
switch(숫자값) {
    case1: 
    :(콜론)과 break; 키워드 사이의코드가 실행이 된다
    break;
    case2: 숫자값이 2였을때 실행하고싶은 코드 작성
    break;

    default:
        if문의 else와 같다.
        break;
    }
    */

    const mon  =parseInt(Math.random()*12+1);
    switch (mon){
        case 1: console.log('이제 진짜') // 1에만 적용. 밑으로는 적용안됨 
        case 2 :
        case 12: console.log('겨울') //break를 만나기전까지의 케이스에서 코드 생략가능 코드
        break;
    }