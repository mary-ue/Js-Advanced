'use strict';

/* 
  Сделать запрос на https://dummyjson.com/products/categories
  Получить список категорий и отобразить <select> выбора категорий. 
*/

function createSelect(array) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
    ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
  </select>`
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
  .then(responce => responce.json())
  .then(data => createSelect(data))
  .catch(error => console.log(`Ошибка: ${error}`))
}

getCategories();
