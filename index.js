/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const message = "ECMAScript";
const anser = prompt("Яка офіційна назва JavaScript?");

if (message === anser) {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
