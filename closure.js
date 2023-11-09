let count = 0;

function handleCheck(){
  return count + 1;
}

// 1. 클로저의 장점 : 전역변수를 줄일수 있다.
// 위 코드를 클로저의 장점으로 구현해보면...

function handleCheck(){
  let count = 0;
  function addCount(){
    return count + 1;
  }
  return addCount;
}

let fn1 = handleCheck();
console.log(fn1());

// 2. 클로저의 장점 : 비슷한 형태의 코드 재사용률을 높일 수 있다.
let order = food => {
  console.log(`${food}를 주문했어요!`);
  return drink => {
    return `${drink}를 주문했지요!`;
  }
}
let person1 = order('불고기와퍼');
console.log(person1('펩시제로콜라'));