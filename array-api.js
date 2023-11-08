
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
  // answer

}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const array = fruits.split(',');
  console.log(`Array : ${array} , type : ${typeof array}`);
  // answer
  
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
  // answer
  
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0,2);
  console.log(array);
  // answer
  
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
  console.log(students.filter((e)=>e.score === 90));
  // answer
  
}

// Q6. make an array of enrolled students
{
  const array = students.filter((e) => e.enrolled === true);
  console.log(array);
  // answer
  
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const array = students.map((e) => e.score);
  console.log(array);
  // answer
  
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student, index, students) => student.score < 50);
  console.log(result);
  // answer
  
}

// Q9. compute students' average score
{
  let sum = 0;
  students.forEach((e,i,arr) => sum += e.score);
  console.log(sum);
  console.log(sum / students.length);
  // answer
  
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scores = students.map((e) => e.score).toString();
  console.log(scores);
  // answer
  
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((e) => e.score).sort().toString();
  console.log(result);
  // answer
  
}
