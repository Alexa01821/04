/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const message = "ECMAScript";
// const anser = prompt("Яка офіційна назва JavaScript?");

// if (message === anser) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }


//Task 2
/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */

// const time = prompt();
// const minutes = String(time % 60).padStart(2, '0');
// const hours = String(Math.floor(time / 60)).padStart(2, '0');
// console.log(`${hours}:${minutes}`);


/**
 *? Напишіть цикл, який виводить у консоль
 *? числа max від до min за спаданням
 *? Виведіть у консоль усіх парних чисел від min до max
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i)
// }

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {console.log(i)}
// }

// Task 04
/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

let total = 0;
let number = prompt("Введіть число");

while (number !== null) {
    total += Number(number);
    number = prompt("Введіть ще одне число");
}

alert(`Загальна сума введених чисел дорівнює ${total}`);

