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
// version 1
// /* функція яка рахує задану знижку */
// function discount(params) {
//   for (const fruit of fruits) {
//     console.log(fruit.price);
//     fruit.price = fruit.price * params;
//   }
//   return fruits;
// }
// console.log(discount(0.8));
// /* додавання ід для масиву об'єктів */
// for (let i = 0; i < fruits.length; i += 1) {
//   fruits[i].identify = i + 1;
// }
// console.log(fruits);

// version 2
// fruits.forEach((fruit, index) => fruit.id = index + 1);

// const fruitsOnSale = fruits.map(({ price }) => price * 0.8);

// console.log(fruits);
// console.log(fruitsOnSale);

// version 3
// const discountFruits = fruits.map((fruit) => {
//   return {
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: Date.now(),
//   };
// })
// console.log(discountFruits);

// TASK 11
// /**
//  *? З об'єкту concerts потрібно отримати масив
//  *? в якому будуть лише імена міст.
//  *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
//  *? відсортувати їх у хронологічному порядку.
//  *? Результат вивести у консоль.
//  *? Очікуваний результат ["Умань", "Харків", "Одеса"]
//  */
// const concerts = {
//   Київ: new Date("2023-07-01"),
//   Умань: new Date("2023-07-02"),
//   Вінниця: new Date("2024-04-21"),
//   Одеса: new Date("2023-07-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-07-10"),
// };

// const sortConcerts = (obj) => {
//   // const keys = Object.keys(obj);
//   // const concertsFilter = keys.filter(key => obj[key] > new Date());
//   // const concertsDateSort = concertsFilter.sort((firstDate, secoundDate) => obj[firstDate] - obj[secoundDate]);
//   // return concertsDateSort;

//   return Object.keys(obj)
//     .filter((key) => obj[key] > new Date())
//     .sort(
//       (firstDate, secoundDate) =>
//         obj[firstDate] - obj[secoundDate]
//     );
// };

// console.log(sortConcerts(concerts));

/* task12 */
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalTags = (param) => {
//   return param
//     .flatMap((element) => element.tags)
//     .reduce((acc, elem) => {
//       return {
//         ...acc,
//         [elem]: acc[elem] ? acc[elem] + 1 : 1,
//       };
//     }, {});
// };

// console.log(totalTags(tweets));

//TASK 13

//TODO:=============================================
/**
 *? Напиши функцію конструктор Storage який створює об'єкти
 *? Для управління складом товарів.
 *? При виклику отримуватиме один агрумент - початковий масив товарів,
 *? і записувати їх у властивість items.
 *? Додай методи класу:
 *? getItems() - повертайте масив товарів
 *? addItems(item) - отримує новий товар та додає його до поточних
 *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
 */

// const Storage = function (itemsArray) {
//   this.items = itemsArray;
// }
 
// Storage.prototype.getItems = function () {
//   return this.items;
// }

// Storage.prototype.addItems = function (item) {
//   this.items.push(item);
// }

// Storage.prototype.removeItem = function (item) {
// const indexElem = this.items.indexOf(item);
//   if (indexElem !== -1) {
//     this.items.splice(indexElem, 1);
// }
// }

// const storage = new Storage(["apple", "banana", "mango"]);

// storage.addItems("dsfjfa");
// storage.removeItem("mango");

// console.log(storage);

// task 14
//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
// static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }

// class Notes {
//   static priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }
//   constructor() {
//     this.items = [];
//   }
//   findIdx(text) {
//     return this.items.findIndex(item => item.text === text); 
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//    const textIdx = this.findIdx(text);
//     if (textIdx !== -1) {
//       this.items.splice(textIdx, 1);
//     }
//   } 
//   updatePriority(text, newPriority) {
//     const textIdx = this.findIdx(text);
//     if (textIdx !== -1) {
//       this.items[textIdx].priority = newPriority;
//     }
//   }
// }

// const newNotes = new Notes();
// newNotes.addNote({ text: "first note", priority: Notes.priority().LOW });
// // newNotes.removeNote("first note");
// newNotes.updatePriority("first note", "hight");

// console.log(newNotes);