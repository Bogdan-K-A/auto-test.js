/* ----------------------------------- 4-7 ---------------------------------- */ const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
]

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
}

const messages = []

for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1))
}

// console.log(messages)

/* --------------------------------- 4 - 10 --------------------------------- */
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email)
    return `Почта ${email} добавлена в рассылку.`
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email)
    return `Почта ${email} удалена из рассылки.`
  },
}

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`)
  return action(email)
}

const firstInvoke = logAndInvokeAction(
  'kiwi@mail.uk',
  service.subscribe.bind(service),
)
console.log(firstInvoke)
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList)
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  'poly@hotmail.de',
  service.unsubscribe.bind(service),
)
console.log(secondInvoke)
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList) // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
