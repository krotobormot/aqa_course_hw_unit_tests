/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;
let age;
// age = '666';
// age = 'jj';
// age = 10;
// age = 17;
// age = 18;
// age = 19;
// age = 59;
// age = 60;
// age = 61;
if (typeof +age !== 'number' || Number.isNaN(+age)) {
  console.log('Incorrect data type');
} else if (age < minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then ");
} else if (age >= minAge && age < maxAge) {
  console.log('Welcome  !');
} else if (age > maxAge) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}
