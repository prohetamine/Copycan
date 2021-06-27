import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AnimationPages from './components/animation-pages'
import GetStarted from './pages/get-started'
import CreateTree from './pages/create-tree'
import TreeList from './pages/tree-list'
import TreeListSettings from './pages/tree-list-settings'
import TreeTabSettings from './pages/tree-tab-settings'
import TreeListDelete from './pages/tree-list-delete'
import TreeTab from './pages/tree-tab'

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route
          path='/get-started'
          render={
            () => (
              <AnimationPages>
                <GetStarted />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/create-tree'
          component={
            () => (
              <AnimationPages>
                <CreateTree />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/tree-list'
          component={
            () => (
              <AnimationPages>
                <TreeList />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/tree-list-settings'
          component={
            () => (
              <AnimationPages>
                <TreeListSettings />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/tree-tab-settings'
          component={
            () => (
              <AnimationPages>
                <TreeTabSettings />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/tree-list-delete'
          component={
            () => (
              <AnimationPages>
                <TreeListDelete />
              </AnimationPages>
            )
          }
        />
        <Route
          path='/tree-tab'
          component={
            () => (
              <AnimationPages>
                <TreeTab location={location} />
              </AnimationPages>
            )
          }
        />
      </Switch>
    </AnimatePresence>
  )
}

export default App
