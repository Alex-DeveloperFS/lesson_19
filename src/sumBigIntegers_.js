/*
 Створіть функцію sumBigIntegers_, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers_('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers_(numStr1, numStr2) {
  // 'your code here'

  return BigInt(numStr1) + BigInt(numStr2)
}

console.log(sumBigIntegers_('9007199254740991', '9007199254740991'));
export { sumBigIntegers_ }
