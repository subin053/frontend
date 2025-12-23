


const arr =[ 10,8,4,88,65,3];

function findmax(n1){
    let w=0 ;
    for(const i of n1){
        if(i>w) w=i 
    }
    return w;
}
const max = findmax(arr);
console.log(max)