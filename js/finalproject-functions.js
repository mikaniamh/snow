// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023

const pair = getRandomPair()
const targetWord = pair.getWord();
const hint = pair.getHint();
let wordLength = targetWord.length;
let hintVisable = false;
let correctGuesses = Array.from('-'.repeat(wordLength));
let incorrectGuesses = [];
let playStarted = false;

// Play again button, restarts game
function resetGame() {
    location.reload();
}

// returns random word from WordMap
function getRandomPair() {
    return wordPairs[Math.floor(Math.random() * wordPairs.length)];
}

// displays the correct number of empty spaces in HTML for the selected word
function displayWord(){
    const wordBlankElem = document.getElementById('word-blank');
    let wordBlankHTMLOut = ``;

    for (i=0;i<wordLength;i++){
        wordBlankHTMLOut +=`<p id="${i}" class="wordTile">${correctGuesses[i]}</p>`;
    }
    wordBlankElem.innerHTML=wordBlankHTMLOut;
}

function displayKeyboard(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keysElem = document.getElementById('virtual-keyboard');
    let keysHTMLOut = ``;
    let rowCount = 1;

    for (i=0; i<alphabet.length;i++){
        let keyValue = alphabet[i].toUpperCase();
        keysHTMLOut += `<input id="${keyValue}" class="key" type="button" value="${keyValue}" onclick="input(value);" />`

        if(rowCount==9){
            keysHTMLOut += `<br>`;
            rowCount=0;
        }
        rowCount++;
    }
    keysHTMLOut += `<input id="btnRestart" type="button" value="Restart" onclick="resetGame();" />`;
    keysHTMLOut += `<input id="btnHint" type="button" value="?"/>`;

    keysElem.innerHTML=keysHTMLOut;
}

// displays the corresponding hint
function displayHint(){

    $('#hint').val('value', hint);
}

$(document).ready(function() {
    console.log(targetWord);
    console.log(correctGuesses);

    // Set up 
    displayWord(targetWord);
    displayKeyboard();

    // Changes image to create suspense after 2 seconds

    setTimeout(function() {
        if (!playStarted){
            const hangmanImage = document.getElementById('hangman-image');
            hangmanImage.src = `images/snowman-1.png`;
        }
    }, 2000);

    // Displays/Hides Hint
    $('#btnHint').click(function() {
        if(hintVisable) {
            $('#hint').text("Select '?' to display hint.");
            hintVisable = false;
        } else {
            $('#hint').text(hint);
            hintVisable = true;
        }
    });

    // Closes pop-up with 1s fade out (see CSS for time)
    $('#playAgainYes').click(function() {
        $('#popup').css('opacity', '0');
        resetGame();
    });

    $('#playAgainNo').click(function() {
        $('#popup').css('opacity', '0');
    });
});

// Collects user input, greys buttons out once selected
function input(letterGuessed) {
    playStarted = true;

    checkGuess(letterGuessed);

    var buttonId = letterGuessed;
    $('input[id=' + buttonId + ']').prop('disabled', true);
    $('input[id=' + buttonId + ']').css("background-color","#15295e");
    $('input[id=' + buttonId + ']').css("cursor", "not-allowed");

}

// Checks if letter is correct, adds letter to correct/incorrect array
function checkGuess(letterGuessed) {
    const letters = targetWord.split('');
    console.log(letters); 
    let letterExists = true;
    letterExisted = false;

    while(letterExists){

        if(letters.includes(letterGuessed)){
            // Checks if letter guessed is in target word
            letterIndex = letters.indexOf(letterGuessed);
            correctGuesses[letterIndex] = letterGuessed;
            letters[letterIndex] = 0;
            displayWord();
            letterExisted = true;

        } else {
            // else add letter to incorrect guesses
            if(!letterExisted){
                var incorrectGuessesElem = document.getElementById("incorrectGuesses");
                incorrectGuessesElem.value = incorrectGuessesElem.value + letterGuessed;
    
                incorrectGuesses.push(letterGuessed);
                updateHangmanImage(incorrectGuesses.length); 
            }
            letterExists = false;
         }
    };
    // update word blanks and check if max guesses have been reached
    displayWord();
    checkGameEnd();
} 

// Updates snowman animation frame
function updateHangmanImage(guessCount) {
    const hangmanImage = document.getElementById('hangman-image');
    hangmanImage.src = `images/snowman-${guessCount + 1}.png`;
}

// Displays Play Again pop-up after 3 seconds
function displayPlayAgainPopup(){
    setTimeout(function() {
        $('#popup').css('opacity', '1');
    }, 3000);
}

// Checks if game should end, max 7 guesses, handles end game if win or loss
function checkGameEnd() {
    if (incorrectGuesses.length >= 7) {
        displayWord();
        $('input[id="incorrectGuesses"]').css("color","red");
        $('p[id="instructions"]').text("You Lost. Better luck next time...");
        $('input[class="key"]').css("pointer-events", "none");
        
        displayPlayAgainPopup();
        $('#btnPlayAgain').css('opacity', 1);
    } else if (!correctGuesses.includes('-')) {
        displayWord();
        $('p[id="instructions"]').text("You Won! Well done!");
        $('p[class="wordTile"]').css("color","green");
        $('p[class="wordTile"]').css("background-color","#c2efc6");

        const hangmanImage = document.getElementById('hangman-image');
        hangmanImage.src = `images/snowman-win.png`;

        $('input[class="key"]').css("pointer-events", "none");

        displayPlayAgainPopup();

        $('#btnPlayAgain').css('opacity', 1);
    }
}