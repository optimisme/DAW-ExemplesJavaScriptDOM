window.addEventListener('load', init)
async function init () {
    let refDestacat = document.querySelector('.destacat')
    refDestacat.innerHTML = 'Aquest és un paràgraf'

    let refContingut = document.querySelector('#contingut')
    refContingut.innerHTML = '<p>Aquest és un altre paràgraf</p>'
}