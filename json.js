// JSON
// JavaScript Object Notation

// 1. Object to JSON
let json = JSON.stringify('');
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump : () => console.log(`${this.name} can jump!`)
}
json = JSON.stringify(rabbit);
console.log(json);
// 함수는 JSON에 있는 오브젝트가 아니라서 포함되지 않음
// Symbol도 포함되지 않음

json = JSON.stringify(rabbit, ['name','size']); // 원하는 프로퍼티만 뽑아올 수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { 
  console.log(`key : ${key}, value : ${value}`);// 처음에는 rabbit을 둘러 싼 최상위 오브젝트를 출력함
  return key === 'name' ? 'test' : value; // key 가 name인 경우엔 test로 바꾸고 나머지는 그냥 value
});
console.log(json);


// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump(); // 오브젝트를 JSON으로 변환할 때, 함수가 포함되지 않았음 -> JSON을 오브젝트로 변환했을 경우 함수도 포함되지 않음!

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // 오브젝트를 JSON으로 변환할 때, date 형식이 아닌 string 형식으로 저장이 되었고, 이를 다시 오브젝트로 변환을 했을 경우 string이라서 date안에 함수를 사용 못함

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());
