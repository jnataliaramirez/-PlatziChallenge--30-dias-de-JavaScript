"use strict";

function createTaskPlanner() {
  let listTask = [];

  const addTask = (task) => {
    task.completed = false;
    listTask.push(task);
  };

  const removeTask = (value) => {
    let indexTask = listTask.findIndex(
      (task) => task.id === value || task.name === value
    );
    if (indexTask !== -1) {
      listTask.splice(indexTask, 1);
    }
  };

  const getTasks = () => {
    return listTask;
  };

  const getPendingTasks = () => {
    return listTask.filter((task) => !task.completed);
  };

  const getCompletedTasks = () => {
    return listTask.filter((task) => task.completed);
  };

  const markTaskAsCompleted = (value) => {
    const task = listTask.find(
      (task) => task.id === value || task.name === value
    );
    if (task) {
      task.completed = true;
    }
  };

  const getSortedTasksByPriority = () => {
    const sortedTasks = [...listTask];
    sortedTasks.sort((a, b) => a.priority - b.priority);
    return sortedTasks;
  };

  const filterTasksByTag = (tag) => {
    return listTask.filter((task) => task.tags.includes(tag));
  };

  const updateTask = (taskId, updates) => {
    const task = listTask.find((task) => task.id === taskId);
    if (task) {
      Object.assign(task, updates);
    }
  };

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  };
}