function addElement() {
    let colors = ["orange", "lime", "yellow", "aquamarine", "green", "red"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    let numAleatori = Math.random().toFixed(2)
  
    // Crear un nou element tipus “div”
    let newElement = document.createElement('div')
    newElement.innerHTML = 'Sóc un nou element! ' + numAleatori
    newElement.setAttribute("style", `background-color: ${randomColor};`)
  
    let container = document.getElementById('container')
    container.appendChild(newElement);
  }
  function removeElement() {
    // Obtenir el contenidor i l'últim fill afegit
    let container = document.getElementById('container')
    let lastChild = container.lastChild;
  
    // Si hi ha fills, eliminar l'últim
    if (lastChild) {
      container.removeChild(lastChild);
    }
  }
  