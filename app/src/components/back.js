import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COLORS, ICONS } from './../assets'

const Body = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`

const ButtonBody = styled(Link)`
  margin-left: 5px;
  margin-top: 5px;
  user-select: none;
  cursor: pointer;
  width: 39px;
  height: 39px;
  min-height: 39px;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #FFFFFF;
  background: ${props => props.color.base};

  &:hover {
    background: ${props => props.color.hover};
  }

  &:active {
    background: ${props => props.color.active};
  }
`

const Icon = styled(motion.img)`
  width: 16px;
  height: 16px;
`

const LinkButton = (props) => {
  const { color, icon } = props
  const _color = COLORS[color]
      , _icon = ICONS[icon]

  const [active, setActive] = useState(false)

  return (
    <ButtonBody
      {...props}
      color={_color}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
    >
      <Icon
        animate={{ scale: active ? [1, 0.8] : 1 }}
        transition={{ duration: 0.2 }}
        src={_icon}
      />
    </ButtonBody>
  )
}

const Back = () => {
  const clearId = () => {
    window.localStorage.currentId = undefined
  }

  return (
    <Body>
      <LinkButton onClick={() => clearId()} to='/tree-list?to=true' color='blue' icon='arrowleft' />
    </Body>
  )
}

export default Back
