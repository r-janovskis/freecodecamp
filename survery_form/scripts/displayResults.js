import { formValues } from "./parseForm.js";

// Fill in elements in HTML page
function parseResults() {
  const results_page = document.getElementById("results_place");
  for (key of formValues) {
    results_page.insertAdjacentHTML(
      "beforeend",
      `<p><strong>${key}</strong> ${formValues[key]}</p>`
    );
  }
}

// add event listener for results page
document.getElementById("results_page").addEventListener("load", parseResults);
