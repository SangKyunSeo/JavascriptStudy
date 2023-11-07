// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}

const name = 'eee'; // 변수는 하나의 값만 담김
const age = 20;

print(name, age);
function print(name, age){
  console.log(name);
  console.log(age);
}

const eee = {name: 'eeeee', age: 20};
function printf(person){
  console.log(person.name);
  console.log(person.age);
}
printf(eee);

// 1. Literals and properties
// 오브젝트를 만드는 방법
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor


// with JavaScript magic (dynamically typed language)
// can add properties later
eee.hasJob = true; // 이렇게 런타임 때 타입이 정해지는 동적 언어이기 때문에, 이렇게 추가할 수 가 있음
// 이렇게 사용하지 않는게 좋음
console.log(eee.hasJob);
delete eee.hasJob; // 이렇게 삭제하는 것도 가능함.
console.log(eee.hasJob); 


// 2. Computed properties
// key should be always string
console.log(eee.name); // eeeee
console.log(eee['name']); // eeeee 
console.log(eee[name]); // 얘는 string 아니라서 안됨
eee['hasJob'] = true; // 이렇게 해도됨
console.log(eee.hasJob); 
// . 을 사용하는 경우는 코딩하는 순간 키에 해당하는 값을 받아오고 싶을때,
// Computed properties을 사용하는 경우는 어떤 키값을 사용할지 모를때 즉, 런타임에서 결정될 때 사용
// 실시간으로 원하는 키 값을 받아오고 싶을때 사용하면됨.
function printValue (obj, key){
  console.log(obj[key]); // 이럴때 사용함
}
printValue(eee, 'name');
printValue(eee, 'age');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 20};
const person2 = {name: 'steve', age: 20};
const person3 = {name: 'dave', age: 20};
const person4 = new Person('erere', 22); // 이렇게 해도됨.


// 4. Constructor Function
function Person(name, age){
  // return{
  //   name, // shorthand로 인해 key 값과 value값이 동일하면 생략 가능 name: name 생략 -> name
  //   age
  // }
  this.name = name;
  this.age = age;
}


// 5. in operator: property existence check (key in obj?)
console.log('name' in eee);
console.log('age' in eee);
console.log('random' in eee);
console.log(eee.randomn); // 정의하지 않은 프로퍼티를 호출하면 -> undefined 출력

console.clear();
// 6. for..in vs for..of
// for (key in obj)
for (key in eee){
  console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(let i=0; i<array.length;i++){
  console.log(array[i]);
}
for(value of array){
  console.log(value);
}



// 7. Func cloning
// Object.assign(dest, [obj1,obj2,...])
const user = {name: 'ee', age: '20'};
const user2 = user; // user2 와 user 동일한 reference를 가리킴
user2.name = 'coder'; // user2가 가리킨 name은 user가 가리키는 오브젝트의 name이라서 변경이 된거임
console.log(user.name);

// old way
const user3 = {};
for (key in user){
  user3[key] = user[key]; // user의 key를 돌면서 -> user3의 새로운 key들이 들어가고 user값이 들어감
}
console.clear();
console.log(user3);

const user4 = {};
// const user4 = Object.assign({}, user); 이런것도 가능
Object.assign(user4, user);
console.log(user4);


// 뒤로 올 수록 앞에 것을 덮어 쓴다.
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({},fruit1, fruit2); 
console.log(mixed);