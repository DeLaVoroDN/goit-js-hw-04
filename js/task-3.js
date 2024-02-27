'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

const profile = {
  // Объект "profile" содержит информацию о пользователе и методы для ее изменения и получения

  username: 'Jacob', // Свойство "username" хранит имя пользователя
  playTime: 300, // Свойство "playTime" хранит количество часов игры

  changeUsername(newName) {
    // Метод "changeUsername" позволяет изменить имя пользователя
    this.username = newName; // Присваиваем новое имя свойству "username"
  },

  updatePlayTime(hours) {
    // Метод "updatePlayTime" позволяет обновить количество часов игры
    this.playTime += hours; // Увеличиваем количество часов игры на указанное количество
  },

  getInfo() {
    // Метод "getInfo" возвращает информацию о пользователе
    return `${this.username} has ${this.playTime} active hours!`; // Возвращаем строку с информацией о пользователе
  },
};

// Выводим информацию о пользователе, используя метод "getInfo"
console.log(profile.getInfo());

// Изменяем имя пользователя на "Marco"
profile.changeUsername('Marco');
// Выводим обновленную информацию о пользователе
console.log(profile.getInfo());

// Обновляем количество часов игры на 20
profile.updatePlayTime(20);
// Выводим обновленную информацию о пользователе
console.log(profile.getInfo());
