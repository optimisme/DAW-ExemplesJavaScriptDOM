function validar () {
    let refP0 = document.querySelector('#nom')
    let refOk = document.querySelector('#ok')
    let refKo = document.querySelector('#ko')

    if (refP0.validity.patternMismatch) {
      refOk.style.display = 'none'
      refKo.style.display = 'block'
    } else {
      refOk.style.display = 'block'
      refKo.style.display = 'none'
    }
}
  