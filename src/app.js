/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

const suits = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateRandomNumber();
  generateRandomSuit();
};

function randomNumber(minNum, maxNum) {
  return Math.floor(Math.random() * maxNum) + minNum;
}

function generateRandomNumber() {
  const numberP = document.querySelector(".number");

  const randomIndex = randomNumber(0, numbers.length - 1);

  numberP.textContent = numbers[randomIndex];
}

function generateRandomSuit() {
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  const randomIndex = randomNumber(0, suits.length - 1);
  const randomSuit = suits[randomIndex];

  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  }

  topSuit.textContent = randomSuit;
  bottomSuit.textContent = randomSuit;
}
