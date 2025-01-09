/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

let sum = 0;
let fullNumber = 20;
let oneNumber = 1;

while(oneNumber<=fullNumber){

if(oneNumber%2 != 0){
   sum = sum + oneNumber};

oneNumber++;
};
console.log("Сумма нечётных чисел: " + sum);