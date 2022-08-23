// input Field er Jonno
function getInputFieldValueById(inputId) {
  const element = document.getElementById(inputId);
  const elementString = element.value;
  const elementValue = parseInt(elementString);

  return elementValue;
}

// previous value er jonno
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const previousElementValue = parseInt(elementString);
  return previousElementValue;
}

// value k previous value te connection korar jonno
function setTextElementValueById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}






















//button disable
// <!-- working this disable button -->
function DisableButton() {
  document.getElementById("btn-taskin").disabled = "true";
}

function taskin() {
  document.getElementById("btn-taskin").disabled = true;
}
function shakib() {
  document.getElementById("btn-shakib").disabled = true;
}
function mashrafe() {
  document.getElementById("btn-mashrafe").disabled = true;
}
function mushfiqur() {
  document.getElementById("btn-mushfiqur").disabled = true;
}
function mustafiz() {
  document.getElementById("btn-mustafiz").disabled = true;
}
function mahmudullah() {
  document.getElementById("btn-mahmudullah").disabled = true;
}
