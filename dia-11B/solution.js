// File taks.js
const doTask1 = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve("Task 1");
    }, 300);
  });

const doTask2 = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve("Task 2");
    }, 300);
  });

const doTask3 = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve("Task 3");
    }, 300);
  });

// File exercise.js
const runCode = () => {
  const strings = [];

  return doTask1()
    .then((task1) => {
      strings.push(task1);
      return doTask2();
    })
    .then((task2) => {
      strings.push(task2);
      return doTask3();
    })
    .then((task3) => {
      strings.push(task3);
      return strings;
    })
    .catch((error) => {
      console.error(error);
    });
};
