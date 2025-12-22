/*
break: 나를 감싸고 있는 반복문 바로 빠져나오기
continue: for 문인 경우 증감식 순서로 바로가고 while문이었으면 조건식 순서로 바로간다

*/





for(i=1; i<11; i++){
    if(i%2==1) continue;
    console.log(i);
}

/* 반복문에 레이블지정, 별명 지정
*/

outerloop:
for(i=1; i<11; i++){
    for(let k=0; k<10; k++){
    if(k==5) continue outerloop;
    console.log(i, k)
    }
}

