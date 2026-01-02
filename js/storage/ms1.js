const arr = [];
for(let i=1; i<=10; i++) {
    const obj = {
        id: i,
        name: `홍길동${i}`
    };
    arr.push(obj);
}
console.log(arr);

let result = null;
for(let i=0; i<arr.length; i++) {
    if(arr[i].id === 20) {
        result = arr[i];
        
    }
}
console.log(result);

const abj = {
    abc: { id:1 , name: '홍길동'},
    bcd: {id:2 , name: '김수빈'}
};
console.log(abj.abc['name'])







const arr2 = [
    { id:'ddd', name: '홍길동'},
    {id:2 , name: '김수빈'},
    {id:3 , name: 'www'}
]

console.log('===')
const obj2 = {};
for(let i=0; i<arr2.length; i++){
    const key= arr2[i].id;

    obj2[key]= arr2[i]
    
}console.log(obj2)

const arr3={};
console.log('==============')
arr2.forEach((item)=>{
    
    (arr3[item.id])=item;
    
})
console.log(arr3)
