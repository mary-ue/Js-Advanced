'use strict';

/*
  Напишите функцию, которая принимает 3 параметра:
  - сумма, 
  - валюта исходная, 
  - валюта для конвертации.
  И возвращает строку уже сконвертированной суммы с постфиксом валюты. Если не получается, то null.
*/

function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1/60 },
    { name: 'EUR', mult: 1.1 },
  ];

  const initial = allCurrencies.find(c => c.name === initialCurrency);
  if(!initial) {
    return null;
  }
  const convert = allCurrencies.find(c => c.name === convertCurrency);
  if(!convert) {
    return null;
  }
  return new Intl 
    .NumberFormat('ru-RU', { style: 'currency', currency: convert.name})
    .format(sum * initial.mult / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD'));
console.log(convert(10000, 'JP', 'USD'));




