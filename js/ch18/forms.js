let w= '*' ;
    const sta = parseInt(Math.random()*5+3);
for (k=1; k<sta ; k++ ){
    w = w+'*';
}

for(q=0; q<sta; q++){
    console.log(w)
}
    
console.log(sta)

const star = parseInt(Math.random()*5+3);
let s = ''
for (let b = 1; b <= star; b++) {
    for (let a = 1; b==1 && a <= star; a++) {
        s += "*";
    }
    console.log(s)
}
let i = "";
for (let b = 1; b <= star; b++) {
    for (let a = 1; a <= star; a++) {
        if (b > 1) continue;
    i += "*";
}
    console.log('f',i);
}


let p= ''
let o= ''
const mis = parseInt(Math.random()*5+3);
let v= mis

for (let n=0 ; v>1, n<mis; v-- ,p='', n++){
    for(c=v ; c>1;c--){
        p+='_ '
        } 
    o+='*';
    console.log(p+o) ; }



