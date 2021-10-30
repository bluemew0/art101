// Summary. Lab 9 - JavaScript for the Web
// Description. Working with DOM manipulation and creating new HTML elements with this JavaScript.
// Author: Ashley Lu
// Created:  2021.10.28

function mouseOver(el) {
  el.style.backgroundColor = "#445356";
  el.style.borderRadius = "30px";
  el.style.padding = "15px";
}

function mouseOut(el) {
  el.style.backgroundColor = "";
  el.style.padding = "";
}

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerText = "Helvetica";
new2El.innerHTML = "Georgia";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


new1El.style.fontFamily = "Helvetica";
new1El.style.color = "white";
new1El.style.fontSize = "x-large";
new2El.style.fontFamily = "Georgia";
new2El.style.color = "white";
new2El.style.fontSize = "x-large";
