const formValues = {};

function gatherFormData() {
  formValues.name = document.getElementById("name").value;
  formValues.email = document.getElementById("email").value;
  formValues.age = document.getElementById("number").value;
  formValues.occupation = document.getElementById("dropdown").value;

  // Process radiobutton input
  const radio_buttons = document.querySelectorAll(".radio");
  for (let i = 0; i < radio_buttons.length; i++) {
    if (radio_buttons[i].checked) {
      formValues.satisfaction = radio_buttons[i].value;
      break;
    }
  }

  // Process checkbox input
  const checkboxes = document.querySelectorAll(".checkbox");
  const improvements = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      improvements.push(checkboxes[i].value);
    }
  }
  formValues.improvements = improvements;

  formValues.comment = document.getElementById("comment").value;

  let output = "";

  for (key in formValues) {
    output = output + `${key} -> ${formValues[key]}\n`;
  }

  return output;
}

function handleSubmit(e) {
  //e.preventDefault();
  const output = gatherFormData();

  alert(output);
}

const form = document.getElementById("survey-form");
form.addEventListener("submit", handleSubmit);
