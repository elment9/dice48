var dice;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
var stopped = true;
var t;
var message;

function change() {
  var random = Math.floor(Math.random()*6);
  dice.innerHTML = dices[random]; 
}

function forceSix() {
  dice.innerHTML = dices[5]; 
}

function stopstart() {
  if(stopped) {
    message.innerHTML = '';
    stopped = false;
    t = setInterval(change, 50); 
  } else {
    clearInterval(t);
    forceSix();
    message.innerHTML = '¡Felicidades!';
    stopped = true;
  }
  
}

window.onload = function() {
  dice = document.getElementById("dice");
  message = document.getElementById("message");
  stopstart(); 
}