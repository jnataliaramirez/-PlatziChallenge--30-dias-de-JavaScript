// File taks.js
const doTask1 = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1");
    }, 300);
  });

const doTask2 = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 300);
  });

const doTask3 = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3");
    }, 300);
  });

// File exercise.js
const runCode = async () => {
  try {
    const task1 = await doTask1();
    const task2 = await doTask2();
    const task3 = await doTask3();

    return await Promise.all([task1, task2, task3]);

  } catch (error) {
    console.log(error);
  }
};
