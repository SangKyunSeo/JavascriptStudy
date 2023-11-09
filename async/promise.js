'use strict'

// producer와 consumer의 차이를 알아야함 
// Promise is a JavaScript object for asynchronous operation.
// state : 프로피스가 만들어져서 우리가 지정한 opertion을 수행중이면 pending 상태
// 수행을 완료하면 fulfilled 상태 
// 오류가 발생하면 rejected 상태
// producer : 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 오브젝트
// consumer : 데이터를 소비하는 오브젝트

// 1. Producer
// executor 라는 콜백함수를 전달해줘야함
// 이 콜백함수에는 또 다른 콜백함수 2개를 받음
// resolve : 기능을 정상적으로 수행해서 최종적으로 기능을 수행 할 콜백함수
// reject : 기능을 수행하다가 문제가 생기면 호출하게될 콜백함수
// promise를 만드는 순간 우리가 전달 한 executor가 실행됨
// 네트워크 통신 같은 기능을 넣으면 promise가 생성되자 마자 통신을 하는 거임
// 사용자가 버튼을 클릭 했을 때 네트워크 통신이 일어나면?? 불필요한 통신을 하는 것임
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) 파일이 크거나, 네트워크가 오래 걸리면 동기적으로 할 경우 데이터를 받아오는동안 다음 코드가 실행되지 않기 때문에 얘 사용
  console.log('something'); 
  setTimeout(()=>{
    //resolve('ellie'); // 네트워크 통신을 통해 받아온 데이터를 가공해서 콜백함수에 전달하면 됨
    reject(new Error('no network'));
  }, 2000);
});


// 2. Consumers : then, catch, finally
// promise에 의해 잘 수행이되었고, resolve 콜백함수에서 전달해준 데이터가 then의 value에 들어가게됨
// promise가 잘 수행되어서 resolve 콜백함수를 통해 전달한 값이 value로 전달됨
promise
.then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(()=>{console.log('finally')});
// 위에서 reject 콜백함수를 실행할경우 에러 핸들링을 하지 않으면 -> catch로 다루지 않으면 -> Uncaught 에러가 발생함
// finally는 통신이 성공하든 실패하든 실행됨


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(()=> resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  })
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('chicken'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`Error ${hen} => egg`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => chickEgg`), 1000);
});

getHen()
.then(getEgg) // getHen이라는 함수를 실행해서 받아온 value를 getEgg에 암묵적으로 전달해줌
.catch(()=> { // 이런식으로 getEgg를 받아오는 곳에서 에러를 다루고 return 으로 해당값을 채울 수 있음
  return 'bread';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log)