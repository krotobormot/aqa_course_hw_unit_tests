/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  return arr.flat();
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const words = sentence.trim().split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;

    let word = words[i].toLowerCase();

    if (i > 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    result.push(word);
  }

  return result.join('_');
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

export { mergeArrays, fibonacci, devideBy };
