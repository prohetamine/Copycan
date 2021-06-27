const getState = () => JSON.parse(window.localStorage.appData)
const setState = state => window.localStorage.appData = JSON.stringify(state)

const Notify = message => new Promise(res => {
  const notifyId = Math.random()+''

  chrome.notifications.create(notifyId, {
    type: 'basic',
    iconUrl: '../assets/empty.png',
    title: 'Copycan',
    message,
    priority: 2
  })

  chrome.notifications.onClicked.addListener(() => {
    chrome.notifications.clear(notifyId)
    res(true)
    chrome.notifications.onClicked.removeListener(arguments.callee)
  })
  setTimeout(() => {
    chrome.notifications.clear(notifyId)
    res(false)
  }, 6000)
})

const copycan = async ({
  type = 'text',
  copy = '',
  id = 'id'+(new Date() - 0).toString().slice(0, -3),
  create_time = new Date() - 0,
  link = 'Без ссылки',
  time = (d => (m => m.toString().length > 1 ? m : '0'+m)(d.getHours())+':'+(m => m.toString().length > 1 ? m : '0'+m)(d.getMinutes()))(new Date()),
  date = (d => (d => d.toString().length > 1 ? d : '0'+d)(d.getDate())+'/'+(m => m.toString().length > 1 ? m : '0'+m)(d.getMonth())+'/'+d.getFullYear())(new Date())
}) => {
  let state = getState()
  const currentId = state.currentId
  const current = state.trees.find(tree => tree.id === currentId) || false
  const isText = !!(type === 'text')

  if (!state.appWork) {
    return
  }

  if (!!current) {
    const { settings, title } = current

    let text = ''

    if (settings.from_tree) {
      text += `Из доски: ${title}\n\n`
    }

    text += copy.length === 0 ? 'Без текста' : copy

    if (settings.save_time) {
      text += `\n\nВремя: ${time}`
    }

    if (settings.save_time && settings.save_date) {
      text += `, дата: ${date}`
    } else {
      text += `\n\nДата: ${date}`
    }

    if (settings.save_link && link) {
      text += `\nСсылка: ${link}`
    }

    if (isText && settings.cancel_event) {
      const isCopy = !(await Notify('Нажми чтобы отменить копирование'))

      if (!isCopy) {
        return
      }
    }

    if (!isText) {
      const isCopy = await Notify('Нажми чтобы копировать ссылку на файл')

      if (!isCopy) {
        return
      }
    }

    try {
      settings.urls.map(url =>
        fetch(url.replace('=copycan', `=${encodeURIComponent(text)}`))
      )
    } catch (e) {}

    state = {
      ...state,
      trees: state.trees.map(
        tree => tree.id === currentId
          ? ({
                ...tree,
                tabHistory: [
                  {
                    text,
                    id,
                    create_time
                  },
                  ...tree.tabHistory
                ]
            })
          : tree
      )
    }
  }

  setState(state)
}

chrome.tabs.onActiveChanged.addListener(id => {
  chrome.tabs.get(id, ({
    pendingUrl = ''
  } = {}) => {
    if (!pendingUrl.match(/\.(png|jpeg|jpg|gif|svg|mp4|mp3|ogg|wav|webp|webm|pdf|bmp|doc|хls|pst|swf|djvu|avi|flv|stl)$/gi)) {
      return
    }

    const link = false
        , copy = pendingUrl

    copycan({
      copy,
      link,
      type: 'image'
    })
  })
})

chrome.runtime.onMessage.addListener(copycan)

setInterval(() => {
  let state = getState()

  state = {
    ...state,
    trees: state.trees.map(
      tree => ({
        ...tree,
        tabHistory: tree.tabHistory.filter(
          row => tree.settings.content_delete !== false
                  ? new Date() < row.create_time + tree.content_delete
                  : true
        )
      })
    )
  }

  setState(state)
}, 10000)
