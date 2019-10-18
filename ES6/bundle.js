"use strict";

var arr = [1, 3, 4, 5, 8, 10]; // Map percorre cada item do veto e executa a função

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // pega o vetor e reduz para um valor natural

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // ele filtra de acordo com a função

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // find para encontrar dentro do array

var find = arr.find(function (item) {
  return item === 2;
});
