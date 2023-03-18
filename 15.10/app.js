'use strict';

/* 
  Динамически создать N элементов с текстом и поле для поиска. 
  При вводе в поле, выделять элементы, которые содержат введенный текст.  
*/

const wrapper = document.querySelector('.wrapper');
for(let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.innerHTML = i;
  wrapper.append(el);
}

function search(event) {
  const inputValue = event.target.value;
  for(const el of [...wrapper.children]) {
    if(el.innerHTML.includes(inputValue)) {
      el.classList.add('blue');
      continue;
    }
    el.classList.remove('blue');
  }
}

