'use strict';

//To select the elementfrom the page we use query selector, And to access the content in it we use textContent method.
console.log(document.querySelector('.message').textContent);

/*
 What is DOM ?
 DOM(Data Object mMdel) is the structured representation of HTML documents. DOM allows js to access HTML elements and styles to menipulate them
 The example is written above
*/
/*
console.log(document.querySelector('.message').textContent = '🎉Correct Number!');
document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 10; //Changing the content inside an element.

document.querySelector('.guess').value = 25;  // To use the value that we put in input field tag we use VALUE. 
console.log(document.querySelector('.guess').value);
*/

// Implementation of Game

let secreteNumber = Math.trunc(Math.random() * 20 + 1);
// This method ***Math.random()*** will always returns values between 0-1 randomly.
// **Math.trunc(Math.random() * 20 +1)** this logic will always return a random number between 0-20.
console.log(secreteNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Event Handler function 
document.querySelector('.check').addEventListener('click',
    function () {
        //const guess = document.querySelector('.guess').value; // remeber this eventListener always return a string value
        const guess = Number(document.querySelector('.guess').value); // To change the string itno number we use the Number function. 
        console.log(guess, typeof guess); // Now the type of guess will be the number 

        // When there is no input
        if (!guess) {
            console.log(document.querySelector('.message').textContent = '⛔ No Number! Plase enter a number between 0 and 20');
        }
        // When player wins  
        else if (guess === secreteNumber) {
            //document.querySelector('.message').textContent = '🎉 Correct Number';
            displayMessage('🎉 Correct Number');
            document.querySelector('.number').textContent = secreteNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.message').style.fontSize = '2rem';
            // High score logic
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        // Refactoring of code. We will eliminate duplicate code without changing the functionality of the game
        // when players input is less or greater than guess
        else if (guess !== secreteNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent = guess > secreteNumber ? '📈 Number is Too High' : '📈 Number is Too Low';
                displayMessage(guess > secreteNumber ? '📈 Number is Too High' : '📈 Number is Too Low');
                //only this text changes in both condition so we place them in one logic using terniary operator.
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = '💥 You Lost the Game';
                displayMessage('💥 You Lost the Game');
                document.querySelector('.score').textContent = 0;
            }
        }
    });
/*
// When player's input greater than secrete number 
else if (guess > secreteNumber) {
    // Score counter logic
    if (score > 1) {
        document.querySelector('.message').textContent = '📈 Number is Too High';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You Lost the Game';
        document.querySelector('.score').textContent = 0;
    }
}
// When players's input less than secrete number
else if (guess < secreteNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '📉 Number is Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You Lost the Game';
        document.querySelector('.score').textContent = 0;
    }
}
*/

// Again Button functionality

document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        secreteNumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector('.guess').value = ''; // empty 
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        //document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').style.fontSize = '2rem';
        document.querySelector('body').style.backgroundColor = '#222';
    });