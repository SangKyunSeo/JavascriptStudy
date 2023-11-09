
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // answer
  const result = fruits.join(); // 구분자를 전달 하면 배열의 요소를 구분자로 string 형태로 반환
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // answer
  const result = fruits.split(','); // 구분자와, 배열의 크기를 제한할 수 있음 (',', 2); -> 2개로 배열을 만듬
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // answer
  const result = array.reverse(); // 배열 자체를 reverse시킴 -> 배열도 변함
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // answer
  //const result = array.splice(0, 2); // splice : 인덱스 0부터 2개를 지운 배열의 요소를 반환
  //console.log(result);
  //console.log(array); // splice로 배열의 요소를 지워서 2개를 지운 나머지 결과가 나옴
  const result = array.slice(2, 5); // slice: 배열에서 원하는 부분만 반환 end -> 는 포함 안됨
  console.log(result);
  console.log(array); // slice는 배열을 직접 삭제하는게 아님
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // answer
  // find : 배열의 요소마다 적용이 되고, 콜백함수를 부름 -> 콜백함수의 반환 타입은 boolean
  // 처음으로 true가 된 요소를 발견하면 즉시 멈추고 해당 요소를 반환
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // answer
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // answer
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // answer
  const result = students.some((student) => student.score < 50);
  console.log(result);
  
  
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);

}

// Q9. compute students' average score
{
  // answer
  // reduce : 현재 값이 다음에 이전 값으로 전달이됨 
  // reduceRight : 거꾸로 호출이 되면서 실행됨 -> reduce랑 반대로 실행된다고 보면됨
  // curr : 배열의 요소값을 전달 받고
  // prev : 초기 값을 전달 받고 이전값을 전달함
  console.log('--------------------------------');
  const result = students.reduce((prev, curr) => {
    console.log(prev + "," + curr.score);
    return prev + curr.score;
  }, 0);
  console.log(result);
  console.log(result / students.length);
  console.log('--------------------------------');
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // answer
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // answer
  // sort : a - b = 만약에 0보다 작은 값을 반환하게 되면 a가 b보다 작다고 간주하여 오름 차순으로 정렬함
  const result = students.map((student) => student.score).sort((a, b) => a - b).join();
  const result2 = students.map((student) => student.score).sort((a, b) => b - a).join();
  console.log(result);
  console.log(result2);
}
