/*

for(인덱스초기화 ; 반복세팅 ; 인덱스 증감식) {
    중괄호 사이에 있는 내용이 여러번 반복해서 실행될수 있다.}
    
    for( 1; 2; 3) { 4 }
    실행순서 : 1>2>4>3
            2>4>3
            2>4>3
            ...2번이 false가 될때까지 계속 반복
    */
            
            for(let i =0; i<10; i++){
                console.log(i);}
                //  {}console.log(i); for문 밖에서는 i가 죽음. 에러
                


    for(let r =100; r<110; r++){
        console.log('ms2',r-99);
    }



    for(let t =9; t<16; t++){
        console.log('안녕!');}


        for(let y=9; y>2; y--){
            console.log('안녕~');}




            for(let w =0; w<10; w+=2){
                console.log(w);}


        const dan = parseInt(Math.random()*8)+2;
        
        for(let b =1 ; b<10 ; b++){
            console.log(`${dan}x${b}=${dan*b}`);
            
        }

        const fruits = ["apple", "banana", "orange"];
        for (let q=0; q<fruits.length; q++ ){
            console.log(fruits[q]);
            
        }

        const numbers = [1, 2, 3, 4, 5, 6];
        for (let f=0;f<6; f++ ){
            if(numbers[f] %2 ==0) console.log(numbers[f]);
        }

        

