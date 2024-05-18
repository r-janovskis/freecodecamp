function handleSubmit(e) {
  //e.preventDefault();
  const nameValue = document.getElementById("name").value;

  alert(nameValue);
}

function sayHello(e) {
  alert("Hello!");
  e.preventDefault();
}

const form = document.getElementById("survey-form");
form.addEventListener("submit", handleSubmit);

//document.getElementById("submit").addEventListener("click", sayHello);
