function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365 + Math.floor(yearsRemaining / 4); // Adding extra days for leap years
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12; 

  alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

// write your name in the braces
lifeInWeeks(16);
