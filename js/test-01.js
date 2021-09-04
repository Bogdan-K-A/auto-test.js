/* ----------------------------------- 1-06 ----------------------------------- */
// Вывод шаблонной строки
// const pricePerDroid = 800
// const orderedQuantity = 6
// const deliveryFee = 50
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
/* ----------------------------------- 1-08 ----------------------------------- */
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`)
// }
// add(15, 27, 10)
// add(10, 20, 30)
// add(5, 10, 15)
/* ----------------------------------- 1-12 ----------------------------------- */
// Возврат строки из функции
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   return `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`
// }
/* ----------------------------------- 1-14 ----------------------------------- */
// Оператор сравнения === возвращает true или false
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam'

//   const isMatch = password === SAVED_PASSWORD

//   return isMatch
// }
/* ----------------------------------- 1-15 ----------------------------------- */
// Инструкция if...else
// function checkAge(age) {
//   let message

//   if (age >= 18) {
//     message = 'You are an adult'
//   } else {
//     message = 'You are a minor'
//   }

//   return message
// }
/* ----------------------------------- 1-16 ----------------------------------- */
// function checkStorage(available, ordered) {
//   let message

//   if (ordered > available) {
//     message = 'Not enough goods in stock!'
//   } else {
//     message = 'Order is processed, our manager will contact you.'
//   }

//   return message
// }

/* ----------------------------------- 1-18 ----------------------------------- */
//Gроверка баланса
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message

//   const totalPrice = pricePerDroid * orderedQuantity
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!'
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`
//   }

//   return message
// }
/* ----------------------------------- 1-21 ----------------------------------- */
// Определение числового промежутка "от 2 до 10", "от 100 до 200", "от start до end"
// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && number < end

//   return isInRange
// }
/* ----------------------------------- 1-23 ----------------------------------- */
// Инверсия сравнения (не равно...)
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end
//   const isNotInRange = !isInRange

//   return isNotInRange
// }
/* ----------------------------------- 1-24 ----------------------------------- */
// Раcщёт скидки от и до
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0
//   const BRONZE_DISCOUNT = 0.02
//   const SILVER_DISCOUNT = 0.05
//   const GOLD_DISCOUNT = 0.1
//   let discount

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT
//   } else {
//     discount = BASE_DISCOUNT
//   }

//   return discount
// }
/* ----------------------------------- 1-25 ----------------------------------- */
// Тернарный оператор
// function checkStorage(available, ordered) {
//   let message

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you'

//   return message
// }
/* ----------------------------------- 1-27 ----------------------------------- */
// Инструкция switch
// function getSubscriptionPrice(type) {
//   let price

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0 // Change this line
//       break

//     case 'professional': // Change this line
//       price = 20 // Change this line
//       break

//     case 'organization': // Change this line
//       price = 50 // Change this line
//       break
//   }

//   return price
// }
/* ----------------------------------- 1-28 ----------------------------------- */
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'
//   let message

//   switch (password) {
//     case null:
//       message = 'Canceled by user!'
//       break

//     case ADMIN_PASSWORD:
//       message = 'Welcome!'
//       break

//     default:
//       message = 'Access denied, wrong password!'
//   }

//   return message
// }
/* ----------------------------------- 1-29 ----------------------------------- */
// function getShippingCost(country) {
//   let message;

// switch (country) {
//     case"Australia":
//     price = 170
//       message = `Shipping to ${country} will cost ${price} credits`
//       break

//     case"Germany":
//        message = "Sorry, there is no delivery to your country"
//       break

//     case"China":
//     price = 100
//       message = `Shipping to ${country} will cost ${price} credits`
//       break

//     case"Chile":
//     price = 250
//       message = `Shipping to ${country} will cost ${price} credits`
//       break

//      case"Jamaica":
//     price = 120
//       message = `Shipping to ${country} will cost ${price} credits`
//       break

//      case"Sweden":
//        message = "Sorry, there is no delivery to your country"

//   }

//   return message;
// }
/* ----------------------------------- 1-30 ----------------------------------- */
// длинна строки
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
/* ----------------------------------- 1-31 ----------------------------------- */
// Индексация элементов строки
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;// вся длнинна значения
// const firstElement = courseTopic[0];//первый элемент
// const lastElement = courseTopic[courseTopic.length -1];//последний элемент
/* ----------------------------------- 1-32 ----------------------------------- */
// Метод slice()
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
/* ----------------------------------- 1-33 ----------------------------------- */

// function formatMessage(message, maxLength) {
//   let result

//   if (message.length === maxLength) {
//     return message
//   }
//   message.length > maxLength
//   result = message.slice(0, maxLength) + '...'

//   return result
// }
/* ----------------------------------- 1-34 ----------------------------------- */
// Методы toLowerCase() и toUpperCase()
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }
/* ----------------------------------- 1-35 ----------------------------------- */
// function checkForName(fullName, name) {
//   const result = fullName.includes(name)
//   return result
// }
/* ----------------------------------- 1-36 ----------------------------------- */
// Задача: проверка спама (нужно все буквы при поиске приводить в один регистр)
// function checkForSpam(message) {
//   let result;

//  const lowerCase = message.toLowerCase()
// result = lowerCase.includes('spam') || lowerCase.includes('sale')  ? true :  false

//   return result;
// }
