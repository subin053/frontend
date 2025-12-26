/* 

new promise(함수 주소값)
new: 객체 생성할때 사용하는 키워드
promiseㅣ 생성자 함수
우리가 기존에 만들었던 객체는 틀이 없음(일회용) 구조가 다른 객체를 여러개만들때 유리
생성자함수는 틀이 있음(설계도) 여러개를 만들때 유리

보내는 함수는 파라미터 2개를 사용할수있다
(resolve, reject) => { 
    resolve,reject도 콜백함수 (함수 주소값이 넘어온다)
    resolve(); 보통 성공했을때 호출
    reject(); 실패했을때 호출
    둘중하나만 호출해야함
    }
*/

let val =10;
const p1 = new promise( (resolve, reject) => {
    if(val%2 ) { 
        resolve;
    }else{
        reject;
    }
}); //p1에는 promise 객체 주소값 저장