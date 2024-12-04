let students = [
  {
    name: "boldo",
    age: 15,
    grades: [40, 30, 10, 40, 100],
    gender: "male",
  },
  {
    name: "zulaa",
    age: 18,
    grades: [15, 65, 80, 30, 20],
    gender: "female",
  },
  {
    name: "sarnai",
    age: 17,
    grades: [100, 100, 98, 100, 100],
    gender: "female",
  },
  {
    name: "bilguun",
    age: 18,
    grades: [80, 90, 93, 92, 100],
    gender: "male",
  },
  {
    name: "orgil",
    age: 19,
    grades: [93, 100, 70, 90, 80],
    gender: "male",
  },
  {
    name: "temuulen",
    age: 20,
    grades: [90, 93, 94, 30, 100],
    gender: "male",
  },
  {
    name: "zaya",
    age: 30,
    grades: [60, 60, 60, 60, 60],
    gender: "female",
  },
  {
    name: "huslen",
    age: 19,
    grades: [100, 80, 98, 94, 64],
    gender: "female",
  },
  {
    name: "anguuch",
    age: 18,
    grades: [100, 100, 80, 92, 93],
    gender: "male",
  },
  {
    name: "god",
    age: 19,
    grades: [80, 40, 93, 92, 82],
    gender: "male",
  },
  {
    name: "javhlan",
    age: 20,
    grades: [100, 101, 80, 100, 100],
    gender: "male",
  },
  {
    name: "gerel",
    age: 24,
    grades: [20, 20, 20, 20, 20],
    gender: "female",
  },
  {
    name: "tuya",
    age: 16,
    grades: [0, 0, 0, 0, 0],
    gender: "female",
  },
  {
    name: "tomoroo",
    age: 30,    
    grades: [93, 92, 94, 95, 96],
    gender: "male",
  },
  {
    name: "enhbaatar",
    age: 23,
    grades: [100, 100, 100, 100, 100],
    gender: "male",
  },
  {
    name: "ganaa",
    age: 25,
    grades: [80, 80, 80, 80, 80],
    gender: "male",
  },
  {
    name: "anu",
    age: 24,
    grades: [70, 70, 70, 70, 70],
    gender: "female",
  },
];
function onestudentaverage(input) {
  let grades = input.grades;
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  let sum1 = sum / grades.length - 1;
}
let student = onestudentaverage(students[1]);
console.log(student);
