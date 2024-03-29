console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
var i = 5
console.log(i)
console.log(++i)
console.log(--i)

console.log(i)
console.log(i++)
console.log(i)
console.log(i--)



/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// +=
// –=
// *=
// /=
// %=
// var myNum = 10
// var myTest = 20
//
// console.log(myNum += myTest)
// console.log(myNum -= myTest)
// console.log(myNum *= myTest)
// console.log(myNum /= myTest)
// console.log(myNum %= myTest)

var myNum = 10
var myTest = 20

myTest += myNum
console.log(myTest)

myTest -= myNum
console.log(myTest)

myTest *= myNum
console.log(myTest)

myTest /= myNum
console.log(myTest)

myTest %= myNum
console.log(myTest)


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow


var myPi= Math.PI
console.log(myPi)

var myRound= Math.round(89.279)
console.log(myRound)

var myRandom= Math.random() * 10
console.log(myRandom)

var myPow= Math.pow(3, 5)
console.log(myPow)

/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
var strObj = { str: 'Мама мыла раму, рама мыла маму' }

strObj.length = strObj.str.length
console.log('strObj = ', strObj)

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama



var isRamaPos = strObj.str.indexOf('рама')
console.log(isRamaPos);
var isRama = strObj.str.includes('рама')

console.log(isRama);




console.log(string.indexOf('not'));

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */


// strReplace

var strReplace = strObj.str.replace('мыла', 'моет')

strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мыла', 'держит')
console.log(strReplace)
/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
var someStr = 'some STRING'
console.log(someStr)
var upperStr = someStr.toUpperCase()
console.log(upperStr)
var lowerStr = someStr.toLowerCase()
console.log(lowerStr)

