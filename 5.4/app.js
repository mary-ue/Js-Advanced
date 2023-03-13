'use strict';

/* 
  Создать функцию, которая принимает пользователя и проветяет, есть ли у него сегодня день рождения или нет
*/

const user = {
  name: 'Vasia',
  birthday: '03/13/2023'
};

function isBirthday(user) {
  const birthdayDate = new Date(user.birthday);
  const now = new Date();
  if(birthdayDate.getMonth() !== now.getMonth()) {
    return false;
  }
  if(birthdayDate.getDate() !== now.getDate()) {
    return false;
  }
  return true;
}

console.log(isBirthday(user));
