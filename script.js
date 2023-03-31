//create an a button and then an event listener to click on that button
var timer = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var main = document.querySelector("main")
//make an event listener for the whole page, that will be listening to key down
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
})
main.addEventListener("keydown", function(){
    
})
//create a timer using set interval method
//compare letters in our string to users 
//for the user to win all letters in our given string have to match the letters given by the user before the time runs out 
//else the user loses/run out of time
//if the user wins we add to our win count if the user loses we add to our lose count 
//we need to display win or losses on screen
