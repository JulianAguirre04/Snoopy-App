
//The message array
const messages = ["Hi!!!","I missed you!","test 3","wanna know who did 911","Ig I'm working now!"]

// The DOM elements ;)
const button = document.getElementById('new-message') // button ID
const messageEl = document.getElementById('messages') // message ID

// random funciton
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

button.addEventListener('click', (e) => {
    messageEl.textContent = randomFrom(messages) // button listener to activate my messages
})