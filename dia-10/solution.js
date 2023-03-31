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

  const getSortedTasksByPriority = () => {
    return listTask.sort((a, b) => (a.priority > b.priority ? -1 : 1));
  };

  const filterTasksByTag = (tag) => {
    let filter = [];
    listTask.forEach((element) => {
      element.tags.forEach((item) => {
        if (item === tag) {
          filter.push(element);
        }
      });
    });
    return filter;
  };

  const updateTask = (taskId, updates) => {
    let indexTask = listTask.findIndex((task) => task.id === taskId);
    return (listTask[indexTask] = {
      id: taskId,
      name: updates.name,
      priority: updates.priority,
      tags: updates.tags,
      completed: updates.completed || false,
    });
  };

  return {
    addTask,
    removeTask,
    getTask,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche1",
  priority: 2,
  tags: ["shopping", "home"],
});

planner.updateTask(1, {
  id: 1,
  name: "nati",
  priority: 1,
  tags: ["nati", "nata"],
});

console.log(planner.getTask());
