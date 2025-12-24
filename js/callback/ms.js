



const arr = [3,88,76,9,34,65];
const myarr= { 
    '0':3,
    '1':88,
    '2':76,
    '3':9,
    '4':34,
    '5':65,
    'length':6,
    'forEach': function (fn){ 
        for (i=0; i<6; i++){fn( myarr[i],i)}
        
        }
        
        }
        myarr.forEach((item,idx)=> {
        console.log(`arr[${idx}]: ${item}`);
    })

