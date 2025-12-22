/*
while(조건){
조건이 true인 동안 반복한다
}
*/
let i =0;
while (i<10){
    console.log(i);
    i++;
}


//while은 주로 이렇게 사용한다
//조건식에 true로 무한반복하고,if+break로 멈춘다.
let k=0;
while(true){
    console.log('반복');
    if(k===5){break;}
    k++;
}

/*
while(조건1){
while문 들어가기전에 조건1이 true일때만 반복을 시작 
즉, 조건1 최초false였다면 반복을 시작하지도 않는다.
}
do{
최초 한번은 무조건 돌리고나서 조건2를 확인한다.
}while(조건2);
*/


