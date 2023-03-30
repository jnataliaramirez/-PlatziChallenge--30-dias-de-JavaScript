"use strict";

function createTaskPlanner() {
  // Tu código aquí 👈
  let listTask = [];

  const addTask = (task) => {
    return listTask.push({
      id: task.id,
      name: task.name,
      priority: task.priority,
      tags: task.tags,
      completed: task.completed || false,
    });
  };

  const removeTask = (value) => {
    let indexTask;
    if (typeof value === "string") {
      indexTask = listTask.findIndex((task) => task.name === value);
      listTask.splice(indexTask, 1);
    } else {
      indexTask = listTask.findIndex((task) => task.id === value);
      listTask.splice(indexTask, 1);
    }
  };

  const getTask = () => listTask;

  const getPendingTasks = () => {
    let pendingTasks = [];
    listTask.forEach((element) => {
      if (element.completed) {
        pendingTasks.push(element);
      }
    });
    return pendingTasks;
  };

  const getCompletedTasks = () => {
    let pendingTasks = [];
    listTask.forEach((element) => {
      if (!element.completed) {
        pendingTasks.push(element);
      }
    });
    return pendingTasks;
  };

  const markTaskAsCompleted = (value) => {
    let indexTask;
    if (typeof value === "string") {
      indexTask = listTask.findIndex((task) => task.name === value);
      listTask[indexTask].completed = true;
    } else {
      indexTask = listTask.findIndex((task) => task.id === value);
      listTask[indexTask].completed = true;
    }
  };


  return {
    addTask,
    removeTask,
    getTask,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche1",
  priority: 1,
  tags: "shopping",
});
planner.addTask({
  id: 2,
  name: "Comprar leche",
  priority: 1,
  tags: "shopping",
  completed: true,
});
planner.addTask({
  id: 3,
  name: "Comprar leche2",
  priority: 1,
  tags: "shopping",
});
planner.addTask({
  id: 4,
  name: "Comprar leche3",
  priority: 1,
  tags: "shopping",
});
planner.markTaskAsCompleted("Comprar leche3");

console.log(planner.getTask());
