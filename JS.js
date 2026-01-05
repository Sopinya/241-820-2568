/*
array
*/

let ages = [25, 30, 35, 40, 45]
console.log('Ages:', ages)

let fruits = ['apple', 'banana', 'cherry', 'date']
console.log('Fruits:', fruits)
fruits.push('elderberry')
console.log('Fruits after push:', fruits)
console.log('First fruit:', fruits.length)

for (let i = 0; i <= fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i])
}

/*
object
*/

let student = [{
age:  30,
name: "John",
grade: 'A'
},
{
 age: 25,
name: "Jane",
grade: 'B'
}
for (let i = 0; i < student.length; i++) {
    console.log("Student " + (i + 1) + ":");
    console.log("Name: ", + student[i].name);
    console.log("Age: ", + student[i].age);
    console.log("Grade: " + student[i].grade);
}

student.push({
    age: 28,
    name: "Mike",
    grade: 'C'
})
console.log("Added new student:", student[student.length - 1]);

student.pop();
console.log("Remove last student. Current students:", student);

/*
function
*/

let score1 = 10
let score2 = 20

function calculation_grade(parameter){

}

if(score1 >= 80 ){
    grade = 'A'
} else if(score >= 70){
    grade = 'B'
} else if  (score >= 60){
    grade = 'C'
} else if  (score >= 50){
    grade = 'D'     
} else { 
    grade = 'F'
}
// เรียกใช้ฟังก์ชัน calculation_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log("Score1: " + score1 + " Grade: " + grade1)
console.log("Score2: " + score2 + " Grade: " + grade2)

/*
array
*/

let scares = [90, 80, 70, 50, 30, 10]
let newScores = []

for (let i = 0; i < scares.length; i++) {
    console.log(scares[i])
    //if (scares[i] >= 60) {
    //newScores.push(scares[i])
    //}
}

let newScores = scares.filter(function(score) {
    return score >= 70;
})

newScores.forEach((ns) => {
    console.log('new Score:', ns)
})
for (let i = 0; i < scares.length; i++) {
    console.log('Score ${i}:', scares[i])
}

scores = scores.map((s) => {
    return s - 10;
})

scores.forEach((s) => {
    console.log('score:', s);
})

/*
object function
*/

let student = {
    {name: "John", age: 20, grade: 'A'},
    {name: "Jane", age: 22, grade: 'B'},
    {name: "Mike", age: 21, grade: 'C'}
]console.log('Students:', student[0]);

let student = student.find(s) => {
     return s.name === "Jane";
})

let dubblescorestudent = student.map((s) => {
    s.score = s.score * 2;
    return s;
});

console.log('Student ',student);
console.log('Doubled Score Students:', dubbleScoreStudent);
console.log('Hight Grade Students:', highGradeStudents);