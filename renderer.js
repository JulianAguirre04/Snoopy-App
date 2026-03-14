
//The message array
const messages = {
    Random: ["Hi!!!","test 3","wanna know who did 911","Ig I'm working now!"], 
    morning: ["Goodmorning!!!", "Morning sleepy!", "You're up!!", "Do your best :)"],
    afternoon: ["You're doing great!", "Have you drank water yet?", "You got this!", "You're amazing!", "Snack time??", "Is it time to play yet??"],
    evening: ["You've done a great job today!", "Is it nap time??", "Relax time!", "I'm always proud of you", "I missed you!"],
    Night: ["I'm getting sleepy...", "Try to get some sleep soon, okay?", "Game time??", "I hope you had a great day"]
}

// The DOM elements ;)
const button = document.getElementById('new-message') // button ID
const messageEl = document.getElementById('messages') // message ID
const exit = document.getElementById('exit-button') //exit button ID


//type writer function

let typewriterInterval = null //THis tracks current typing loop

// cancels any in progress typeing before starting next message
function typeMessage(text){
    if(typewriterInterval){
        clearInterval(typewriterInterval)
        typewriterInterval = null
    }

    messageEl.textContent = '' //clears the box
let i = 0

typewriterInterval = setInterval(() => {
    messageEl.textContent += text[i] // makes sure we add one character at a time
    i++
    if(i >= text.length){
        clearInterval(typewriterInterval) // stops when done
        typewriterInterval = null
    }
}, 50) // sets it to 50ms between each character, still have to test this

}


//State tracking for time messages
let hasShownTimeMessage = false //tracks if we've said the time message

let currentPeriod = null //remembers the current time period

// random funciton
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Time Tracker stuff
function getTimePeriod(date = new Date ()){
    const hour = date.getHours();
    if (hour >= 6 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if(hour >= 17 && hour < 22) return "evening";
    return "Night";
}

function getTimeMessage(){
    const period = getTimePeriod()

// only return a time message if it's a new period

    if(period !== currentPeriod) {
        currentPeriod = period
        hasShownTimeMessage = false
        return randomFrom(messages[period])
    }

    // Otherwise we'll repeat the time message
    return null
}
 

// updates the message ;]
function updateMessage(){
     // FIRST try to show time message (once per period)
    const timeMSG = getTimeMessage()
    if (timeMSG && !hasShownTimeMessage){
        typeMessage(timeMSG)
        hasShownTimeMessage = true
        return
    }

    typeMessage(randomFrom(messages.Random))
}


button.addEventListener('click', (e) => {
    updateMessage() // button listener to activate my messages
})

exit.addEventListener('click', (e) => {
    window.close()
})

// setting intial message as time message
window.addEventListener('DOMContentLoaded', () => {
    updateMessage()
})