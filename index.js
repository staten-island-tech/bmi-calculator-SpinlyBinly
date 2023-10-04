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

/* //10/4/23
function test(x) {
  if (x < 10) { //two == works, === checks (3 more precise) 
    console.log("less");
  } else if(x > 15) {
     {console.log("big ole number");
    } else {
      console.log("something else");
    }
} */
function test(x, y) {
  if (x < 5 && y < 5) {
    console.log("small");
  } else if (x > 5 || y > 5) {
    console.log("at least 1 large number");
  }
}

function getBMI(h, w) {
  return BMI;
}

function healthy(BMI) {
  //if/then logic
  console.log;
  ("healthy etc.");
}

function init() {
  //getweight
  //getheight
  const BMI = getBMIhealthy(BMI);
}
