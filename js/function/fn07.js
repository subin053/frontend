



function sumarr(n1){
    let w=0;
    for(const i of n1){
        w+=i
    }
    return w;
}

const arr =[ 10,8,4,88,65,3,99];


const sum = sumarr(arr);
console.log(sum)
