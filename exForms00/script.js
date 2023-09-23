function validar () {
    let refP0 = document.querySelector('#nom')
    let refOk = document.querySelector('#ok')
    let refKo = document.querySelector('#ko')
    let text = refP0.value
    let regex = new RegExp('\\d') // Validació de si té números
    
    let teNumeros = regex.test(text)
    if (teNumeros) {
      refOk.style.display = 'none'
      refKo.style.display = 'block'
    } else {
      refOk.style.display = 'block'
      refKo.style.display = 'none'
    }
}
  