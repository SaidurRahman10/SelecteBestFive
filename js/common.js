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
