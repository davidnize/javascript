// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Get the input year from the user
var year = prompt("Enter a year:");

// Convert the input to an integer
var parsedYear = parseInt(year);

// Check if it is a leap year using the function
if (isLeapYear(parsedYear)) {
    alert("Leap year.");
} else {
    alert("Not leap year.");
}
