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

/* original attempt
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
*/

/* Provided Solution
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
*/

/* If / else statements
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 192;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log("Mark's BMI is higher than John's");
} else {
	console.log("John's BMI is higher than Mark's");
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
   If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var teamJohnMean = (89 + 120 + 103) / 3;
var teamMikeMean = (116 + 94 + 123) / 3;
var teamMaryMean = (97 + 134 + 105) / 3;

console.log(teamJohnMean, teamMikeMean, teamMaryMean);
if (teamJohnMean > teamMikeMean && teamJohnMean > teamMaryMean) {
	console.log(" John's team had the highest team average of " + teamJohnMean);
} else if (teamMikeMean > teamJohnMean && teamMikeMean > teamMaryMean) {
	console.log(" Mike's team had the highest team average of " + teamMikeMean);
} else if (teamMaryMean > teamJohnMean && teamMaryMean > teamMikeMean) {
	console.log(" Mary's team had the highest team average of " + teamMaryMean);
} else {
	console.log('There is a draw');
}

// Test different scores and tie scores
var teamJohnMean = (100 + 120 + 80) / 3;
var teamMikeMean = (150 + 120 + 75) / 3;
var teamMaryMean = (100 + 120 + 80) / 3;

console.log(teamJohnMean, teamMikeMean, teamMaryMean);
if (teamJohnMean > teamMikeMean && teamJohnMean > teamMaryMean) {
	console.log(" John's team had the highest team average of " + teamJohnMean);
} else if (teamMikeMean > teamJohnMean && teamMikeMean > teamMaryMean) {
	console.log(" Mike's team had the highest team average of " + teamMikeMean);
} else if (teamMaryMean > teamJohnMean && teamMaryMean > teamMikeMean) {
	console.log(" Mary's team had the highest team average of " + teamMaryMean);
} else {
	console.log('There is a draw');
}

/* Solution provided
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/
