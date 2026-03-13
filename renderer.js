
//The message array
const messages = {
    Random: ["Hi!!!","I missed you!","test 3","wanna know who did 911","Ig I'm working now!"], 
    morning: ["Goodmorning!!!", "Morning sleepy!", "You're up!!", "Do your best :)"],
    afternoon: ["You're doing great!", "Remeber to drink water!", "You got this!", "You're amazing!", "Time to eat??"],
    evening: ["You've done a great job today!", "Is it nap time??", "Relax time!", "I'm always proud of you"],
    Night: ["I'm getting sleepy...", "Try to get some sleep soon, okay?", "Game time??", "I hope you had a great day"]
}

// The DOM elements ;)
const button = document.getElementById('new-message') // button ID
const messageEl = document.getElementById('messages') // message ID
const exit = document.getElementById('exit-button') //exit button ID

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
        return randomFrom(message[period])
    }

    // Otherwise we'll repeat the time message
    return null
}

function updateMessage(){
     // FIRST try to show time message (once per period)
    const timeMSG = getTimeMessage()
    if (timeMSG && !hasShownTimeMessage){
        messageEl.textContent = timeMSG
        hasShownTimeMessage = true
        return
    }

    messageEl.textContent = randomFrom(messages.random)
}


button.addEventListener('click', (e) => {
    messageEl.textContent = randomFrom(messages) // button listener to activate my messages
})

exit.addEventListener('click', (e) => {
    window.close()
})

// setting intial message as time message
window.addEventListener('DOMContentLoaded,' () => {
    
})