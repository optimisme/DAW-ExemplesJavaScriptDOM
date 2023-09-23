window.addEventListener('load', init)
async function init () {
    let refP0 = document.querySelector('#p0')
    refP0.innerHTML = '<p>innerHTML interpreta el codi HTML</p>'

    let refP1 = document.querySelector('#p1')
    refP1.innerText = '<p>innerText ho posa tot com a text</p>'
}
