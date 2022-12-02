/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".cl"];

document.getElementById("btn").addEventListener("click", function() {
  let firstString = pronoun[Math.floor(Math.random() * pronoun.length)];
  let secondString = adj[Math.floor(Math.random() * adj.length)];
  let thirdString = noun[Math.floor(Math.random() * noun.length)];
  let fourthString = extension[Math.floor(Math.random() * extension.length)];
  document.getElementById(
    "url"
  ).innerHTML = `${firstString}${secondString}${thirdString}${fourthString}`;
});
