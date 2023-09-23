function readRadio() {
  let radios = document.querySelectorAll('input[name="choice"]')
  let currentChecked = document.querySelector('input[name="choice"]:checked')
  let selected = Array.from(radios).indexOf(currentChecked);
  let refResult = document.querySelector('#result')

  if (selected == -1) {
    refResult.innerHTML = "No s'ha seleccionat cap opció."
  } else {
    refResult.innerHTML = "Seleccionada: " + radios[selected].value
  }
}

function setRandom() {
  let radios = document.querySelectorAll('input[name="choice"]');
  let currentChecked = document.querySelector('input[name="choice"]:checked');
  let currentIndex = Array.from(radios).indexOf(currentChecked);

  // Obté un valor aleatori different a l’anterior
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * radios.length);
  } while (randomIndex === currentIndex); 

  radios[randomIndex].checked = true; // Aquí és on escull!
  readRadio();
}
