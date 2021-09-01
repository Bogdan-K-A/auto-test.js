/* ----------------------------------- 2-01 ----------------------------------- */
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult'
//   }
//   return 'You are a minor'
// }
// console.log(checkAge(20))
/* ----------------------------------- 2-02 ----------------------------------- */
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!'
//   }
//   return 'Access denied, wrong password!'
// }
// console.log(checkPassword('mangohackzor'))
/* ----------------------------------- 2-03 ----------------------------------- */
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!'
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!'
//   }
//   return 'The order is accepted, our manager will contact you'
// }
// console.log(checkStorage(100, 50))
/* ----------------------------------- 2-05 ----------------------------------- */
// const fruits = ['apple', 'plum', 'pear', 'orange']

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[3]
/* ----------------------------------- 2-06 ----------------------------------- */
// Переопределение индекса
// const fruits = ['apple', 'plum', 'pear', 'orange']

// fruits[1] = 'peach'
// fruits[3] = 'banana'
/* ----------------------------------- 2-07 ----------------------------------- */
// Определение длинны
// const fruits = ['apple', 'peach', 'pear', 'banana']

// const fruitsArrayLength = fruits.length
/* ----------------------------------- 2-08 ----------------------------------- */
// Определение последнего элемента масива
// const fruits = ['apple', 'peach', 'pear', 'banana']

// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]
/* ----------------------------------- 2-09 ----------------------------------- */
// Выводит первый и последний элемент масива
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]]
// }
/* ----------------------------------- 2-10 ----------------------------------- */
// Метод split('') разделитель строки, который форматирует строку в масив
// function splitMessage(message, delimeter) {
//   let words

//   words = message.split(delimeter)

//   return words
// }
/* ----------------------------------- 2-11 ----------------------------------- */
// function calculateEngravingPrice(message, pricePerWord) {
//   let total = 0
//   const woreds = message.split(' ')
//   for (let i = 0; i <= woreds.length; i += 1) {
//     total = i * pricePerWord
//   }
//   return total
// }
/* ----------------------------------- 2-12 ----------------------------------- */
// Метод join('') обьединяет элемениы масива в строку
// function makeStringFromArray(array, delimeter) {
//   let string

//   string = array.join(delimeter)

//   return string
// }
/* ----------------------------------- 2-13 ----------------------------------- */
// Генератор slug
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-')
// }
/* ----------------------------------- 2-14 ----------------------------------- */
// slice(begin, end) Как полоска которая разширяется и сужается в зависимости от значений в аргументе
//nonExtremeEls -->     [1]-------------------[4] <-- показывает элементы которые подпадают под промежуток между указаными индексами
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana']

// const firstTwoEls = fruits.slice(0, 2)
// const nonExtremeEls = fruits.slice(1, 4)
// const lastThreeEls = fruits.slice(-3)
// console.log(nonExtremeEls)
/* ----------------------------------- 2-15 ----------------------------------- */
// concat() обьединяет два масива в один
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// const newClients = ['Peach', 'Houston']

// const allClients = oldClients.concat(newClients)
/* ----------------------------------- 2-16 ----------------------------------- */
// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength)
// }
/* ----------------------------------- 2-17----------------------------------- */
// const start = 3
// const end = 7

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i)
// }
/* ----------------------------------- 2-18 ----------------------------------- */
// function calculateTotal(number) {
//   let total = 0
//   for (let i = 1; i <= number; i += 1) {
//     total += i
//   }

//   return total
// }
/* ----------------------------------- 2-19 ----------------------------------- */
// Последовательно логирует все элементы масива
// const fruits = ['apple', 'plum', 'pear', 'orange']

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]
//   console.log(fruit)
// }
/* ----------------------------------- 2-20 ----------------------------------- */
// Возвращает сумму всех элементов масива
// function calculateTotalPrice(order) {
//   let total = 0

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i]
//   }

//   return total
// }
// ==========
/* ------------------------------ Через for__of 2-26----------------------------- */
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const elem of order) {
//     total += elem;
//   }

//   return total;
// }
// ===============
/* ----------------------------------- 2-21 ----------------------------------- */
// Выводит самое длинное слово
/* ----------------------------------- V1 ----------------------------------- */
// function findLongestWord(string) {
//   let newStr = string.split(' ')
//   let newStr1 = ' '

//   for (let i = 0; i < newStr.length; i += 1) {
//     if (newStr[i].length > newStr1.length) {
//       newStr1 = newStr[i]
//     }
//   }
//   return newStr1
// }
/* ----------------------------------- V2 ----------------------------------- */
//  for (const elem of arr) {
//     if (elem.length > longestWord.length) {
//       longestWord = elem;
//     }
//   }
//   return longestWord;
/* ----------------------------------- V3 ----------------------------------- */
// ======
//  const findLongestWord = (string) => {
//   let longestWord = string[0];

//   string.split(' ').forEach(elem => {
//     if (longestWord.length < elem.length) {
//       longestWord = elem;
//     }
//   })

//   return longestWord;
// }
// ======
// console.log(findLongestWord('Google do a roll'))
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
/* ----------------------------------- 2-22 ----------------------------------- */
// Возвращает масив целых чисел от и до
// function createArrayOfNumbers(min, max) {
//   const numbers = []

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   return numbers
// }
/* ----------------------------------- 2-23 ----------------------------------- */
// Возвращает новый масив чисел которые больше значения в параметре value
// function filterArray(numbers, value) {
//   const arr = []
//   for (const number of numbers) {
//     if (number > value) {
//       arr.push(number)
//     }
//   }
//   return arr
// }
/* ----------------------------------- 2-24 ----------------------------------- */
// includes() проверяет наличие значения в масиве, работает как поисковик "Гугл", возвращает true или false
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange']

//   return fruits.includes(fruit)
// }
/* ----------------------------------- 2-25 ----------------------------------- */
// function getCommonElements(array1, array2) {
//   const newArr = []
//   for (const elem of array1) {
//     if (array2.includes(elem)) {
//       newArr.push(elem)
//     }
//   }
//   return newArr
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
/* ----------------------------------- 2-27 ----------------------------------- */
// function filterArray(numbers, value) {
//   const filteredNumbers = []

//   for (const elem of numbers) {
//     const number = elem

//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }

//   return filteredNumbers
// }
/* ----------------------------------- 2-28 ----------------------------------- */
// Оператор % оставляет лстаток от деления
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
/* ----------------------------------- 2-29 ----------------------------------- */
// Возвращает чётные числа
// function getEvenNumbers(start, end) {
//   const arr = []
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i)
//     }
//   }

//   return arr
// }
/* ----------------------------------- 2-30 ----------------------------------- */
// break Прерывает выполнение цикла и передаёт управление на строку за его телом.
// const start = 6
// const end = 27
// let number

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i
//     break
//   }
// }
/* ----------------------------------- 2-31 ----------------------------------- */
// Оператор return предназнвчен для того чтобы прерывать выполнение сразу цикла и функции.
// function findNumber(start, end, divisor) {
//   let number

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return (number = i)
//     }
//   }
// }
/* ----------------------------------- 2-32 ----------------------------------- */
// Функция includes()
// function includes(array, value) {
//   for (const elem of array) {
//     if (elem === value) {
//       return true
//     }
//   }
//   return false
// }
