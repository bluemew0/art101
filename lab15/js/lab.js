// Summary. Lab 15 - AJAX
// Description. Working with JSON and APIs.
// Author: Ashley Lu
// Created:  2021.11.29

// function that fetches the API and changes html when successful
function randomQuote() {
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.quotable.io/random",
    // Whether this is a POST or GET request
    type: "GET",
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
  })
  .done(function(data) {
    var author = data.author;
    var quote = data.content;
    console.log(data);
    $("#quote").html("<h4>"+quote+"</h4><br>- "+author);
  })
  .fail(function(request, error) {
    console.log(request, error);
  })
}

// when button is clicked, calls randomQuote()
$("#activate").click(randomQuote);
