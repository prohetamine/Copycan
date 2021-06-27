import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COLORS, ICONS } from './../assets'

const Body = styled.div`
  display: flex;
  width: 231px;
  justify-content: space-between;
  margin-bottom: 24px;
`

const ButtonStyles = props => `
  user-select: none;
  cursor: pointer;
  width: 54px;
  height: 54px;
  min-height: 54px;
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
  padding: 0px 26px;
  color: #FFFFFF;
  background: ${props.color.base};

  &:hover {
    background: ${props.color.hover};
  }

  &:active {
    background: ${props.color.active};
  }
`

const ButtonBody = styled.div(ButtonStyles)
const LinkButtonBody = styled(Link)(ButtonStyles)

const Icon = styled(motion.img)`
  width: 32px;
  height: 32px;
`

const LinkButton = (props) => {
  const { color, icon } = props
  const _color = COLORS[color]
      , _icon = ICONS[icon]

  const [active, setActive] = useState(false)

  return (
    <LinkButtonBody
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
    </LinkButtonBody>
  )
}

const Button = (props) => {
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

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <Body>
      <Button onClick={() => console.log('click')} color='red' icon='offon' />
      <LinkButton
        style={{ pointerEvents: pathname === '/tree-list-settings' ? 'none' : 'auto' }}
        to='/tree-list-settings?to=true'
        color='blue'
        icon='settings'
      />
      <LinkButton
        style={{ pointerEvents: pathname === '/tree-list-delete' ? 'none' : 'auto' }}
        to='/tree-list-delete?to=true'
        color='blue'
        icon='trash'
      />
      <LinkButton
        style={{ pointerEvents: pathname === '/tree-list' ? 'none' : 'auto' }}
        to='/tree-list?to=true'
        color='green'
        icon='list'
      />
    </Body>
  )
}

export default Navigation
