// COMP 2132 - Final Project
// Mika Campbell Nishmura A01328907
// Nov 22, 2023

function input(e) {
    var tbInput = document.getElementById("tbInput");
    tbInput.value = tbInput.value + e.value;

    var buttonId = e.id;
    
    $('input[id=' + buttonId + ']').prop('disabled', true);
    $('input[id=' + buttonId + ']').css("background-color","grey");
    $('input[id=' + buttonId + ']').css("cursor", "not-allowed");

}

function refresh() {
    location.reload();
}

$(document).ready(function() {

    // Triggers when guess is inputted
    $('input[name="guess"]').change(function() {

        $('input[type="submit"]').prop('disabled', false).val('Submit');
  
        $('input[type="submit"]').css("background-color", "#de6a4d");
        $('input[type="submit"]').css("cursor", "default");
  
      });

     // Triggers when submit is clicked
    $('input[name="submit"]').click(function() {
        var guess = $('input[type="guess"]').val();

        $('input[type="submit"]').prop('disabled', false).val('Submit');
  
        $('input[type="submit"]').css("background-color", "#de6a4d");
        $('input[type="submit"]').css("cursor", "default");
  
      });

    $('input[type="button"]').click(function() {
       
    });
});