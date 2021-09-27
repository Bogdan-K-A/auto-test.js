/* --------------------------- АВТО ЗАДАЧИ БЛОКА 6 -------------------------- */
/* ----------------------------------- 6-1 ---------------------------------- */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0
//   // Пиши код ниже этой строки
//   orderedItems.forEach((orderedItem) => {
//     totalPrice += orderedItem
//     // console.log(totalPrice)
//   })
//   //   console.log(orderedItem)
//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i]
//   //   }

//   // Пиши код выше этой строки
//   return totalPrice
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// // console.log(calculateTotalPrice([164, 48, 291]))
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// ===========================================
/* ----------------------------------- 6-2 ---------------------------------- */
// function filterArray(numbers, value) {
//   let filteredNumbers = []
//   // Пиши код ниже этой строки

//   numbers.forEach(function (num) {
//     if (num > value) {
//       filteredNumbers.push(num)
//     }
//   })

//   //   filteredNumbers.push(num)

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i])
//   //     }
//   //   }

//   // Пиши код выше этой строки
//   return filteredNumbers
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// console.log(filterArray([12, 24, 8, 41, 76], 20))
// ====================================================================
/* ----------------------------------- 6-3 ---------------------------------- */
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []
//   // Пиши код ниже этой строки

//   firstArray.forEach((firstArr) => {
//     if (secondArray.includes(firstArr)) {
//       commonElements.push(firstArr)
//     }
//   })

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i])
//   //     }
//   //   }

//   return commonElements
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// =============================================================================
/* ----------------------------------- 6-9 ---------------------------------- */
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = []
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArr.push(number + value)
//     } else {
//       newArr.push(number)
//     }
//   })
//   return newArr
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] % 2 === 0) {
//   //       numbers[i] = numbers[i] + value
//   //     }
//   //   }

//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)) // [1, 12, 3, 14, 5]

// =============================================================================
/* ----------------------------------- 6-15 ---------------------------------- */
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73]
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number) => number % 2 === 0)
// const oddNumbers = numbers.filter((number) => number % 2 !== 0)

// console.log(evenNumbers)
// console.log(oddNumbers)
// =============================================================================
/* ----------------------------------- 6-16 ---------------------------------- */
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ]
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres)
// const uniqueGenres = allGenres.filter(
//   (allGenre, index) => allGenres.indexOf(allGenre) === index,
// )

// console.log(allGenres)
// console.log(uniqueGenres)
// =============================================================================
/* ----------------------------------- 6-19 ---------------------------------- */
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ]

// const minAge = 10
// const maxAge = 110

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age > minAge && user.age < maxAge)
// }

// console.log(getUsersWithAge(users, minAge, maxAge))

// =============================================================================
/* ----------------------------------- 6-20 ---------------------------------- */
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
]

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends === friendName)
// }

// console.log(getUsersWithFriend())

// =============================================================================
/* ----------------------------------- 6-21 ---------------------------------- */

// const getFriends = (users) => {
//   return users
//     .flatMap((el) => el.friends)
//     .filter((el, index, arr) => arr.indexOf(el) === index)
// }

// =============================================================================
/* ----------------------------------- 6-30 ---------------------------------- */
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// }
// const playtimes = Object.values(players) // [1270, 468, 710, 244]
// console.log(playtimes)
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((playtime, value) => playtime + value, 0)
// console.log(totalPlayTime)

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length

// console.log(averagePlayTime)

// =============================================================================
/* ----------------------------------- 6-31 ---------------------------------- */
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ]
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed
// }, 0)
// console.log(totalAveragePlaytimePerGame)

// =============================================================================
/* ----------------------------------- 6-33---------------------------------- */

// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, { friends }) => acc + friends.length, 0)
// }
// =============================================================================
/* ----------------------------------- 6-37 ---------------------------------- */
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ]
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author),
// )
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author),
// )
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating,
// )
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating,
// )

// =============================================================================
/* ----------------------------------- 6-39 ---------------------------------- */
// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length)
// }
// console.table(sortByDescendingFriendCount(users))
// =============================================================================
/* ----------------------------------- 6-41 ---------------------------------- */
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ]
// const MIN_BOOK_RATING = 8
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//     .map(({author}) => author)
//   .sort((a, b) => a.localeCompare(b))

// console.table(names)
// =============================================================================
/* ----------------------------------- 6-42 ---------------------------------- */
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name)
// }
// console.table(getNamesSortedByFriendCount(users))
// console.log(getNamesSortedByFriendCount(users))
// =============================================================================
/* ----------------------------------- 6-43 ---------------------------------- */
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// const getSortedFriends = (users) => {
//   return (
//     [...users]
//       .flatMap(({ friends }) => friends) // выводим в масив все именадрузей
//       // .reduce((acc,element)=>acc.concat(element.friends),[])
//       .filter((value, index, arr) => arr.indexOf(value) === index)
//       .sort((a, b) => a.localeCompare(b))
//   )
// }

// console.table(getSortedFriends(users))
// console.log(getSortedFriends(users))

// 1. создать масив
// 2. отсортировать уникальные имена
// 3. Разставить имена по алфавиту
// 4. вернуть массив

// =============================================================================
/* ----------------------------------- 6-44 ---------------------------------- */
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((pol) => pol.gender === gender) // сравнивает пренадлежность
//     .reduce((total, { balance }) => total + balance, 0) // на основе предыдущего метода сумирует баланс
// }
// console.table(getTotalBalanceByGender(users, 'male'))
// console.log(getTotalBalanceByGender(users, 'female'))
// // сравнить пренадлежность
// //подсумировать баланс
