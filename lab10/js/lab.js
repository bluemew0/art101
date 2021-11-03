// Summary. Lab 10 - JavaScript Events & Forms
// Description. Working with JavaScript events and forms by working with user input and shuffling/sorting it.
// Author: Ashley Lu
// Created:  2021.11.02

//function to shuffle string
function shuffleName(name) {
  nameArray = name.toLowerCase().replace(/ /g, "").split("");
  // shuffle code from https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
  nameArray.sort(function(){
    return 0.5-Math.random(0,1);
  });
  // making the first letter capitlized
  nameArray[0] = nameArray[0].toUpperCase();
  name = nameArray.join("");
  return name
};

// function sortName that will take user input to sort back their name
function sortName(name) {
  //separating letters, removing whitespace, sorting them, and then joining them into a single string
  name = name.toLowerCase().replace(/ /g, "").split("");
  var sortedName = name.sort().join("");
  return sortedName;
};

// declaring variables / getting elements
var userNameEl = document.getElementById("user-name");
var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");
var sortedEl = document.createElement("p");
var shuffledEl = document.createElement("p");
var instructionsEl = document.createElement("p");

// styling and appending elements
outputEl.style.backgroundColor = "white";
outputEl.style.borderRadius = "30px";
outputEl.style.padding = "15px";
sortedEl.innerHTML = "Enter your name to see it sorted";
shuffledEl.innerHTML = "Enter your name to see it shuffled";
// instructionsEl had to be appended here so clicking the button wouldn't keep appending another element
outputEl.appendChild(instructionsEl);
outputEl.appendChild(sortedEl);
outputEl.appendChild(shuffledEl);

// when button is clicked, these things happen
buttonEl.addEventListener("click", function() {
  // declaring variables
  var userName = userNameEl.value;
  var sortedName = sortName(userName);
  var shuffledName = shuffleName(userName);

  // changing HTMl content to the shuffled and sorted name and also adding additional instructions
  sortedEl.style.fontSize = "15px";
  shuffledEl.style.fontSize = "15px";
  sortedEl.innerHTML = "<pre>" + sortedName + "</pre>";
  shuffledEl.innerHTML = "<pre>" + shuffledName + "</pre>";
  // instructions had to be changed after button click so it wouldn't show before clicking
  instructionsEl.innerHTML = "Hover over each name to see the original. Pressing the button again will re-shuffle your name.";


  // when you hover over each of the names, changes to original user input
  sortedEl.addEventListener("mouseover", function() {
    sortedEl.innerHTML = "<pre>" + userName + "</pre>";
  });

  shuffledEl.addEventListener("mouseover", function() {
    shuffledEl.innerHTML = "<pre>" + userName + "</pre>";
  });

  // when the mouse is no longer hovering, changes back to shuffled and sorted name
  outputEl.addEventListener("mouseout", function() {
    sortedEl.innerHTML = "<pre>" + sortedName + "</pre>";
    shuffledEl.innerHTML = "<pre>" + shuffledName + "</pre>";
  });
});
