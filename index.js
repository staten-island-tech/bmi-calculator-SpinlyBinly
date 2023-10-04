const user = prompt("Enter your name");
const heightcm = prompt("Enter your height in cm");
const heightM = heightcm / 100;
const weight = prompt("Enter your weight in kg");

function BMI(userName, userHeight, userWeight) {
const bmiCalc = userWeight / (userHeight * userHeight);
    console.log(`The BMI for  ${userName} is ${bmiCalc}`);
  }
  
  BMI(user, heightM, weight); 
