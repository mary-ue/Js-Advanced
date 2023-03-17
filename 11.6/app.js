'use strict';

/* 
  Получить среднюю цены 30 товаров из API 
  https://dummyjson.com/products/
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/');
request.send();

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.products)
  let sum = data.products.reduce((acc, product) => {
    return acc += product.price;
  }, 0);
  let averagePrice = sum / data.products.length;
  console.log(averagePrice)
})
