

const arr = [3,88,76,9,34,65];


function proc(item){
    console.log(item);
}
arr.forEach(proc);

/* forEach내부에서는 아래와 같은 작업을한다
for(let i=0; i<arr.length;i++){
proc(arr[i]);
}
*/

arr.forEach((item,idx)=> {//첫번째값 : 배열값, 두번째값: 인덱스번호
    console.log(`arr[${idx}]: ${item}`);
})