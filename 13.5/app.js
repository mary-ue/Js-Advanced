'use strict';

/*
  Сделать функцию fetch, которая выполняет внутри XMLHttpRequest
*/

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function() {
      if (this.status > 400) {
        reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    request.addEventListener('error', function() {
      reject(new Error(this.status));
    });

    request.addEventListener('timeout', function() {
      reject(new Error('Timeout'));
    });
  })
}

myFetch('https://dummyjson.com/products')
  .then(data => console.log(data))
  .catch(err => console.err(err))

