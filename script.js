var timer = 60;
var score = 0;
var hitrn = 0;

function generateBubbles() {
  var clutter = "";

// Adjust the loop limit based on the screen size
var numberOfBubbles = 112; // Default value for larger screens

if (window.innerWidth <= 767) {
  numberOfBubbles = 70; // For small mobile devices
} else if (window.innerWidth <= 1023) {
  numberOfBubbles = 72; // For tablets
}else {
  numberOfBubbles = 112; // For Desktop devices

}

for (i = 1; i <= numberOfBubbles; i++) {
  var rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#play").innerHTML = clutter;

}

function decreaseTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeinter").textContent = timer;
    } else if (timer === 0){
      document.querySelector("#play").innerHTML = `<h1 id="center">Game Over and Your Score is  ${score} </h1>`;
    }
    
    else {
      clearInterval(timeint);
    }
  }, 1000);
}

function randomHint() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#rnhint").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreIncrease").textContent = score;
}
function decreaseScore() {
  score -= 10;
  document.querySelector("#scoreIncrease").textContent = score;
}

function userInputs() {
  document.querySelector("#play").addEventListener("click", function (dets) {
    // console.log(Number(dets.target.textContent))
    var userInput = Number(dets.target.textContent);
    if (userInput === hitrn) {
      increaseScore();
      randomHint();
      generateBubbles();
    } else {
      decreaseScore();

    }
  });
}

generateBubbles(); //to generate numbers in bubbles

decreaseTimer(); // timer of 60 secs

randomHint(); // Random hint to match exact hint and numbers

increaseScore(); // when player guess right increase score
decreaseScore(); // when wrong input hits score minus

userInputs(); // user input
