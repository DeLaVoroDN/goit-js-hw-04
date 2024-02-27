function isEnoughCapacity(products, containerSize) {
  // Функция для проверки, достаточно ли места в контейнере для всех продуктов

  let values = Object.values(products); // Получаем массив значений продуктов из объекта
  let total = 0; // Инициализируем переменную для подсчета общего количества продуктов

  // Проходимся по каждому значению продукта и суммируем их
  for (let product of values) {
    total += product;
  }

  // Проверяем, если общее количество продуктов не превышает размер контейнера
  if (total <= containerSize) {
    return true; // Если да, возвращаем true
  }
  return false; // Иначе возвращаем false
}

// Вывод результатов вызова функции для нескольких различных наборов продуктов и размеров контейнеров
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // Выведет результат для первого набора
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // Выведет результат для второго набора
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // Выведет результат для третьего набора
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // Выведет результат для четвертого набора
