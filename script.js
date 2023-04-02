//create an a button and then an event listener to click on that button
var timer = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var main = document.querySelector("main")
var blanks = document.querySelector("#blanks")


var words = ["apple", "orange", "pear"]
var compChoice;
function chooseWord(){
    compChoice = words[Math.floor(Math.random()*words.length)]
    console.log(compChoice)
    return compChoice
}

var wins = 0
var loses = 0

var chosenWordBlanks = []
var letters = []

// creating blanks for letters 
function wordBlanks(){
    var wordLength = compChoice.length

    while(wordLength >0){
        chosenWordBlanks.push(" _ ");
        wordLength --
    }
    return chosenWordBlanks
}




//make an event listener for the whole page, that will be listening to key down
//create a timer using set interval method
startButton.addEventListener("click", function(){
    var timeGiven = 30;
    console.log("Hi")
    var timeInterval = setInterval(function(){
        timeGiven -- 
        if (timeGiven >= 1){
            timer.textContent = (timeGiven + " seconds left")
            console.log("hello")
        }
        if (timeGiven === 0){
            clearInterval(timeInterval)
            displayMessage();

        }
    },1000)
    chooseWord()
    blanks.textContent = wordBlanks(compChoice)
})

function displayMessage(){
    
}

main.addEventListener("keydown", function(event){
    console.log(event.key);
    var pressed = event.key
    if(compChoice.includes(pressed)){
        blanks.textContent = pressed
    }
    // if key down === a letter in computer chosen string then display letter on screen
    // function compareUserChoice(){
    //     letters.push(compChoice.split(""))
    //     letters.includes()
})


//compare letters in our string to users 
//for the user to win all letters in our given string have to match the letters given by the user before the time runs out 
//else the user loses/run out of time
//if the user wins we add to our win count if the user loses we add to our lose count 
//we need to display win or losses on screen

