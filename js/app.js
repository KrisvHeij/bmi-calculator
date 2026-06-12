const radioContainer = document.querySelector(".radio-input-container");
const metricRadio = document.getElementById("radio-metric");
const imperialRadio = document.getElementById("radio-imperial");



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
  
  updateBodyInputs(radioClicked.id)
}

function updateBodyInputs(unit) {
  console.log(unit)
}

radioContainer.addEventListener("change", (e) => {
  updateRadioUI(e.target);
})