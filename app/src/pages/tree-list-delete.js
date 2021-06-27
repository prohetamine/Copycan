import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
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

const TreeListDelete = () => {
  const trees = useSelector(store => store.trees)
  const dispatch = useDispatch()

  return (
    <Body isHeight={trees.length >= 2}>
      <Logo />
      <Navigation />
      <Button
        onClick={
          () =>
            dispatch({
              type: 'update-tree',
              payload: []
            })
        }
        color='red'
        icon='delete'
        style={{ marginBottom: '17px' }}
      >
        Удалить все
      </Button>
      {
        trees.map(({ id, title }, key) => (
          <Button
            key={key}
            onClick={
              () =>
                dispatch({
                  type: 'update-tree',
                  payload: trees.filter(
                            tree =>
                              tree.id !== id
                           )
                })
            }
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

export default TreeListDelete
