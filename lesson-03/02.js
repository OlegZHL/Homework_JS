// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let a = 200;
let evenValue = false;

function isEven(a) {
  if (a % 2 === 0) {
    evenValue = true;
    return evenValue;
  } else {
    evenValue = false;
    return evenValue;
  }
}

isEven(a);
console.log(evenValue);
