function readSelectedOption() {
  let selectElement = document.getElementById('optionSelect');
  let selectedValue = selectElement.options[selectElement.selectedIndex].value;
  let resultDiv = document.getElementById('result');

  resultDiv.innerHTML = 'Seleccionada: ' + selectedValue;
}

function setRandomOption() {
  let selectElement = document.getElementById('optionSelect');
  let optionsCount = selectElement.options.length;
  let randomIndex = Math.floor(Math.random() * optionsCount);

  selectElement.selectedIndex = randomIndex;

  readSelectedOption(); // Opcional: mostrar l'opció
}