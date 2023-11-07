// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:

....
1 + 2 = ${1 + 2}`); // 얘의 좋은 점은 줄바꿈이나 싱글 쿼트 가 모두 인식됨.

// 2. Numeric operators
console.log(1 + 1); // 덧셈
console.log(1 - 1); // 뺄셈
console.log(1 / 1); // 나눗셈
console.log(1 * 1); // 곱셈
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 2의 3제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 얘는 먼저 +1 연산을 하고 할당 함
console.log(`${preIncrement} , counter = ${counter}`); // 3 3
const postIncrement = counter++; // 얘는 먼저 할당 후 나중에 +1 연산을 함
console.log(`${postIncrement} , counter = ${counter}`); // 3 4
// -- 연산도 똑같음


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x /= y;
x *= y


// 5. Comparsion operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;
// || (or), finds the first truthy value : true를 찾으면 멈춘다! 이게 중요함, 연산을 다 하지 않아도됨
// 왜? 하나라도 true라면 true니까
// 함수와 같은 연산이 복잡해진 애들을 앞에다가 배치하면 너무 비효율임
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 얘도 or와 비슷하게 하나라도 false면 false를 반환함
// 무거운 연산을 하는 얘들을 앞에다 두면 너무 비효율적임 
console.log(`and: ${value1 && value2 ** check()}`);
// nullableObject && nullalbeObject.something
// 이렇게 오브젝트를 검사할 떄, 앞에 오브젝트가 있는지를 검사함. 그래서 없으면 연산을 추가적으로 하지 않도록 함

function check(){
  for(let i = 0; i < 10; i++){
    console.log('t');
  }
  return true;
}

// ! (not)
console.log(!value1);



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion. 
// type은 신경 안쓰고 안에 들어있는 값이 같음으로 인지
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// type을 신경써서 type이 다르면 다름으로 인지
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // f : 둘은 다른 ref를 가지고 있으므로 false
console.log(ellie1 === ellie2); // f : 둘은 다른 ref를 가지고 있으므로 false
console.log(ellie1 === ellie3); // t : 3은 ellie1의 ref를 할당 받았기 떄문에 같음으로 true
// null === undefined 얘는 false임, 둘은 엄연히 다른 타입임. null == undefined는 true임



// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if(name === 'ellie'){
  console.log('welcom');
}else if(name === 'coder'){
  console.log('coder right');
}else{
  console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); // 조건이 참이면 value1 출력, 거짓이면 value2 출력



// 10. Switch statement
// use for muliple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same All');
}


// 11. Loops
// while loop, while the condition is truthy.
// body code is excecuted
let i = 3;
while(i > 0){
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do{
  console.log(`do while: ${i}`);
  i--;
}while(i > 0);

// for loop, for(begin; condition; step)
for(i=3;i>0;i--){
  console.log(`for: ${i}`);
}

// quiz
// 1. even
for(let i = 0; i < 11; i++){
  if(i % 2 === 1) continue;
  console.log(`continue: ${i}`);
}
// 2. 8까지 출력
for(let i = 0; i < 11; i++){
  if(i > 8) break;
  console.log(`break: ${i}`);
}