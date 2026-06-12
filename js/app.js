const radioContainer = document.querySelector(".radio-input-container");

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

// Event Listeners
radioContainer.addEventListener("change", (e) => {
  updateRadioUI(e.target);
})