// Summary. Lab 8 - Anon Functions & Callbacks
// Description. Working with JavaScript anonymous functions and callbacks to get familiar with them. This file creates a function that operates on an array of numbers using anonymous functions and callbacks.
// Author: Ashley Lu
// Created:  2021.10.26

// function that squares numbers
function square(x) {
  return x ** 2;
};

// function that checks if prime or not; returns null if it's 0
function isPrime(x) {
  var divisorList = [2, 3, 4, 5, 6, 7, 8, 9];
  if (x == 0) {
    return null;
  } else {
    for (y of divisorList) {
      if (x % y == 0) {
        if (x == y) {
          continue;
        };
        return false;
      };
    };
    return true;
  };
};

// function that will update timer variables and change HTMl element to match
function changeTimer() {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  };
  if (minutes >= 60) {
    hours += 1;
    minutes = 0;
  };
  document.getElementById("timer").innerHTML = String(hours) + ":" + String(minutes) + ":" + String(seconds);
};

// declaring global variables for all functions
  var numArray = [1, 2, 3, 4, 5];
  var squaredArray = numArray.map(square)
  var seconds = 0
  var minutes = 0
  var hours = 0

// new variable made from map() anon function that square roots an array
  var rootedArray = numArray.map(function(x) {
    return x ** 0.5;
  });

  //printing function results
    console.log("Original: ", numArray);
    console.log("Squared: ", squaredArray);
    console.log("Rooted: ", rootedArray);
    console.log("Original: Prime? ", numArray, numArray.map(isPrime));
    console.log("[1, 3, 37, 13, 55]: Prime? ", [1, 3, 37, 13, 55].map(isPrime));
    console.log("map() doesn't change the data that is assigned to numArray! (unless it's reassigned)")

// timer
setInterval(changeTimer, 1000)

// main function that runs when button is pressed
function main() {

  var outputEl = document.getElementById("original");
  outputEl.innerHTML = numArray;
  document.getElementById("squared").innerHTML = squaredArray;
  document.getElementById("rooted").innerHTML = rootedArray;
  document.getElementById("original-p").innerHTML = numArray.map(isPrime);
};
