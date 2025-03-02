/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord === lowerCaseWord.split('').reverse().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];
  if (sentence.trim() === '') return [];

  let words = sentence.trim().split(' ');
  words = words.filter((word) => word !== '');

  let maxLength = 0;
  let longestWords = [];

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];
    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  }
  return longestWords;
}

export { isPalindrom, findLongestWords };
