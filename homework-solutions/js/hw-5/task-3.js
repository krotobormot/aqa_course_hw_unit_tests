/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'AEIOUaeiou';
const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
let countVowels = 0;
let countConsonants = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    countVowels += 1;
  } else if (consonants.includes(word[i])) {
    countConsonants += 1;
  } else {
    continue;
  }
}
let vowelsAndConsonantsResult = `${word} contains ${countVowels} vowels and ${countConsonants} consonants`;

export { vowelsAndConsonantsResult };
