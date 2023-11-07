'user strict';
console.log(age);
// 2. Variable, rw(read/write) 메모리에 읽고 쓰기 가능
// let (added in ES6) ES6에 추가되었음

let name = 'test';
console.log(name);
name = 'hello';
console.log(name);

// Application마다 사용되는 메모리가 할당됨.
// 어플리케이션 마다 메모리가 제한적으로 할당.
// name 변수를 정의하면 name 변수가 가리키는 메모리가 생기고
// 여기에 값을 넣어주게됨.


// global scopre
let name3 = 'test3'; // global scope의 경우 어디에서나 접근이 가능
console.log(name3);


// block scope
{
  let name2 = 'test';
  console.log(name2);
  name2 = 'hello';
  console.log(name2);
  console.log(name3);
}
// console.log(name2);  block scope의 경우 block 안에서만 접근이 가능함

// var ES6전에 사용하던 변수 선언 방법
age = 4;
var age;
console.log(age);
// var의 경우 변수를 선언하지 않고 미리 할당 해서 사용이 가능함 -> var hoisting이라고 부름
// 변수를 글로벌 스코프로 선언을 해서 할당 하지 않고 파일 맨 위에서 변수를 호출하면 오류를 발생하지 않고 undfined라고 나옴
// 블럭 스코프를 사용하지 않음 -> 블럭 스코프에 선언해도 글로벌하게 사용이됨.. 
// 이러한 단점으로 var를 사용해서는 안됨.


// 3. Constant, r (readOnly)
// 한 번 할당하면 값이 바뀌지 않음을 뜻함.
// 값을 선언함과 동시에 할당하면, 절대 변경이 안됨
// 값이 변경되는건 Mutable data type이라고 부름 -> let키워드가 해당됨.
// Constant 는 Immutable data type이라고 부름
// 사용하는 이유는?
// 1 보안성
// 2 스레드 안정성 : 다양한 스레드들이 변수에 접근해서 동시에 값을 변경할 수 있음 -> 이걸 방지


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function
// primitive -> 더이상 작은 단위로 나눠질 수 없는 한 가지 아이템 
// object -> single item들을 여러개 묶어서 관리
// fist-class function -> 함수도 변수에 할당이 가능하고, 인자로도 전달되고, 리턴도 됨.

// number : 다른 언어 처럼 크기에 구애받지 않고, 다이나믹하게 감지하기 때문에 number라고 따로 선언하지 않아도됨
// let a = 12;
// let b = 1.2;
const count = 17;
const size = 15.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// 특별한 숫자의 값
// dom요소의 position을 계산해야 할 경우 신경을 써야하는 부분임
// 연산을 할 때는 그 값이 유효한지를 신경써야 함.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'sample' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// binInt (fairly new) 이번에 추가됨 -> -2**53 ~ 2**53 자바스크립트에서 number가 표현할 수 있는 크기 인데 이거 보다 큰 경우에 해당함
// 크롬의 최신 버전에서만 지원을 하기 때문에 사용하지 않는걸 추천
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// template literals (string) : `` 이 기호를 적고 원하는 string에 ${변수명}으로 붙여서 사용이 가능함
// `` : 백틱이라고 부름


// boolean
// false : 0, null, undefiend, NaN, '' : 이것들에 해당하는 값들이 false로 간주됨.
// true: any other value


// null
// null이라고 할당 할 경우 비어있는 값으로 지정이 된거임.
let nothing = null;
console.log(`value: ${nothing}`)

// undefined
// 선언은 되었지만, 아무런 값이 지정되지 않은 상태
let x;
console.log(`valueL ${x}, type: ${typeof x}`);

// symbol
// map 이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시 다발적으로 일어나는 코드에서 우선순위를 부여하고 싶을때 사용
// 다른 모듈이나 다른 파일에서 string이 같아도 다른 식별자로 인식함.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false 출력
// 같은 string으로 같은 식별자를 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true 출력

// symbol을 출력하고 싶다면, .description으로 string으로 변환해서 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // typeof symbol1 = symbol, typeof symbol1.description = string


// 5. Dynamic typing : dynamically typed language
// 위에는 어떤 타입인지를 결정해서 선언했음. 자바스크립트는 프로그램이 동작할 때 타입이 변동 가능함.
let text = 'hello';
console.log(text.charAt(0)); // h 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string으로 인식함
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // number 연산에서 사용되는거고, 문자 안에 숫자가 있음을 확인해서 number로 인식
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); 얘s는 에러 임 -> 타입이 변경이 되었기 때문.

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21; // 이렇게 변경 가능함 -> ellie라는 오브젝트가 const임에도 안에 값은 수정 가능

//************************************************************************************* */

/**
 * primitive와 object는 메모리에 저장되는 방식에 차이가 있음
 * primitive는 값 자체가 메모리에 저장됨
 * object는 메모리에 한번에 다 올라갈 수 없음, ref(레퍼런스)가 메모리에 올라가고, 실제 오브젝트를 
 * 가리키는 레퍼런스가 메모리에 저장된다!
 * 
 * 자바스크립트에서 모든 오브젝트는 mutable data type임
 */
