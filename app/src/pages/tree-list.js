import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import Logo from './../components/logo.js'
import Input from './../components/input.js'
import Navigation from './../components/navigation.js'
import LinkButton from './../components/link-button.js'
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
  const dispatch = useDispatch()
  const trees = useSelector(store => store.trees)

  return (
    <Body isHeight={trees.length >= 2}>
      <Logo />
      <Navigation />
      <LinkButton to='/create-tree?to=true' color='blue' icon='arrow' style={{ marginBottom: '17px' }}>Добавить доску</LinkButton>
      {
        trees.map(({ id, title }, key) => (
          <LinkButton
            key={key}
            onClick={() => dispatch({ type: 'current-id', payload: id })}
            to='/tree-tab/?to=true'
            color='green'
            icon='minilist'
            style={{ marginBottom: '17px' }}
          >
            {title}
          </LinkButton>
        ))
      }
      <Prohetamine />
    </Body>
  )
}

export default TreeList
