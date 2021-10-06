// DOM ELEMENTS
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const tryAgain = document.getElementById('try-again');
const resultsMessage = document.getElementById('results-message');
const remainingGuesses = document.getElementById('remaining-guesses');
const gotchaImage = document.getElementById('gotcha-image');
const nopeImage = document.getElementById('nope-image');
const nopeImage2 = document.getElementById('nope-image-2');
const emptyImage = document.getElementById('closed-image');

//GENERATING RANDOM NUMBER
// let generatedNumber = Math.floor(Math.random() * 20);

//STARTING STATE
let numGuess = 4;
let randomNumber = Math.floor(Math.random() * 20) + 1;

//EVENT LISTENERS
guessButton.addEventListener('click', ()=>{
    numGuess--;
    emptyImage.classList.add('hidden');
    let resultsReply;
    if (Number(guessInput.value) === randomNumber) {
        resultsReply = 'Gotcha!';
        gotchaImage.classList.remove('hidden');
        nopeImage.classList.add('hidden');
        nopeImage2.classList.add('hidden');
        guessButton.classList.add('hidden');
        tryAgain.classList.remove('hidden');

    } else if (numGuess === 0){
        resultsReply = 'GAME OVER.';
        guessButton.classList.add('hidden');
        tryAgain.classList.remove('hidden');
        nopeImage.classList.remove('hidden');
        nopeImage2.classList.add('hidden');
        
    } else if (guessInput.value > randomNumber) {
        resultsReply = 'Looks like you went too far. (too high)';
        nopeImage.classList.remove('hidden');
        nopeImage2.classList.add('hidden');


    } else if (guessInput.value < randomNumber) {
        resultsReply = 'Look out behind you! (too low)';
        nopeImage2.classList.remove('hidden');
        nopeImage.classList.add('hidden');
    }

    const results = ` ${resultsReply} `;
    resultsMessage.textContent = results;
    remainingGuesses.textContent = ` ${numGuess} HP remaining. `;
});

tryAgain.addEventListener('click', () => {
    document.location.reload(true);

});
console.log('Cheater...', randomNumber);