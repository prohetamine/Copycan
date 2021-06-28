import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'

const AppPathname = ({ children }) => {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const history = useHistory()

  useEffect(() => {
    history.push(store.appPathname)
  }, [store.appPathname !== null])

  useEffect(() => {
    history.listen(({ pathname }) => {
      dispatch({ type: 'history', payload: pathname })
    })

    return () => history.unlisten()
  }, [])

  return children
}

export default AppPathname
