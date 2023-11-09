// async & await
// clear style of using promise

// 1. async
async function fetchUser(){
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
// async가 붙은 함수에서만 사용 가능
// 함수가 끝날 때 까지 기다리고 함수를 실행해 라는 의미임

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana () {
  await delay(3000);
  return 'banana';
}
function getBAnana () { // async를 쓰지 않으면 이런식이 됨
  return delay(3000)
  .then(() => 'banana');
}

function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);

// async 버전
async function pick() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`; 
}

pick().then(console.log);

// await 의 병렬 처리
// await을 차례대로 선언하여 사용시 -> 관계가 없는 데이터일지라도 시간을 기다려야함
// 이걸 병렬처리로 해결하는데
// 각각 promise로 만들어주는 거임
// promise를 만드는 순간 코드 블럭 내 코드가 실행되기 때문임
async function test() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
test().then(console.log);

// 유용한 promise api
// 프로미스들을 한번에 모아서 실행해주는 것임
// then을 통해 promise.all 결과로 배열이 됨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join('|'));
}

pickAllFruits().then(console.log);

function pickOnlyOne() { // 여러개 중에 가장 빠른 하나
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);