// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let a = 2;
let b = 67;
let c = 81;

let theLargestNumber;

function findLargest(a, b, c) {
  if (a > b && a > c) {
    theLargestNumber = a;
    return theLargestNumber;
  } else if (b > a && b > c) {
    theLargestNumber = b;
    return theLargestNumber;
  } else {
    theLargestNumber = c;
    return theLargestNumber;
  }
}

findLargest(a, b, c);

console.log(theLargestNumber);
