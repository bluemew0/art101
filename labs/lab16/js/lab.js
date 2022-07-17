// Summary. Lab 16 - JSON & APIs
// Description. Working with JSON and APIs.
// Author: Ashley Lu
// Created:  2021.12.01

var comicObj = $.ajax({
    url: "https://xkcd.com/info.0.json",
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
