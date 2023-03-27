"use strict";

function myMap(array, func) {
  let solution = [];

  array.forEach((element) => {
    solution.push(func(element));
  });

  return solution;
}
