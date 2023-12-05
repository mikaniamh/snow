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

// Play again button, restarts game
function resetGame() {
    location.reload();
}

// returns random word from WordMap
function getRandomPair() {
    return words[Math.floor(Math.random() * words.length)];
}

const blankStyle = `"
    color:black;
    background:white;       
    border: #7E9BE6;
    border-style: outset;
    border-width: 1px;
    border-radius: 5px;
    width: 15px;
    height: 15px;
    "`;

// displays the correct number of empty spaces in HTML for the selected word
function displayWord(){
    const wordBlankElem = document.getElementById('word-blank');
    let wordBlankHTMLOut = ``;

    for (i=0;i<wordLength;i++){
        wordBlankHTMLOut +=`<p id="${i}" class="wordTile" style=${blankStyle}>${correctGuesses[i]}</p>`;
    }
    wordBlankElem.innerHTML=wordBlankHTMLOut;
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

    setTimeout(function() {
        const hangmanImage = document.getElementById('hangman-image');
        hangmanImage.src = `images/snowman-1.png`;
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

// Collects user guesses, greys out once selected
function input(letterGuessed) {

    checkGuess(letterGuessed);

    var buttonId = letterGuessed;
    $('input[id=' + buttonId + ']').prop('disabled', true);
    $('input[id=' + buttonId + ']').css("background-color","grey");
    $('input[id=' + buttonId + ']').css("cursor", "not-allowed");

}

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
        // add letter to incorrect guesses
            if(!letterExisted){
                var incorrectGuessesElem = document.getElementById("incorrectGuesses");
                incorrectGuessesElem.value = incorrectGuessesElem.value + letterGuessed;
    
                incorrectGuesses.push(letterGuessed);
                updateHangmanImage(incorrectGuesses.length); 
            }
            letterExists = false;
         }
    
        console.log("correct: " + correctGuesses);
        console.log("incorrect: " + incorrectGuesses);
    };
        displayWord();
        checkGameEnd();
        console.log(correctGuesses);
        //update word blanks
} 

function updateHangmanImage(guessCount) {
    const hangmanImage = document.getElementById('hangman-image');
    hangmanImage.src = `images/snowman-${guessCount + 1}.png`;
}

function checkGameEnd() {
    if (incorrectGuesses.length >= 7) {
        displayWord();
        $('input[id="incorrectGuesses"]').css("color","red");
        $('p[id="instructions"]').text("You Lost. Better luck next time...");
        $('div[id="input-keybord-frame"]').css("pointer-events", "none");
        
        // Displays pop-up after 3 seconds
        setTimeout(function() {
            $('#popup').css('opacity', '1');
        }, 3000);
    } else if (!correctGuesses.includes('-')) {
        displayWord();
        $('p[class="wordTile"]').css("color","green");
        $('p[id="instructions"]').text("You Won! Well done!");

        $('p[class="wordTile"]').css("background-color","#c2efc6");
        const hangmanImage = document.getElementById('hangman-image');
        hangmanImage.src = `images/snowman-win.png`;

        $('div[id="input-keybord-frame"]').css("pointer-events", "none");


        // Displays pop-up after 3 seconds
        setTimeout(function() {
            $('#popup').css('opacity', '1');
        }, 3000);
    }
}