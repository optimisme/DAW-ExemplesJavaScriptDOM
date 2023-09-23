window.addEventListener('load', init)
async function init () {
  let refText = document.querySelector('#inText')
  refText.addEventListener('keyup', update)
}

function update () {
  let refText = document.querySelector('#inText')
  let refAutoTip = document.querySelector('#autoTip')
  let text = refText.value

  if (text.length == 0) {
    refAutoTip.innerText = ""
  } else {
    refAutoTip.innerText = `Estàs escrivint: ${text}`
  }
}
