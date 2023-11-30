// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 29, 2023

const wordMap = new Map();
wordMap.set('GOAT', 'farm animal');
wordMap.set('STAMP', 'need to mail a letter');
wordMap.set('BOOKKEEPER', 'might work at a race course');

// Letter button inputs, greys out once selected
function input(e) {
    var userInput = document.getElementById("userInput");
    userInput.value = userInput.value + e.value;

    var buttonId = e.id;
    
    $('input[id=' + buttonId + ']').prop('disabled', true);
    $('input[id=' + buttonId + ']').css("background-color","grey");
    $('input[id=' + buttonId + ']').css("cursor", "not-allowed");

}

// Play again button, restarts game
function refresh() {
    location.reload();
}

function selectWord(){

}

$(document).ready(function() {

    // // Triggers when guess is inputted
    // $('input[name="guess"]').change(function() {

    //     $('input[type="submit"]').prop('disabled', false).val('Submit');
  
    //     $('input[type="submit"]').css("background-color", "#de6a4d");
    //     $('input[type="submit"]').css("cursor", "default");
  
    //   });
});