// Prompt the user for their first name and store it in the variable Fname
var Fname = prompt("Please enter your first name:");

// Display a welcome message with the user's name
var welcomeMessage = "Hello " + Fname + ", welcome!";

// Create a constant to store the value of Pi to 7 significant digits
const myPi = 3.1415926;

// Ask the user to input their favorite number and store it in myFavNum
var myFavNum = parseFloat(prompt("What's your favorite number?"));

// Calculate the area of a circle using the user's favorite number as the radius (r)
var myArea = myPi * Math.pow(myFavNum, 2);

// Create messages to display the variables and their descriptions
var nameMessage = "You entered your first name as: " + Fname;
var numberMessage = "You entered " + myFavNum + " as your favorite number.";
var areaMessage = "If that was the radius of a circle, the circle's area would be " + myArea.toFixed(3) + ".";

// Display the contents of each variable on the webpage
document.write(welcomeMessage + "<br>");
document.write(nameMessage + "<br>");
document.write(numberMessage + "<br>");
document.write(areaMessage);
