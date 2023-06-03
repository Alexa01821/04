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

// let total = 0;
// let number = prompt("Введіть число");

// while (number !== null) {
//     total += Number(number);
//     number = prompt("Введіть ще одне число");
// }

// alert(`Загальна сума введених чисел дорівнює ${total}`);

//TASK 05

/**
*? За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
*? Напишіть консольну функцію, на яку користувач вводить суму зп
*? і кількість місяців за допомогою prompt() не забуваємо, що prompt повертає рядок.
*? Для обчислення суми з урахуванням відсотків використовуйте цикл for.
 */

// const mounth = Number(prompt("Введіть кількість місяців"));
// const salary = Number(prompt("Введіть свою зп"));
// let total = 0;

// for (let i = 1; i <= mounth; i += 1) {
//     total += salary * 0.95;
// }

// console.log(total);



//TASK 06

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys){
//     console.log(`${key}: ${user[key]}`)
// }


// TASK 07

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//     worker1: 360,
//     worker2: 750,
//     worker3: 240,
//   };

//   function calcSalary(money) {
//     let totalSalary = 0;
//     for (const value of Object.values(money)) {
//         totalSalary += value;
//     }
//     return totalSalary;
//   }

//   calcSalary(someObj)
//   console.log(calcSalary(someObj))

// TASK 08

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stonesName) {
  
//   for (const { name, price, quantity } of someStones) {
//     if (name === stonesName) {
//      return price * quantity;
//     }
//   }
  
//  return "Нічого не знайдено"
// }

// console.log(calcTotalPrice(stones, "Щебень"));

// TASK 09
/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та ім'я ключа,
 *? який треба видалити.
 *? повертає новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1, c: 3}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };
// function updateObject(object, name) {
//  delete object[name]; 
//   return object;
// }
// console.log(updateObject(obj, 'c'));

// TASK 10
// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// const newArr = arr.slice(0);
// newArr.splice( newArr.indexOf("foo"), 1);
// const string = newArr.reverse().join(" ");
// console.log(string);


// const arr = ["best", "the", "foo", "is", "js"];

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// console.log(string);



// TASK 10
///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];