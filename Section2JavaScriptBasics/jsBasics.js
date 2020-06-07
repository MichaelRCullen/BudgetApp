/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// Provided Solution
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// original attempt
var markMass = 78;
var johnMass = 92;
var markHeight = 1.69;
var johnHeight = 1.95;
var markBMI = markMass / Math.pow(markHeight, 2);
var johnBMI = johnMass / Math.pow(johnHeight, 2);

var markGreaterBMI = markBMI > johnBMI;
console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);
console.log(" Is Mark's BMI higher than John's? " + markGreaterBMI);
