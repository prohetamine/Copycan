import createId from './../lib/create-id.js'
import { createStore } from 'redux'

const defaultState = {
  currentId: 0,
  appWork: true,
  appPathname: '/get-started',
  settings: {
    eye_global_settings: false,
    eye_content_settings: false,
    eye_options_copy: false,
    urls: [],
    content_delete: false,
    save_time: true,
    save_date: true,
    save_link: true,
    cancel_event: false,
    from_tree: true
  },
  trees: []
}

let state = defaultState

try {
  state = JSON.parse(window.localStorage.appData)
} catch (e) {
  window.localStorage.appData = JSON.stringify(state)
}

const store = createStore((state, action) => {
  if (action.type === 'update-state') {
    return action.payload
  }

  if (action.type === 'work') {
    return {
      ...state,
      appWork: !state.appWork
    }
  }

  if (action.type === 'history') {
    return {
      ...state,
      appPathname: action.payload
    }
  }

  if (action.type === 'current-id') {
    return {
      ...state,
      currentId: action.payload
    }
  }

  if (action.type === 'create-tree') {
    return {
      ...state,
      trees: [
        ...state.trees,
        {
          title: action.payload,
          date_create: new Date() - 0,
          id: createId(),
          settings: state.settings,
          tabHistory: []
        }
      ]
    }
  }

  if (action.type === 'update-tree') {
    return {
      ...state,
      trees: action.payload
    }
  }

  if (action.type === 'update-tab-history') {
    return {
      ...state,
      trees: state.trees.map(
        tree => tree.id === action.payload.id
                  ? ({ ...tree, tabHistory: action.payload.tabHistory })
                  : tree
      )
    }
  }

  if (action.type === 'eye-global-settings') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          eye_global_settings: !tree.settings.eye_global_settings
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        eye_global_settings: !state.settings.eye_global_settings
      }
    }
  }

  if (action.type === 'eye-content-settings') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          eye_content_settings: !tree.settings.eye_content_settings
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        eye_content_settings: !state.settings.eye_content_settings
      }
    }
  }

  if (action.type === 'eye-options-copy') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          eye_options_copy: !tree.settings.eye_options_copy
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        eye_options_copy: !state.settings.eye_options_copy
      }
    }
  }

  if (action.type === 'update-urls') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                            urls: action.payload.urls
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        urls: action.payload
      }
    }
  }

  if (action.type === 'content-delete') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          content_delete: action.payload.time
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        content_delete: action.payload
      }
    }
  }

  if (action.type === 'save-time') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          save_time: !tree.settings.save_time
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        save_time: !state.settings.save_time
      }
    }
  }

  if (action.type === 'save-date') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          save_date: !tree.settings.save_date
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        save_date: !state.settings.save_date
      }
    }
  }

  if (action.type === 'save-link') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          save_link: !tree.settings.save_link
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        save_link: !state.settings.save_link
      }
    }
  }

  if (action.type === 'cancel-event') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          cancel_event: !tree.settings.cancel_event
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        cancel_event: !state.settings.cancel_event
      }
    }
  }

  if (action.type === 'from-tree') {
    if (action.payload && action.payload.id) {
      return {
        ...state,
        trees: state.trees.map(
          tree => tree.id === action.payload.id
                    ? ({
                        ...tree,
                        settings: {
                          ...tree.settings,
                          from_tree: !tree.settings.from_tree
                        }
                      })
                    : tree
        )
      }
    }

    return {
      ...state,
      settings: {
        ...state.settings,
        from_tree: !state.settings.from_tree
      }
    }
  }

  if (action.type === 'title') {
    return {
      ...state,
      trees: state.trees.map(
        tree => tree.id === action.payload.id
                  ? ({ ...tree, title: action.payload.value })
                  : tree
      )
    }
  }

  return state
}, state)

export default store
