/*HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 g
Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

let tomHeight = 9;
let tomMass = 8;

let jerryHeight = 10;
let jerryMass = 45;

let tomBMI = tomMass / (tomHeight * tomHeight);
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);
console.log(tomBMI, jerryBMI);

let whosBigger = false;
tomBMI = 500;
console.log(tomBMI, jerryBMI);

if (tomBMI > jerryBMI) {
  whosBigger = true;

  console.log(`Tom's BMI is higher then Jerry's! ${whosBigger}`);
} else {
  console.log(`Tom's BMI is higher then Jerry's! ${whosBigger}`);
}
