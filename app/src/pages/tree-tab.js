import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, Link, useHistory, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import queryString from 'query-string'

import Back from './../components/back.js'
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

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 273px;
  color: #3C3C3C;
  margin-top: 20px;
  margin-bottom: 25px;
`

const Textarea = styled.textarea`
  width: 341px;
  min-width: 341px;
  height: 107px;
  min-height: 107px;
  resize: none;
  background: #409CC3;
  border: 3px solid #1183B5;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  user-select: none;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  margin-bottom: 14px;
`

const TreeTab = ({ location }) => {
  const { trees, settings: _settings } = JSON.parse(window.localStorage.data)

  const id = location.match.params.id
      , { settings, title, tab } = trees.find(tree => tree.id === id)

  const [rows, setRow] = useState(tab)

  useEffect(() => {
    window.localStorage.currentId = id
  }, [id])

  useEffect(() => {
    window.localStorage.data = JSON.stringify({
      trees: trees.map(
              tree =>
                tree.id === id
                  ? ({
                      ...tree,
                      tab: rows
                    })
                  : tree
             ),
      settings: _settings
    })
  }, [rows.length, rows.map(({ copy }) => copy).join('+')])

  return (
    <Body isHeight={rows.length >= 2}>
      <Back />
      <Title>{title}</Title>
      {
        rows.map(({ copy, time }, key) => (
          <Textarea
            value={copy}
            onBlur={() => setRow(r => r.filter(r => r.copy !== ''))}
            onChange={
              ({ target: { value } }) => {
                setRow(
                  rows => rows.map(
                    row => row.time === time
                      ? ({ ...row, copy: value })
                      : row
                  )
                )
              }
            }
            key={key}
          />
        ))
      }
      <Prohetamine />
    </Body>
  )
}

export default TreeTab
