function a(n1){ 
    if(n1<0) {
        console.log(-n1);
    } 
    else{
        console.log(n1);

    }
}
a(-40)


function abs(n1){
let b =( n1 >0 ?  n1: -n1);
console.log('절대값:',b);
return abs;
}

abs(-10)

console.log('======')
function random (n1){
    let av= (parseInt(Math.random()*n1))
    return av
}
const rv = random(9);
console.log(rv)



console.log('====')






function rt (n1,n2){
    let av= (parseInt(Math.random()*(n2-n1)+n1));
    return av
}
console.log(rt(3,9))
console.log(rt(10,15))




console.log('=======')




function star(n1){
    let m ='';
    for( ;n1>0 ;n1--){m+='*'}
    return m;
}
console.log(star(7));


console.log('--------square');


function square (n1){
    let q=''
    for(w=0; w<n1;w++){q+='*'}
    for(let i=0; i<n1; i++){console.log(q);}
}
square(4)
