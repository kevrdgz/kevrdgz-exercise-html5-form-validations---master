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
  let radio1 = document.getElementById("flexRadioDefault1");
  let radio2 = document.getElementById("flexRadioDefault2");
  let radio3 = document.getElementById("flexRadioDefault3");
  let radio4 = document.getElementById("flexRadioDefault4");

  divalerta.style.textAlign = "center";
  //validacion card number
  if (cardnumber.value == "") {
    cardnumber.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion cvc
  if (cvc.value == "") {
    cvc.style.backgroundColor = "#FF9595";

    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }

  //validacion amount
  if (amount.value == "") {
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
  if (postal.value == "") {
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

  //validacion radio box
  if (
    !radio1.checked &&
    !radio2.checked &&
    !radio3.checked &&
    !radio4.checked
  ) {
    radio1.style.backgroundColor = "#FF9595";
    radio2.style.backgroundColor = "#FF9595";
    radio3.style.backgroundColor = "#FF9595";
    radio4.style.backgroundColor = "#FF9595";
    divalerta.style.backgroundColor = "#FF9595";
    divalerta.innerHTML = "<p>some fields are missing</p>";
  }
});
