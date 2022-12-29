"use strict";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomNumber = Math.trunc(Math.random() * 26);
let letter = document.querySelector(".letter");

letter.textContent = alphabet[randomNumber];

const randomLetter = function () {
  randomNumber = Math.trunc(Math.random() * 26);
  letter.textContent = alphabet[randomNumber];
};

document.addEventListener("keydown", function (e) {
  if (e.key === alphabet[randomNumber].toLowerCase()) {
    randomLetter();
    document.querySelector("body").style.backgroundColor = "rgb(126, 223, 117)";
  } else {
    document.querySelector("body").style.backgroundColor = "rgb(224, 120, 120)";
    console.log(alphabet[randomNumber])
    console.log(e.key)
  }
});
