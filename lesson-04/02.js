/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let array =[1, 2, 3, 2, 1, 4];

function findUniqueElements(array){
    let newArray =[];
        for( let i = 0; i < array.length; i++ ){
            // if(!newArray.includes(array[i])){  // если элемент не включен в новый массив, то мы его добавляем.
            //     newArray.push(array[i]);
            // }
            if(!includesElement(newArray, array[i])){
                newArray.push(array[i]);
            }
        }

    return newArray;
}


findUniqueElements(array);
console.log(findUniqueElements(array));

function includesElement(arr,el) {

    for ( let i = 0; i < arr.length; i++ ){
       if( arr[i] === el){
         return true;
       } 
    } 
    return false;
}
