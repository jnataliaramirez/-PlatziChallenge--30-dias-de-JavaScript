"use strict";

function createCalculator() {
  let total = 0;

  const add = (value) => (total += value);
  const subtract = (value) => (total -= value);
  const multiply = (value) => (total *= value);
  const divide = (value) => (total /= value);
  const clear = () => (total = 0);
  const getTotal = () => total;

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal,
  };
}
