import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import queryString from 'query-string'

import TopNavigation from './../components/top-navigation.js'
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
  width: 273px;
  color: #3C3C3C;
  margin-top: 20px;
  margin-bottom: 25px;
`

const B = styled.span`
  font-weight: 900;
`

const Select = styled.span`
  padding: 0px 4px;
  background: #eee;
  color: #333;
  border-radius: 3px;
`

const Description = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
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

const TreeTab = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  const { title, tabHistory } = store.trees.find(tree => tree.id === store.currentId) || ({ title: '', tabHistory: [] })

  return (
    <Body isHeight={tabHistory.length >= 3}>
      <TopNavigation />
      {
        tabHistory.length !== 0
          ? (
            <Title>{title}</Title>
          )
          : (
            <Description>?????? ???????????????? ??<B>{title}</B>?? ?????? ?????? ?????????????????????????? ????????????????, ???????????????? ?????????????????????? ?????????? ?? ?????????????????????? ?????????????????? ???????????? <Select>Ctrl + C</Select> ?????????? ?????????? <Select>Ctrl + V</Select></Description>
          )
      }
      {
        tabHistory.map(({ text, id }, key) => (
          <Textarea
            value={text}
            onBlur={
              () =>
                dispatch({
                  type: 'update-tab-history',
                  payload: {
                    id: store.currentId,
                    tabHistory: tabHistory.filter(row => row.text !== '')
                  }
                })
            }
            onChange={
              ({ target: { value } }) => {
                dispatch({
                  type: 'update-tab-history',
                  payload: {
                    id: store.currentId,
                    tabHistory: tabHistory.map(
                      row => row.id === id
                        ? ({ ...row, text: value })
                        : row
                    )
                  }
                })
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
