/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 49.5 // тестовое значение, можно изменять
let grade;
// your code
if(Math.round(score) >= 0 && Math.round(score) <= 49){
    grade ="Оценка: F.";
} else if (Math.round(score) >= 50 && Math.round(score) <= 69) {
    grade ="Оценка: D.";
} else if (Math.round(score) >= 70 && Math.round(score) <= 79) {
    grade ="Оценка: C.";
} else if (Math.round(score) >= 80 && Math.round(score) <= 89) {
    grade ="Оценка: B.";
} else if (Math.round(score) >= 90 && Math.round(score) <= 100) {
    grade ="Оценка: A.";
} else { 
    grade ="Некорректное значение.";
}
console.log(grade);