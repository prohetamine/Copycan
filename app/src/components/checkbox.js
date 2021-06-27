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


const Checkbox = (props) => {
  const { color, children, value } = props
  const _color = COLORS[color]
      , enable = ICONS['enable']
      , disable = ICONS['disable']

  const [hover, setHover] = useState(false)

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
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {normalizeChildren}
      <Icon
        src={value ? enable : disable}
      />
    </Body>
  )
}

export default Checkbox
