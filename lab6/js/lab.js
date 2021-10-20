// Summary. Lab 6 - Arrays & Objects

// Description. Declaring and outputting JavaScript arrays and objects
// @author Ashley Lu
// @since  2021.10.21

// declaring arrays and objects
var myTransport = ["car", "bus", "walk"];
var myMainRide = { make: "Kia",
                   model: "Rio",
                   color: "Silver",
                   year: 2021,
                   age: 0 };

// output
document.writeln("Getting around: <pre>" + myTransport + "</pre><br>");
document.writeln("My Main Ride: <pre>",
                 JSON.stringify(myMainRide, null, '\t'),
                 "</pre>");
