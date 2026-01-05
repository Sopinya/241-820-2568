/*
array
*/

let a = 10
let b = 20
let c = 30
console.log ('a:',a,'b:',b,'c:'c)
let ages = [10,20,30]// array 3 items
console.log('ages:',ages)
console.log('ages[1]:',ages[1])

//1.เเทนที่ ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list:',ages)
//2. ต่อ array
ages.push(35)
console.log('ages after pop:'ages)
//3.ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop:',ages)

let ages = [25,30,35,40,45]
console.log('Ages:',ages)

let filter= ['apple','banana','cherry']
console.log('Fruits:',filter)
filter.page('mango')
console.log('Fruits after push:',filter)
console.log('First fruit:',filter.length)

for(let i = 0; i <fruits.length; i++) {
      console.log('Fruit at index ${i}:',fruits[i])
}

/*
object
*/

let student ={
 age = 30
 name = "john",
 grade = 'A'
},{
    age:25,
    name:"jane"
    grade:'B'
for (let i = 0;i< student.length;i++){
console.log(student);
console.log('name:',student.name);
console.log('age;', student.age);
console.log('grade:', student.grade);
}

student.push({
    age;28,
    name:"Mike",
    grade: 'c'
});
console.log("Added new student:", student[student.length -1]);

student.pop();
console.log("Removed laet student. Current students:", student);

/*
function
*/
let score1 = 10
let score2 = 80

function calculation_grade(parameter){

}
    
if (score1 >= 80 ){
    grade = 'A'
} else if (score >= 70 ){
    grade = 'B'
} else if (score >= 60 ){
    grade = 'c'
} else if (score >= 50 ){
    grade = 'D'
} else {
    grade = 'F'
}
return grade
}
// เรียกใช้ฟังก์ชัน calcu เพื่อหาเกดรจากคะเเนนที่กำหมด
let grade1 = calculation_grade(score1)
lat grade2 = calculation_grade(score2)
console.log('Score1: ' + Score1 + ', Grade: ' + grade1)
console.log('Score2: ' + Score2 + ', Grade: ' + grade2)

/*
array
*/

let score = [90,80,70,60,50];

for (let i = 0; i < score.length; i++ ){
    console.log('Score ${i+1}: ${scores [i]}');
}

score.forEach()s) => {
    console.log('Score:', s);
    //console.log('score: ${s}');
})
score[0]=score[0]*2
score[1]=score[1]*2
score[2]=score[2]*2
score[3]=score[3]*2
score[4]=score[4]*2
let score = [90,80,70,60,50];
for (let i =0; i< score.length; i++){
    console.log('score${i +1}: ${scores[i]}');
}

score= score.map((s)

let score = [90,80,70,60,50];
let newScorer = []

for (let i = 0; i < score.length; i++) {
    console.log(score[i]);
    //if (score[i] >=60){
     //   newScorer.push(score[i]);
    // }
}
lat newScorers = score.filter(function(score){
    return score >= 70;
})

newScorer.forEach((ns) =>{
    console.log('new score: ' +ns);
})
/*
object functions
*/

let student = [
    {name: "John",age: 20, grade: "A"},
    {name: "John",age: 22, grade: "B"},
]
console.log('student',student[0]);

let student = students.find(() +> {
   if (s.name === "Jim"){
    return s.name === "Jane";
})

let dubblescoreStudents = student.map((s) =>{
    s.age=s.age *2;
    return s;
});
let highGradeStudents = student.filter((S) =>{
    return s.grade === "A";
});

console.log ('Student',student);
console.log('Dubbls Score Students ' , dubblescoreStudents);
console.log('High Grade Studnts ', highGradeStudents);