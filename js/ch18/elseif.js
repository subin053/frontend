/*
조건이 여러개인 경우, 
if-elseif-else 는 결국 그룹이기 때문에 하나만 실행된다.
if-elseif 는 하나도 실행이 안될수도 있다 만약실행된다면 하나만 실행된다

if(식1) {}  
else if(식2) {} 
else if(식3) {}  
else{}
*/


const value= parseInt(Math.random()*10+1);
console.log(value);
if(value>=8) {console.log(`${value}값은 8이상이다`);}

else if(value%2 == 1){console.log(`${value}값은 홀수이다`);}
else{ }