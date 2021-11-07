// Summary. Lab 11 - Libraries & jQuery
// Description. Working with libraries and jQuery.
// Author: Ashley Lu
// Created:  2021.11.06

// declaring variables to get element
var challengeEl = $("#challenge");
var problemsEl = $("#problems");
var resultsEl = $("#results");
var outputEl = $("#output");

// creating button elements to each div
challengeEl.append("<button id='c-button'>change appearance</button>");
problemsEl.append("<button id='p-button'>change appearance</button>");
resultsEl.append("<button id='r-button'>change appearance</button>");
outputEl.append("<button id='bonus-button'>change button appearance</butotn>");

// event listeners that toggle the "special" class of each div when clicked
$("#c-button").click(function() {
    $(this).parent().toggleClass("special");
});

$("#p-button").click(function() {
    $(this).parent().toggleClass("special");
});

$("#r-button").click(function() {
    $(this).parent().toggleClass("special");
});

// bonus button that changes the appearance of other buttons
$("#bonus-button").click(function() {
    $("button").toggleClass("buttonChange");
});

