/*

중첩for문(for in for)

시계 (시간/분 관계)
*/

for (let h=0; h<12; h++){
    for(let m=0; m<30; m++){
        for(let s=0; s<30; s++){
        console.log(`${h}:${m}:${s}`);}
    }
}


for (i=2; i<10 ;i++){
    for (u=1; u<10; u++){ 
        console.log(`${i}x${u}=${i*u}`);
    }if(i<9)console.log('=====');
    
}

let star = parseInt(Math.random()*5+3);
for (; star>0; star--){ 
    console.log('*');}



    const st = parseInt(Math.random()*5+3);
    const arr2 = [];
for (k=0; k<st ; k++ ){ arr2.push('*')
}
console.log(arr2)
    console.log(st)



    let w= '*' ;
    const sta = parseInt(Math.random()*5+3);
for (k=1; k<sta ; k++ ){ w= w+'*';
} console.log(w) 
console.log(sta)
