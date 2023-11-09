// Function
// - fundamental building block in the program : 프로그램을 구성하는 가장 기본적인 building block
// - subprogram can be used multiple times : 서브 프로그램이라고도 불리며, 여러번 재사용 가능
// - performs a task or calculates a value : 한 가지의 태스크나 어떠한 값을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing : 하나의 함수는 한 가지 일만 하도록 만듬
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS : 함수는 오브젝트임 -> 함수는 변수에 할당, 리턴, 파라미터로 전달도 가능
function printHello(){
  console.log('hello');
}
printHello();

function log(message){
  console.log(message);
}
log('heelo');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){ // ref가 전달이 되었기 때문에 같은 ref를 가리키는 것이고 그에 따라 name값이 바뀌게 됨
  obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6);
function showMessage(message, from = 'unknown'){ // 이렇게 함수 선언부분에 파라미터의 default값을 지정할 수 있음
  console.log(`${message} by ${from}`);
}
showMessage('hi!'); // message만 파라미터로 전달됨. from이 정의되어 있지 않아서 undefined로 출력됨


// 4. Rest parameters (added in ES6)
// 배열 형태로 파라미터를 전달함.
// 
function printAll(...args){
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }

  for(const arg of args){
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie'); // 이렇게 하면 args배열에 3개의 값이 할당되어 들어감



// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
  let message = 'hi'; // local variable
  console.log(message);
  console.log(globalMessage);
}
printMessage();
//console.log(message);
// 함수 안에 정의된 변수는 함수 밖에서 호출 불가능
// 함수 안에서는 밖에서 정의된 변수 호출 가능
// 중첩 함수도 똑같음
// 자식 함수에서 부모 함수의 변수에 접근하는게 클로저..?



// 6. Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
  if(user.point > 10){
    // long logic ......
  }
}

// good
function upgradeUser(user){ // 조건이 맞지 않는 경우를 먼저 생각해서 함수를 종료 시키는 것.
  if(user.point <= 10){
    return; 
  }

  // long logic ......
}


// First-class funciton
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another funciton

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function -> 함수에 이름이 없는 상태로 funciton 키워드를 통해 함수를 선언하고 변수에 바로 할당함.
  console.log('print');
};
print(); // 이렇게 선언하면, 함수 호이스팅이 불가능함.
// 함수 호이스팅 -> 함수를 선언하기 전에 함수를 호출하는 것이 가능함 -> 함수 선언 부분을 최상위로 올려버려서 가능..

const printAgain = print; // printAgain은 print()를 가리키고 있음
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
const rePrintAgain = sum;
console.log(rePrintAgain(1, 3));

// 2. Callback function using function expression
// 함수를 파라미터로 전달했음
// 이걸 콜백 함수라고 부름 -> 2가지의 콜백함수가 파라미터로 전달된거임
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love'){
    printYes(); // 콜백함수 1
  }else{
    printNo(); // 콜백함수 2
  }
}

// anonymous function 
const printYes = function () {
  console.log('yes');
};

// named function
// 디버깅할때 디버거 안에서 스택 추적이 가능하도록 하기 위해 이렇게 사용함. 
// recursions : 함수 안에서 또다른 함수를 호출할 때 사용
const printNo = function print() {
  console.log('no');
  // print() : recursions 부분임
};
randomQuiz('wrong', printYes, printNo); // no
randomQuiz('love', printYes, printNo); // yes

// Arrow function
// always anonymous
const simplePrint1 = function() { // arrow function을 적용하지 않은 부분
  console.log('simplePrint');
}

// arrow function 적용 부분
const simplePrint2 = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpeMulti = (a, b) => { // 이렇게 block을 만들어도 되지만, block을 만들었을 경우 무조건 return이 있어야함
  return a * b;
}
const test = a => a + 100;

// IIFE : Immediately Invoked Funciton Expression = 선언과 동시에 호출
(function helli(){
  console.log('IIFE');
})();

// quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
  if(command === 'add') return a + b;
  else if(command === 'substract') return a - b;
  else if(command === 'divide'){
    if(b === 0){
      return false;
    }
    return a / b;
  } 
  else if(command === 'multiply') return a * b;
  else if(command === 'remainder') return a % b;
  else
    return false;
}

console.log(calculate('add', 1, 2));
console.log(calculate('substract', 1, 2));
console.log(calculate('divide', 1, 0));
console.log(calculate('multiply', 1, 2));
console.log(calculate('remainder', 1, 2));
console.log(calculate('dsad', 1, 2));