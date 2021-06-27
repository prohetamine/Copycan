import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import Logo from './../components/logo.js'
import Input from './../components/input.js'
import Button from './../components/button.js'
import Prohetamine from './../components/prohetamine.js'


const Body = styled.div`
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const CreateTree = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState('')

  const createTree = () => {
    if (title.length !== 0) {
      dispatch({ type: 'create-tree', payload: title })
      history.push('/tree-list?to=true')
    }
  }

  return (
    <Body>
      <Logo />
      <Input
        color='blue'
        value={title}
        placeholder='Название доски...'
        style={{ marginBottom: '17px' }}
        onChange={({ target: { value } }) => setTitle(value)} />
      <Button onClick={() => createTree()} color='blue' icon='plus' style={{ marginBottom: '17px' }}>Создать</Button>
      <Button onClick={() => history.goBack()} color='blue' icon='arrow'>Назад</Button>
      <Prohetamine />
    </Body>
  )
}

export default CreateTree
