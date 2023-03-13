'use strict';

/* 
  Сделать таймер пиццы (функция, принимающая время),
  который будет выводить в консоль секунды, 
  оставшиеся до готовности пиццы и сообщение по готовности 
*/

function pizzaTimer (ms) {
  const end = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        minute: 'numeric',
        second: 'numeric',
      }).format(end + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log('🍕!!!')
  }, ms)
}

pizzaTimer(5000);
