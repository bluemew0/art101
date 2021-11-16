// Summary. Lab 12 - Conditionals
// Description. Working with conditionals to take a name and sorting it into colors (instead of sorting hat).
// Author: Ashley Lu
// Created:  2021.11.11

  // function that sorts your name into colors based on name
  function nameColor(name) {
    var length = name.length;
    if (length == 0) {
        return null;
    }
    else if (length % 4 == 0) {
        return "green";
    }
    else if (length % 4 == 1) {
        return "red";
    }
    else if (length % 4 == 2) {
        return "blue";
    }
    else if (length % 4 == 3) {
        return "yellow";
    }
  };

  // declaring variables / getting elements
  // color palettes
  var colorsObj = {"green": ["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a"],
                "red": ["#cc444b", "#da5552", "#df7373", "#e39695", "#e4b1ab"],
                "blue": ["#5e60ce", "#5390d9", "#4ea8de", "#48bfe3", "#56cfe1"],
                "yellow": ["#f3fd81", "#fffd5d", "#fff15d", "#ffeb5d", "#ffe55d"]
              };
  var results = $("<p>")
  var errorMsg = $("<p>");

  // variables for creating a color palette
  var colorsDiv = $("<div id='colors'></div>");
  var colorsArr = []; // to keep track of the squares in colorsDiv w/o needing 5 IDs
  var hexDiv = $("<div>");

  // appending child to parent
  $("#output").append(results)
  $("#output").append(errorMsg);
  $("#output").append(colorsDiv);
  $("#output").append(hexDiv);

  // adding <div> to an array to iterate through later
  for (let x = 0; x < 5; x++) {
    var square = $("<div class='square'>");
    colorsArr.push(square);
  };

  // listener event for submit button that outputs sorting results
  $("#button").click(function() {
    var name = $("#input").val();
    var color = nameColor(name);
    if (color != null) {
        errorMsg.text("");
        $(results).text("Your name color is " + color + ".");
        $(results).css("marginTop", "50px");

        // changing background colors of all the square <div> to match palette
        for (let x = 0; x < 5; x++) {
            $(colorsArr[x]).css("backgroundColor", (colorsObj[color])[x]);
            $(colorsArr[x]).html("<br><p>"+(colorsObj[color])[x]+"</p>");
            $(colorsDiv).append(colorsArr[x]);
        };
        $(colorsDiv).css("columnCount", "5");
    }
    else { // if there is no input
        $(results).html("");
        $(colorsDiv).html("");
        errorMsg.text("Please input a name :(")
        $(errorMsg).css("marginTop", "50px");
    };
  });
