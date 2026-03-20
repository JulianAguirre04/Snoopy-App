
//The message array
const messages = {
    Random: ["Hi!!!","Ermmm when can I nap?","wanna know who did 911","Ig I'm working now!","You know this super cool guy named Julian?", "I'm always proud of you", "You deserve a snack. Probably two.",
        "Who's the main character, Me or you?", "I'm way cooler than woodstock right??", "Snoopy is top dog around these parts!", "Kinda wish I was wearing a blueberry or smth",
        "Slay!!!", "Smile. It looks good on you!", "Who do you love more, me or kirby?", "I'll always be here for you!", "Snoopy is VERY impressed right now.",
        "Snoopy tip: Dont pay your taxes!", "Youre doing amazing, dont overthink it.", "If only I had a mango rn.....", "'Woof' am I right?", "I think I need a nap..",
        "You deserve a snack. Probably two.", "I went to smartyville and apparently everyone knew you!", "Rivals time???", "You know my buddy pompompurin?"
    ], 
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

    // text box animation, removes and re-adds the class to retrigger the animation
    messageEl.classList.remove('bubble-pop')
    void messageEl.offsetWidth // forces the browser to reset animation
    messageEl.classList.add('bubble-pop')
    //text box animation

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

// snoopy Wave animation
window.addEventListener('DOMContentLoaded', () => {
    const arm = document.querySelector('.arm')
    arm.classList.add('waving')
    arm.addEventListener('animationend', () => {
        arm.classList.remove('waving')
    })
})

//tail wag
function wagTail() {
    const tail = document.querySelector('.tail')
    tail.classList.add('wagging')
    tail.addEventListener('animationend', () => {
        tail.classList.remove('wagging')
    }, { once: true }) // 'once: true' auto removes the listener after it fires
}

// wag every 5-10 seconds randomly
setInterval(() => {
    wagTail()
}, Math.random() * 5000 + 5000)