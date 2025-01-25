/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let array1 = [1, 2, 3];
let array2 = [2, 3, 4];


function findCommonElements(ar1, ar2) {
    let sharedArray =[];
    
    for( let i = 0; i < ar1.length; i++){
        for( let j = 0; j < ar2.length; j++){
            if( ar1[i] === ar2[j]){
                sharedArray.push(ar1[i]);
            }
            
        }
        
    }
    return sharedArray;
}

findCommonElements(array1, array2);

console.log(findCommonElements(array1, array2));