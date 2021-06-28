import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useHistory } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'
import AppPathname from './components/app-pathname'
import App from './app.js'
import store from './store'

window.localStorage.badgeText = '0'

store.subscribe(() => {
  window.localStorage.appData = JSON.stringify(store.getState())
})

setInterval(() => {
  const currentState = JSON.stringify(store.getState())
  const newState = window.localStorage.appData

  if (currentState.length !== newState.length) {
    store.dispatch({ type: 'update-state', payload: JSON.parse(newState) })
  }
}, 2000)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppPathname>
        <App />
      </AppPathname>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
