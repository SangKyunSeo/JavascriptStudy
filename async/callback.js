'use strict';

// 자바스크립트는 동기적 : 작성된 코드의 순서대로 실행된다는 의미

console.log('1');
setTimeout(function(){ // 비동기적 코드
  console.log('2');
}, 1000); // 정해진 시간이 지나면 콜백함수 실행
console.log('3');


// 동기 콜백
function printImmediately(print){
  print();
}
printImmediately(()=>console.log('hello'));
/**
 * 함수의 선언은 hoisting에 의해 최상단으로 이동하게 됨.
 * 1을 출력하고 3을 출력하고 printImmediately함수가 실행됨 
 * 안에 콜백함수를 인자로 넘겨서 hello가 출력되고 
 * 2가 출력됨
 */


// 비동기 콜백
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);


class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if(id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy'){
        onSuccess(id);
      }else{
        onError(new Error('not found'));
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'});
      }else{
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// 콜백 체인 
const userStorage = new UserStorage();
const id = prompt('id 입력');
const password = prompt('password 입력');
userStorage.loginUser(id, password, (id)=>{
  userStorage.getRoles(id,(user)=>{
    console.log(`name : ${user.name}, role : ${user.role}`);
  },(error) => console.log(error));
},(error)=> console.log(error));
// 문제점 : 디버깅, 오류 해결, 유지보수 너무 어려움
