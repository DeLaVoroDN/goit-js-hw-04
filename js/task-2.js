'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function calcAverageCalories(days) {
  // Функция для вычисления среднего количества калорий за неделю

  let totalCalories = 0; // Переменная для хранения общего количества калорий
  const examinationDay = days.length; // Количество дней, за которые были проведены измерения

  if (examinationDay === 0) {
    // Проверяем, если дней для анализа нет
    return 0; // Если да, возвращаем 0
  }

  for (const day of days) {
    // Итерируемся по каждому дню из массива
    totalCalories += day.calories; // Прибавляем количество калорий за текущий день к общей сумме
  }

  return totalCalories / examinationDay; // Возвращаем среднее количество калорий за день
}

// Вывод результатов вызова функции для двух различных наборов данных
console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // Выведет среднее количество калорий для первого набора данных

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // Выведет среднее количество калорий для второго набора данных

console.log(calcAverageCalories([])); // Выведет 0, так как нет данных для анализа
