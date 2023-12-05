// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023


// Collects user guesses, greys out once selected
function input(e) {
    var userInput = document.getElementById("userInput");
    userInput.value = userInput.value + e.value;

    checkGuess(e, targetWord)
    
    var buttonId = e.id;
    $('input[id=' + buttonId + ']').prop('disabled', true);
    $('input[id=' + buttonId + ']').css("background-color","grey");
    $('input[id=' + buttonId + ']').css("cursor", "not-allowed");

}

// Checks if letter guessed is in target word
function checkGuess(letterGuessed, targetWord) {
    const letters = targetWord.split('');
    console.log(letters); 
}

// Play again button, restarts game
function refresh() {
    location.reload();
}

// returns random key from Map
function getRandomKey() {
    let keys = Array.from(wordMap.keys());
    return keys[Math.floor(Math.random() * keys.length)];
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
function displayWordBlanks(word){
    let wordLength = word.length;

    const wordBlankElem = document.getElementById('word-blank');
    let wordBlankHTMLOut = ``;

    for (i=0;i<wordLength;i++){
        wordBlankHTMLOut +=`<p style=${blankStyle}>-</p>`;

    }
    wordBlankElem.innerHTML=wordBlankHTMLOut;
}
