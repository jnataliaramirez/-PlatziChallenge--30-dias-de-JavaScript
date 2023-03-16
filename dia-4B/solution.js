const getStudentAverage = (students) => {
  const solutionAverage = {};
  const arrayAverage = [];

  const studentsAverage = students.map((element) => {
    const sum = element.grades.reduce((a, b) => a + b);
    let avg = (sum / element.grades.length).toFixed(2);
    let stringToNumber = parseFloat(avg);

    return {
      name: element.name,
      average: stringToNumber,
    };
  });

  const totalStudents = studentsAverage.length;

  studentsAverage.map((element) => arrayAverage.push(element.average));

  const sumAverageStudents = arrayAverage.reduce((a, b) => a + b);

  const classAverage1 = (sumAverageStudents / totalStudents).toFixed(2);

  const stringToNumber = parseFloat(classAverage1);

  solutionAverage["classAverage"] = stringToNumber;

  solutionAverage["students"] = studentsAverage;

  return solutionAverage;
};

const arrayStudents = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];

const print = getStudentAverage(arrayStudents);
console.log(print);
