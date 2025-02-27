/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let arr = sentence.split(' ');
  let longerWord = '';
  for (let word of arr) {
    if (word.length > longerWord.length) {
      longerWord = word;
    }
  }
  return longerWord;
}

export { isPalindrom, findLongestWords };
