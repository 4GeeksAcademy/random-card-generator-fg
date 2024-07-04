/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const newCard = document.getElementById("new-card");

window.onload = function() {
  //write your code here
  generateRandomNumber();
  generateRandomSuit();
};

function randomNumber(minNum, maxNum) {
  return Math.floor(Math.random() * maxNum) + minNum;
}

function generateRandomNumber() {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const numberP = document.querySelector(".number");

  const randomIndex = randomNumber(0, numbers.length);

  numberP.textContent = numbers[randomIndex];
}

function generateRandomSuit() {
  const suits = ["♦", "♥", "♠", "♣"];
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  // Generate random suit based on index of suits array
  const randomIndex = randomNumber(0, suits.length);
  const randomSuit = suits[randomIndex];

  // If suit is heart or diamong change color of suit to red
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
  }

  topSuit.textContent = randomSuit;
  bottomSuit.textContent = randomSuit;
}

newCard.addEventListener("click", () => {
  generateRandomNumber();
  generateRandomSuit();
});
