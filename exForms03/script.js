function readCheckboxes() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  let checkedValues = []

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) { checkedValues.push(checkbox.value); }
  })

  let resultDiv = document.getElementById('result')
  resultDiv.innerHTML = 'Seleccionades:'+checkedValues.join(', ')
}

function setRandomCheckbox() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // Deselecciona totes les caselles de verificació
  checkboxes.forEach(checkbox => { checkbox.checked = false; })

  let randomIndex = Math.floor(Math.random()*checkboxes.length)
  checkboxes[randomIndex].checked = true;

  readCheckboxes(); // Opcional: per mostrar l'opció seleccionada
}
