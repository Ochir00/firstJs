let students = [
    { name: "Boldoo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
    { name: "Saraa", age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
    { name: "Tuvshuu", age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
    { name: "Anu", age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
    { name: "Enkhee", age: 19, grades: [50, 45, 60, 70, 80], gender: "male" },
    { name: "Temuulen", age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
    { name: "Nandin", age: 15, grades: [80, 85, 90, 75, 88], gender: "female" },
    { name: "Batsaikhan", age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: "Ariunaa", age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
    {
      name: "Zoljargal",
      age: 17,
      grades: [55, 65, 75, 85, 95],
      gender: "female",
    },
    { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: "Uchral", age: 21, grades: [85, 90, 95, 88, 80], gender: "female" },
    { name: "Amaraa", age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
    { name: "Odnoo", age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
    { name: "Erdenee", age: 17, grades: [45, 55, 65, 75, 85], gender: "male" },
    { name: "Sukhbat", age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
    { name: "Gantulga", age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
    { name: "Tsolmon", age: 29, grades: [80, 85, 90, 95, 88], gender: "female" },
    { name: "Khuslen", age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
    { name: "Bayar", age: 17, grades: [60, 70, 80, 90, 95], gender: "male" },
];

// let nasandhursen = students.filter((a) => {
//     return a.age > 18;
// })
// console.log(nasandhursen);



let nasandhursen = students.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else {
        return -1;
    }
})
console.log(nasandhursen);


// function findOneStudentAverageGrade(oneStudent) {
//     //[40, 50, 60, 70, 80]
//     let grades = oneStudent.grades;
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//       sum = sum + grades[i];
//     }
//     let average = sum / grades.length;
//     return average;
// }

// let studentsAverage = students.map((s) => {
//     return findOneStudentAverageGrade(s);
// })
// let nasandhursen = studentsAverage.sort((a, b) => {
//     return a-b;
// })
console.log(nasandhursen);
// console.log(studentsAverage)
  