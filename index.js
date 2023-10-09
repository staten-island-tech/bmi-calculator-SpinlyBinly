const user = prompt("Enter your name");
const heightcm = prompt("Enter your height in cm");
const heightM = heightcm / 100;
const weight = prompt("Enter your weight in kg");

function BMI(userName, userHeight, userWeight) {
  const bmiCalc = userWeight / (userHeight * userHeight);
  console.log(`The BMI for  ${userName} is ${bmiCalc}`);
}

BMI(user, heightM, weight);

function getBMI(x, y) {
  return BMI;
}


function healthy(BMI) {
  if (18.5 < x > 24.9) {
    console.log("healthy");
  } else if (x <= 18.5) {
    console.log("underweight");
  }
  } else if (x >= 24.9) {
    console.log("overweight");
  }


function init() {
  //getweight
  //getheight
  const BMI = getBMIhealthy(BMI);
}
