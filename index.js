const user = prompt("Enter your name");
const heightcm = prompt("Enter your height in cm");
const heightM = heightcm / 100;
const weight = prompt("Enter your weight in kg");

function BMI(userName, userHeight, userWeight) {
  const bmiCalc = userWeight / (userHeight * userHeight);
  console.log(`The BMI for  ${userName} is ${bmiCalc}`);
  return bmiCalc;
}

const calculatedBMI = BMI(user, heightM, weight);


function healthy(BMI) {
  if (BMI > 18.5 && BMI <= 24.9) {
    console.log("healthy");
  } else if (BMI <= 18.5) {
    console.log("underweight");
  } else if (BMI >= 24.9) {
    console.log("overweight");
  }
}
healthy(calculatedBMI);

function getBMI(BMI) {
  return BMI;
}

