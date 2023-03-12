'use strict';
/* Поменять местами ключи и значения в следующем Map */

let weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);

// for (let [key, value] of weatherMap) {
//   console.log([key, value] = [value, key]);
// }

weatherMap = new Map([...weatherMap].map(el => el.reverse()));

console.log(weatherMap)
