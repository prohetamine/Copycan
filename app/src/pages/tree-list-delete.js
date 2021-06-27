import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import Logo from './../components/logo.js'
import Input from './../components/input.js'
import Navigation from './../components/navigation.js'
import Button from './../components/button.js'
import Prohetamine from './../components/prohetamine.js'

const Body = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${
    props => props.isHeight
      ? `padding-bottom: 61px;`
      : `height: 500px;`
  }
`

const TreeList = () => {
  const { trees, settings } = JSON.parse(window.localStorage.data)
  const [list, setList] = useState(trees)

  useEffect(() => {
    const { trees, settings } = JSON.parse(window.localStorage.data)

    window.localStorage.data = JSON.stringify({
      trees: list,
      settings
    })
  }, [list.length])

  return (
    <Body isHeight={list.length >= 2}>
      <Logo />
      <Navigation />
      <Button
        onClick={() => setList(l => [])}
        color='red'
        icon='delete'
        style={{ marginBottom: '17px' }}
      >
        Удалить все
      </Button>
      {
        list.map(({ id, title }, key) => (
          <Button
            key={key}
            onClick={() => setList(l => l.filter(t => t.id !== id))}
            color='blue'
            icon='delete'
            style={{ marginBottom: '17px' }}
          >
            {title}
          </Button>
        ))
      }
      <Prohetamine />
    </Body>
  )
}

export default TreeList
