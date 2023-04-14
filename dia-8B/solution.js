"use strict";

function myMap(array, callback) {
  let solution = [];

  array.forEach((element) => {
    solution.push(callback(element));
  });

  return solution;
}
