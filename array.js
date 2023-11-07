'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[4]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
for(let fruit of fruits){
  console.log(fruit);
}

/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 */

// 콜백함수를 사용함.
// 배열의 요소마다 콜백 함수를 수행함 -> 우리가 전달한 배열의 각각 요소마다 콜백함수를 수행한다는 의미
// 콜백함수에는 3가지의 파라미터가 전달됨 -> 값, 인덱스, 전체 배열
// 사과와, 사과가 들어있는 인덱스, 배열이 들어온다고 보면됨
fruits.forEach(function(fruit, index, array){
  console.log('he'); // he가 2번 출력됨
  console.log(fruit, index, array); // 보통은 array는 안씀
});

console.clear();
fruits.forEach((fruit, index) => console.log(fruit));


// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beggining : 첫번째 추가
fruits.unshift('strawberry');
console.log(fruits);
// shift: remove an item from the beggining : 첫번째 빼기
fruits.shift();
console.log(fruits);

// note : shift, unshift are slower than pop, push : pop, push보다 느림
// 처음부터 추가 및 삭제 하는 경우 인덱스를 모두 옮겨야 하기 때문임

// splice: remove an item by index position : 지정된 위치에서 데이터 삭제
fruits.push('strawberry','peach','lemmon');
console.log(fruits);
//fruits.splice(1); start 인덱스 부터 모든 데이터를 지워
// fruits.splice(1,2);  start 인덱스 부터 2개의 데이터를 지워
console.log(fruits);
// fruits.splice(1,2, 'bam','baa'); // 1번째 인덱스부터 2개를 지웠고 그 부분 부터 데이터를 넣어줘
fruits.splice(1,2, 'bam','baa','saa','seee');
console.log(fruits);
fruits.splice(2,0,'sss','kkk'); // 2번 인덱스에서 시작하는데 0이라서 지우지는 않고 데이터만 추가
console.log(fruits);

// combine two arrays
const fruits2 = ['aaa','zzz'];
const newF = fruits.concat(fruits2); // 배열 2개를 합쳐서 newF에 넣어줌
console.log(newF);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); // 사과의 인덱스를 반환
console.log(fruits.indexOf('baa'));
console.log(fruits.indexOf('slkghsjkghsdl')); // 없다면? -1을 반환

// includes
console.log(fruits.includes('apple')); // fruits 배열에 apple이 포함되어 있니? true
console.log(fruits.includes('sdhfasljkdhf'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 제일 첫번 째로 해당하는 값을 만나면 그 인덱스를 반환
console.log(fruits.lastIndexOf('apple')); // 제일 마지막에 해당하는 값의 인덱스를 반환


// 퀴즈

// toString
// 배열을 문자열로 바꿈
console.log(fruits.toString());

// toLocaleString
// 배열을 문자열로 바꿈 대신 날짜의 경우 로컬 시간대와 로컬 설정을 고려해서 바뀜
// 지역화에 유리함
console.log(fruits.toLocaleString());

// toDateString()
let date = new Date();
console.log(date); // Tue Nov 07 2023 17:16:27 GMT+0900 (한국 표준시)
console.log(date.toLocaleDateString()); // 2023. 11. 7.
console.log(date.toDateString()); // Tue Nov 07 2023

// join
// 배열의 요소들을 구분자로 구분해서 출력해줌
console.log(fruits.join('.')); // apple.bam.sss.kkk.baa.saa.seee.peach.lemmon.apple
console.log(fruits.join('')); // applebamssskkkbaasaaseeepeachlemmonapple
console.log(fruits.join('-')); // apple-bam-sss-kkk-baa-saa-seee-peach-lemmon-apple

// reverse
// 배열의 요소를 뒤집음 -> 그대로 저장됨 -> 리턴값이 존재해서 그런듯
console.log(fruits.reverse());
console.log(fruits);

// every
// 배열의 모든 요소가 주어진 함수를 통과하는지에 대한 true false 반환 기능
const isTest = (value) => value > 0;
const testNumbers = [1,2,3,4,5,6,7,8,9];
console.log(testNumbers.every(isTest));
// testNumbers 배열의 모든 요소가 우리가 정의한 isTest를 모두 통과하는가를 시험함
console.log(fruits.every((value, index) => value.includes('apple')));
let arr = [1,2,3,4];
arr.every((e, i,arr) => {
  arr[i+1]--;
  console.log(`[${arr}][${i}] -> ${e}`);
  return i < 2;
});

// filter
// 배열의 요소중에 조건에 맞는것을 필터링 한 결과로 리턴
const testArr1 = [10,12,14,16];
console.log(testArr1.filter((v)=>v>12)); // 배열의 요소중에 12보다 큰 요소들만 반환

// reduce
// acc => 누산기 -> 이전 값들의 연산 결과
// value => 현재 값 
// index => 현재 값의 인덱스
// arr => 배열
const reduceResult = [0,1,2,3,4].reduce((acc, value, index, arr) => {
  return acc + value;
});
console.log(reduceResult);
// acc -> 0
// acc -> 1
// acc -> 3
// acc -> 6
// acc -> 10
// return 10















