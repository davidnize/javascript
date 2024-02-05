// Prompting the user for their names
var yourName = prompt("What is your Name?");
var theirName = prompt("What is their Name?");

// Generating a random love score percentage between 1 and 100
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// Displaying the love score to the user
alert("Your love score with " + theirName + " is " + loveScore + "%");


