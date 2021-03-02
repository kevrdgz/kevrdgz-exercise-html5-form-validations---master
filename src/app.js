const myForm = document.getElementById("formulario");

myForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log("submit been done");
  //variables
  let divalerta = document.getElementById("alerta");
  let cardnumber = document.getElementById("cardnumber");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let name = document.getElementById("name");
  let lastname = document.getElementById("lastname");
  let city = document.getElementById("city");
  let postal = document.getElementById("postal");
  let mensaje = document.getElementById("exampleFormControlTextarea1");
  let state = document.getElementById("state");
  let checkbox = document.getElementById("gridCheck");
  let checkbox2 = document.getElementById("gridCheck2");
  let checkbox3 = document.getElementById("gridCheck3");
  let checkbox4 = document.getElementById("gridCheck4");

  divalerta.style.textAlign = "center";
  //validacion card number
  if (!isNaN(cardnumber.value)) {
    cardnumber.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion cvc
  if (!isNaN(cvc.value)) {
    cvc.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion amount
  if (!isNaN(amount.value)) {
    amount.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion name
  if (
    name.value == null ||
    name.value.length == 0 ||
    /^\s+$/.test(name.value)
  ) {
    name.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion lastname
  if (
    lastname.value == null ||
    lastname.value.length == 0 ||
    /^\s+$/.test(lastname.value)
  ) {
    lastname.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion city
  if (
    city.value == null ||
    city.value.length == 0 ||
    /^\s+$/.test(city.value)
  ) {
    city.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion postal
  if (!isNaN(postal.value)) {
    postal.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion mensaje
  if (
    mensaje.value == null ||
    mensaje.value.length == 0 ||
    /^\s+$/.test(mensaje.value)
  ) {
    mensaje.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  // validacion select

  if (state.value == "Pick a state") {
    state.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion checkbox
  if (!checkbox.checked) {
    checkbox.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }
  if (!checkbox2.checked) {
    checkbox2.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }
  if (!checkbox3.checked) {
    checkbox3.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }
  if (!checkbox4.checked) {
    checkbox4.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }
});
