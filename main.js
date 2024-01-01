// Váriaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luckCookie = document.querySelector("#luckCookie")
const btnReset = document.querySelector("#btnReset")
const elementResponse = document.querySelector("#message") 
const messages = [
  'Sonhos são caminhos construídos pelo coração',
  'Impossível é uma palavra que serve só de enfeite no dicionário',
  'Você é beleza, luz e força',
  'Permita que o seu corpo descanse',
]

// irá quardar número total de elementos dentro do Array messages no const totalMessages 
const totalMessages = messages.length // 12: de 0 a 11
let randomNumber = Math.floor(Math.random() * totalMessages)




// Events
luckCookie.addEventListener('click', handleCookieClick)
btnReset.addEventListener('click', handleResetClick)

// Functions
function handleCookieClick() {
  luckCookie.classList.add('tremoloCookie')
  setTimeout(() => {
    toggleScreen()
    console.log(messages[randomNumber])
    elementResponse.innerText = messages[randomNumber]
    console.log("Passaram-se 3 segundos!");
}, 3000);
}

function handleResetClick() {
  toggleScreen()
  location.reload()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
