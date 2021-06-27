import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './app.js'

if (window.localStorage.data === undefined) {
  window.localStorage.data = JSON.stringify({
    settings: {
      urls: [],
      action_global_settings: false,
      action_content_settings: false,
      action_options_copy: false,
      content_delete: false,
      save_time: true,
      save_date: true,
      save_link: true,
      ctrlCx3: true
    },
    trees: []
  })

  window.localStorage.appPathname = '/get-started'
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
