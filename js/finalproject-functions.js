// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023

const targetWord = getRandomPair().getWord;
const hint = getRandomPair().getHint;
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
    border:pink;
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

    // Set up word
    displayWord(targetWord);

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

function checkGameEnd() {
    if (incorrectGuesses.length >= 6) {
        displayWord();
        $('input[id="incorrectGuesses"]').css("color","red");

        setTimeout(function() {
            alert('Game over!');
            resetGame();
          }, 500);
    } else if (!correctGuesses.includes('-')) {
        displayWord();
        $('p[class="wordTile"]').css("color","green");
        $('p[class="wordTile"]').css("background-color","#c2efc6");

        setTimeout(function() {
            alert('Congratulations! You won!');
            resetGame();
          }, 500);

    }
}