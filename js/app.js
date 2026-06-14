const radioContainer = document.querySelector(".radio-input-container");
const inputContainer = document.querySelector(".body-inner-container");

let measurementUnit = "metric";
let resultBmi;

const weightClassification = [
  {
    name: "underweight",
    min: 0,
    max: 18.4,
  },
  {
    name: "healthy weight",
    min: 18.5,
    max: 24.9
  },
  {
    name: "overweight",
    min: 25,
    max: 29.9
  },
  {
    name: "obese",
    min: 30,
    max: 100
  }
];

function updateRadioUI(radio) {
  const radioBtns = document.querySelectorAll(".radio-input");
  const radioClicked = radio;
  // Reset styles from radio inputs
  radioBtns.forEach((radio) => {
    radio.removeAttribute("checked");
    radio.classList.remove("radio-input-checked");
  })

  // Add styles to clicked radio input
  radioClicked.setAttribute("checked", "");
  radioClicked.classList.add("radio-input-checked");
  
  measurementUnit = radioClicked.id;
  updateBodyInputs(radioClicked)
}

function updateBodyInputs(unit) {
  const metricInputs = document.querySelectorAll(".metric-input");
  const imperialInputs = document.querySelectorAll(".imperial-input-group");

  metricInputs.forEach((input) => {
      input.classList.toggle("hidden");
    })
  imperialInputs.forEach((input) => {
      input.classList.toggle("hidden");
    })
}

function hightlightInputs() {
  const allMeasurementInputs = document.querySelectorAll("input[type=number]");

  allMeasurementInputs.forEach((input) => {
    if (input.value > 0) {
      input.style.color = "var(--c-blue-900)";
    }
  })
}

function calculateMetricBmi() {
  const heightCm = parseInt(document.getElementById("height-metric-cm").value);
  const weightKg = parseInt(document.getElementById("weight-metric-kg").value);
  
  resultBmi = weightKg / ((heightCm / 100) * (heightCm / 100));

  if (heightCm > 0 && weightKg > 0) {
    showBmiResult(resultBmi)
  } 
}

function calculateImperial() {
  const heightFeet = parseInt(document.getElementById("height-imperial-ft").value);
  const heightInches = parseInt(document.getElementById("height-imperial-in").value);
  const weightStone = parseInt(document.getElementById("weight-imperial-st").value);
  const weightPounds = parseInt(document.getElementById("weight-imperial-lbs").value);
 
  const heightInInches = (heightFeet * 12) + heightInches;
  const weightInLbs = (weightStone * 14) + weightPounds;

  resultBmi = (weightInLbs / (heightInInches * heightInInches)) * 703;

  if (heightInInches > 0 && weightInLbs > 0) {
    showBmiResult(resultBmi);
  }
}

function showBmiResult(result) {
  const weightRange = weightClassification.find((item) => item.min < result && item.max > result);

  console.log(weightRange)
}

// Event Listeners
radioContainer.addEventListener("change", (e) => {
  updateRadioUI(e.target);
})

inputContainer.addEventListener("keyup", () => {
  hightlightInputs()
  if (measurementUnit === "metric") {
    calculateMetricBmi();
  }

  if (measurementUnit === "imperial") {
    calculateImperial();
  }
})

// Verder met showBmiResult()




