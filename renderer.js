
//The message array
const messages = ["Hi!!!","I missed you!","test 3","wanna know who did 911","Ig I'm working now!"]

// The DOM elements ;)
const button = document.getElementById('new_messages') // button ID
const messageEl = document.getElementById('element') // message ID

// random funciton
function randomFrom(arr) {
    return arr[Math.floor(math.random() * arr.length)]
}

button.addEventListener('click', (e) => {
    messageEl.textElement = randomFrom(messages) // button listener to activate my messages
})