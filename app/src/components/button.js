import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { COLORS, ICONS } from './../assets'

const Body = styled.div`
  user-select: none;
  cursor: pointer;
  width: 268px;
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
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 26px;
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


const Button = (props) => {
  const { color, icon, children } = props
  const _color = COLORS[color]
      , _icon = ICONS[icon]

  const [active, setActive] = useState(false)

  const normalizeChildren = (
    c =>
      c.length > 19
        ? c.slice(0, 19) + '...'
        : c
  )(
    children
  )

  return (
    <Body
      {...props}
      color={_color}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
    >
      {normalizeChildren}
      <Icon
        animate={{ scale: active ? [1, 0.8] : 1 }}
        transition={{ duration: 0.2 }}
        src={_icon}
      />
    </Body>
  )
}

export default Button
