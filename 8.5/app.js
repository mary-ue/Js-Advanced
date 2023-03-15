'use strict';

/* 
  Реализовать класс пользователя, со свойствами 
  - логин 
  - пароль 
  Причем пароль при установке должен переворачиваться и в таком виде храниться. 
  Пароль и логин после создания изменить нельзя. 
  Также у класса добавить методы:
  - Смены пароля (передаем старый и новый пароль)
  - Сверки пароля
*/

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if(!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User('login', 'password');
console.log(user);
console.log(user.login);
// user.login = 'abc'
console.log(user.checkPassword('password'));
console.log(user.changePassword('password', '1234'));
console.log(user)
