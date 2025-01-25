/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
let str = "doubleEachCharacter";

function doubleEachCharacter(st) {
    let intermediateValue ="";
    let finalValue ="";
    for( let i = 0; i < st.length; i++ ){
        intermediateValue = st[i]+ st[i];
        finalValue += intermediateValue;
    }
    return finalValue;
}


doubleEachCharacter(str);
console.log(doubleEachCharacter(str));