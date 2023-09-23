function validate () {
    let refText = document.querySelector('#inText')
    let refAutoTip = document.querySelector('#autoTip')
    let text = refText.value
  
    if (text.length == 0) {
      refAutoTip.innerText = "No s'ha escrit res"
    } else {
      refAutoTip.innerText = `S'ha escrit: ${text}`
    }
}  