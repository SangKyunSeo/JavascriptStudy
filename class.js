'use strict'
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. class declarations
class Person{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name} hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }
  set age(value){
    if(value < 0){
      throw Error('음수 안됨');
    }
    this._age = value;
  }
}
// getter 와 setters 를 사용할 때, 생성자를 통해 값을 할당 하게되는 경우
// 메모리에 값을 바로 할당하는 것이 아니고, getter와 setter를 호출하게됨
// setter를 호출하면서, this.age 처럼 같은 변수명을 사용하게 된다면, 계속 호출을 시도함.
// 따라서 세터와 게터는 실제 생성자에서 사용한 변수명과 다른 변수명을 사용해야함
const user1 = new User('Seteve', 'job', 1);
console.log(user1.age);
// class를 사용하는 사용자와 별개로 방어적으로 세팅하는게 게터 세터
// 기호를 사용한 게터와 세터가 존재하지만, 기호 없이 호출할 수 있는 이유가 게터와 세터가 존재하기 떄문임


// 3. Fields (public, private)
// Too soon
class Experiment{
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);

// 4. Static properties and methods
// Too Soon
// 오브젝트 마다 할당되는 것이 아니고 class 자체에 붙어있는 것임
// 오브젝트 마다 사용하는 것이 아니라서 공통적으로 사용하는 것이라면 사용할 때 효율적임
class Article{
  static publisher = 'Dream coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined가 출력됨 -> 오브젝트 마다 할당 되는 것이 아니라서
console.log(Article.publisher); // Class 자체에 붙어있는 것이라서 클래스로 호출이 가능함
Article.printPublisher();




// 5. Inheritance
class Shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color of`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{

}
class Triangle extends Shape{ 
  draw(){
    super.draw(); // 해당 명령어가 없다면, 오버라이딩된 함수만 호출이 되지만, 부모의 함수까지 호출하기위해 super를 사용함
    console.log('past');
  }
  getArea(){ // 오버라이딩
    return (this.width * this.height) / 2;
  }
}
const rect = new Rectangle(20, 20, 'blue');
const tri = new Triangle(20, 20, 'red');
rect.draw();
tri.draw();
console.log(rect.getArea());
console.log(tri.getArea());



// 6. Class checking: instanceOf
console.log(rect instanceof Rectangle); // rect라는 클래스가 오른쪽에 Rectangle로 만들어진 클래스인지를 파악함.
console.log(tri instanceof Rectangle); // F
console.log(tri instanceof Triangle); // t
console.log(tri instanceof Shape); // t
console.log(tri instanceof Object); // t , 자바스크립트의 모든 클래스 오브젝트는 자바스크립트에 있는 오브젝트를 상속한거임