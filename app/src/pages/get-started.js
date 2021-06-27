import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import createId from './../lib/create-id.js'

import Logo from './../components/logo.js'
import LinkButton from './../components/link-button.js'
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

const GetStarted = () => {
  const history = useHistory()

  const createTree = () => {
    const { trees, settings } = JSON.parse(window.localStorage.data)

    window.localStorage.data = JSON.stringify({
      trees: [
        ...trees,
        {
          title: '#' + parseInt(Math.random() * 100) + 899,
          date_create: 100000000000,
          id: createId(),
          settings,
          tab: []
        }
      ],
      settings
    })

    history.push('/tree-list?to=true')
  }

  return (
    <Body>
      <Logo />
      <LinkButton to='/create-tree?to=true' color='blue' icon='arrow' style={{ marginBottom: '17px' }}>Добавить доску</LinkButton>
      <Button onClick={() => createTree()} color='green' icon='symbol'>Приступить к работе</Button>
      <Prohetamine />
    </Body>
  )
}

export default GetStarted
