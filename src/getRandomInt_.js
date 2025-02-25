/*
 Створіть функцію `getRandomInt_`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).

 Використовуйте `Math.random()` для генерації випадкового числа від 0 до 1, а потім масштабуйте та зсувайте це число, щоб воно відповідало вашому діапазону. Використовуйте `Math.floor()` для округлення результату вниз до найближчого цілого числа.

 Після створення функції, використайте її для генерації випадкових чисел в різних діапазонах. Наприклад, виведіть випадкове число від 1 до 10, від 40 до 50, та від 1 до 100. Кожне викликане число повинно бути виведено в консоль.

 Ось приклад використання цієї функції:

 console.log(getRandomInt_(1, 10)); // виводить випадкове число від 1 до 10
 console.log(getRandomInt_(40, 50)); // виводить випадкове число від 40 до 50
 console.log(getRandomInt_(1, 100)); // виводить випадкове число від 1 до 100

 Зверніть увагу, що кожен виклик `getRandomInt_` може повертати різні числа, оскільки вони випадкові. Завдання полягає в написанні цієї функції та її використанні для генерації випадкових чисел.
*/

// function getRandomInt_(min, max) {
//
//   return Math.floor(Math.random(min, max))                   //не правильно
// }

// console.log(getRandomInt_(1, 3))

function getRandomInt_(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Ця функція getRandomInt генерує випадкове ціле число в заданому діапазоні, включно з обома крайніми значеннями min та max. Ось крок за кроком, як це працює:
//
//   1. Math.random():
// - В JavaScript Math.random() генерує випадкове число в діапазоні від 0 (включно) до 1 (виключно), тобто 0 ≤ n < 1.
// - Це число не є цілим; воно може мати дробову частину.
//
// 2. *(max - min + 1):
// - Спочатку обчислюється різниця між max і min, а потім додається 1. Це забезпечує, що і min, і max можуть бути вибрані. Наприклад, якщо min = 1 і max = 3, то max - min + 1 = 3. Це означає, що можливі результати множення будуть в діапазоні від 0 до 3, але не включно з 3.
// - Потім випадкове число, згенероване Math.random(), множиться на цей результат. Таким чином, максимальне значення, яке можна отримати до округлення, буде трохи менше max + 1.
//
// 3. Math.floor(...):
// - Math.floor() округлює число до найближчого меншого або рівного цілого числа. Коли ми застосовуємо Math.floor() до результату попереднього кроку, отримуємо ціле число в діапазоні від 0 до max - min, включно.
//
// 4. + min:
// - До округленого числа додається min. Це зсуває діапазон від [0, max - min] до [min, max]. Таким чином, якщо min = 1 і max = 3, можливі результати будуть 1, 2, або 3.
//
// Приклад використання функції:
//
//   JavaScript
//
// let randomInt = getRandomInt(1, 3);
// console.log(randomInt); // Виведе випадкове число між 1 та 3, включно
// Ця функція корисна, коли потрібно отримати випадкове ціле число в певному діапазоні, наприклад, для вибору випадкового елемента з масиву або для ігор, де потрібне випадкове число.

/*
 Використовуйте `Math.floor`, а не `Math.round` для забезпечення рівномірного розподілення випадкових чисел.

 Якщо ви використовуєте `Math.round`, крайні значення (`min` та `max`) матимуть лише половину ймовірності з'явлення, порівняно з іншими числами. Це відбувається тому, що `Math.random()` ніколи не повертає 1, і тому максимальне значення з'являється лише тоді, коли `Math.random()` повертає значення, яке, будучи округленим, дорівнює `max`. Аналогічно, `min` з'являється лише тоді, коли `Math.random()` повертає 0.

 Тому використовуйте `Math.floor` для забезпечення рівномірного розподілення. Це гарантує, що кожне число в діапазоні має однакову ймовірність з'явлення.
*/

export { getRandomInt_ }
