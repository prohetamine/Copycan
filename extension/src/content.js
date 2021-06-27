const noneCopy = '<#!!!! NO TEXT COPY !!!!#>' // null text
let copy = noneCopy

document.addEventListener('copy', (event) => {
    const text = window
                .getSelection()
                .toString()
                .replace(/\u200B/g, "")

    const clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData
    clipboardData.setData('text/html', text)
    copy = text

    setTimeout(() => {
      copy = noneCopy
    }, 1000)
})

document.addEventListener('paste', (event) => {
  if (copy !== noneCopy && copy.length < 3000) {
    chrome.runtime.sendMessage({
      copy,
      link: location.href
    }, function (response) {})
  }
})
