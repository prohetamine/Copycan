document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/test', 'sum text here')
    const selection = document.getSelection()

    const range = selection.getRangeAt(0)
    const div = document.createElement('div')
    div.appendChild(range.cloneContents())
    const copy = div.innerText

    if (copy.length < 3000) {
      chrome.runtime.sendMessage({
        type: 'copycan',
        copy,
        time: new Date() - 0,
        date: new Date() - 0,
        link: location.href
      }, function (response) {})
    }

    event.clipboardData.setData('text/html', copy)
});
