// Summary. Lab 13 - Loops
// Description. Working with loops to iterate through numbers and use conditionals to control what happens at each iteration.
// Author: Ashley Lu
// Created:  2021.11.16

// function that takes in an array of numbers, an array of strings, and a number to return a range of numbers with text at the specified multiples
function fizzbuzzboom(factors, words, limit) {
  var output = "";

  for (let i = 1; i <= limit; i++) {
    var str = "";
    // using a string based system to store what to output based on if it is a significant multiple
    if (i % factors[0] == 0) {
      str += words[0];
    }
    if (i % factors[1] == 0) {
      str += words[1];
    }
    if (i % factors[2] == 0) {
      str += words[2];
    }
    // determining what formatting to do based on if it is a significant multiple
    if (str == "") {
      str = i+"<br>";
    }
    else {
      str += "!<br>";
    }
    output += str;
  }
  return output;
}

$("#output").append("<br><p id=fizzbuzz></p>");

// when you click on the button
$("#submit").click(function() {
  var limit = $("#limit").val();
  var factors = [];
  var words = [];

// adding input values to corresponding arrays for my function
  for (let i = 1; i < 4; i++) {
    factorId = "#f"+i;
    wordId = "#w"+i;
    factors.push($(factorId).val());
    words.push($(wordId).val());
  }

// output and styling
  $("#fizzbuzz").html("<pre>"+fizzbuzzboom(factors, words, limit)+"</pre>");
  $("#fizzbuzz").css("ColumnCount", "10");
  $("#fizzbuzz").css("fontSize", "14px");
})
