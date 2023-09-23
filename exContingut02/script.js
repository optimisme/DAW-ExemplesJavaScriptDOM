function substitueix () {
    // Substituir el 'Fill 1' per un nou div amb un número aleatori
    let fill1 = document.getElementById('child1')
    let numAleatori = Math.random().toFixed(2)

    // Definir el nou element
    let newElement = document.createElement('div')
    newElement.setAttribute("id", "child1")
    newElement.innerHTML = 'Nou Fill 0: ' + numAleatori

    // A través del 'parentNode' es pot accedir al pare i substituir el fill
    fill1.parentNode.replaceChild(newElement, fill1)
}
