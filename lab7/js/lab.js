// Summary. Lab 7 - Functions
// Description. Working with JavaScript functions to get familiar with them. This file creates a function that takes user input and sorts the letters of the input.
// Author: Ashley Lu
// Created:  2021.10.21

// function sortName that will take user input to sort back their name
function sortName() {
  // declaring userName using window.prompt()
  var userName = window.prompt("hi! welcome, what is your name?", "my name");

  /* originally used a for loop to iterate through each letter of the name and add to an array
  var nameArray = [];
  for (let letter of name) {
    nameArray.push(letter);
  };
  */

  //separating letters, removing whitespace, sorting them, and then joining them into a single string
  userName = userName.toLowerCase().replace(/ /g, "").split("");
  var sortedName = userName.sort().join("");

  return sortedName;
};

// calling function
document.writeln("here is your name sorted: <pre>", sortName(), "</pre>");
document.writeln("<br>enjoy!");
