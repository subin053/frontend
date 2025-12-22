

const arr = [5,10 ,15 ,20 ,25];
for(let i =0; i<arr.length; i++){
    console.log( `arr[${i}]: ${arr[i]}`);
}

const arr2 =new Array(10);
for(let y =1; y<=10; y++){
    arr2[y-1]=y;}
    console.log(arr2);


    

let z=0
    const arr3 =[ 3,8,11,86,43,22,27];
    for(w=0;w<arr3.length; w++){
        q=arr3[w]; z=z+q
    }   
    console.log(z)

console.log('---------');

    let a=0, b=0
    const arr4 =[ 3,8,11,86,43,22,27];
    for(u=0; u<arr4.length ;u++){
        if(arr4[u]%2 ==0) {
            a=a+ arr4[u]}
        else{b=b+ arr4[u]}
    }
    console.log(a);
    console.log(b);


    console.log('---------');
    const arr5 =[ 3,8,11,86,43,22,27,96,1,2];
    let s= arr5[0], t=arr5[0]
    for(m=0;m<arr5.length; m++){
        if(arr5[m]>s){s=arr5[m]} 
        if(arr5[m]<t){t=arr5[m]}
    }
    console.log('최대:',s);
    console.log('최소:',t);