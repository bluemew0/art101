// Summary. Lab 16 - JSON & APIs
// Description. Working with JSON and APIs.
// Author: Ashley Lu
// Created:  2021.12.01

// function that
var comicObj = $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
      var comicTitle = data.title;
      var comicImg = data.img;
      var comicAlt = data.alt;
      $("#output").html("<h4>"+comicTitle+"</h4><br><img src="+comicImg+"><br><p>Alt text: "+comicAlt+"</p>");
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  })
