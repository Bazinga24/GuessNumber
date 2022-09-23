"use strict";

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

// submit button
const submitButton = document
  .querySelector(".check")
  .addEventListener("click", () => {
    // guessed number
    const guess = Number(document.querySelector(".guess").value);

    // when no value is entered!!
    if (!guess) {
      document.querySelector(".message").textContent =
        "No value is Entered !!!";
    }

    // when the player wins
    else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!!!";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score >= highscore) {
        highscore = score;
      }
    }

    // when the value is not same
    else if (guess != secretNumber) {
      // too high
      if (guess - secretNumber <= 3 && guess - secretNumber >= 1) {
        document.querySelector(".message").textContent = "Slightly Higher";
        document.querySelector("body").style.backgroundColor = "#FFA500";
      } else if (guess - secretNumber >= -3 && guess - secretNumber <= -1) {
        document.querySelector(".message").textContent = "Slightly Lower";
        document.querySelector("body").style.backgroundColor = "#C0C0C0";
      } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high!!!";
      }
      // to low
      else {
        document.querySelector(".message").textContent = "Too low!!!";
      }
    }

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost!!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }

    document.querySelector(".highscore").textContent = highscore;
  });

const again = document.querySelector(".again").addEventListener("click", () => {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".highscore").textContent = highscore;
});
