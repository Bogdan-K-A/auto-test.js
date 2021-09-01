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
// Ращёт скидки от и до
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0
  const BRONZE_DISCOUNT = 0.02
  const SILVER_DISCOUNT = 0.05
  const GOLD_DISCOUNT = 0.1
  let discount

  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT
  } else {
    discount = BASE_DISCOUNT
  }

  return discount
}
/* ----------------------------------- 1-06 ----------------------------------- */
/* ----------------------------------- 1-06 ----------------------------------- */
/* ----------------------------------- 1-06 ----------------------------------- */
/* ----------------------------------- 1-06 ----------------------------------- */
/* ----------------------------------- 1-06 ----------------------------------- */
