const getAverage = (values, length) => {
  const sum = values.reduce((a, b) => a + b);
  const avg = (sum / length).toFixed(2);

  return parseFloat(avg);
};

const getStudentAverage = (students) => {
  const solutionAverage = {};
  const notesStudents = [];
  const totalStudents = students.length;

  const studentsAverage = students.map((element) => {
    const studentAverage = getAverage(element.grades, element.grades.length);

    return {
      name: element.name,
      average: studentAverage,
    };
  });

  studentsAverage.map((element) => notesStudents.push(element.average));

  const classAverageSolution = getAverage(notesStudents, totalStudents);

  solutionAverage["classAverage"] = classAverageSolution;
  solutionAverage["students"] = studentsAverage;

  return solutionAverage;
};
