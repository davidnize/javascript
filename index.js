var name = prompt("What is your first name?");
var surname = prompt("What is your Surname");

var firstChar = name.slice(0,1);

var cap = firstChar.toUpperCase();

var surChar = surname.slice(0,1);

var surCap = surChar.toUpperCase();

var restOfChar = name.slice(1,name.length);

var restOfSur = surname.slice(1,surname.length);

var lower = restOfChar.toLowerCase();

var surLower = restOfSur.toLowerCase();

var fullName = cap + lower + " " + surCap + surLower;

alert("Hey " + fullName);


