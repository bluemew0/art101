// Summary. Lab 7 - Functions
// Description. Working with JavaScript functions to get familiar with them. This file creates a function that takes user input and sorts the letters of the input.
// Author: Ashley Lu
// Created:  2021.10.21

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

// calling function
var userName = window.prompt("hi! welcome, what is your name?", "my name");
document.writeln("here is your name sorted: <pre>", sortName(userName), "</pre>");
document.writeln("here is your name shuffled: <pre>", shuffleName(userName), "</pre>");
document.writeln("<br>enjoy!");
