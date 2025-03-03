/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(phrase) {
  let phrase1 = "";
  for (let i = 0; i < phrase.length; i++) {
    if (i === 0) {
      phrase1 = phrase1 + phrase[i].toUpperCase();
    } else if (phrase[i - 1] === " ") {
      phrase1 = phrase1 + phrase[i].toUpperCase();
    } else {
      phrase1 = phrase1 + phrase[i];
    }
  }
  return phrase1;
}

console.log(capitalizeWords("hello world from javascript"));
