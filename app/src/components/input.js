import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from './../assets'

const Body = styled.div`
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
  justify-content: center;
  box-sizing: border-box;
  color: #FFFFFF;
  text-decoration: none;
  background: ${props => props.color.base};

  &:hover {
    background: ${props => props.color.hover};
  }

  &:active {
    background: ${props => props.color.active};
  }
`

const InputWord = styled.input`
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  width: 262px;
  height: 48px;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  box-sizing: border-box;
  padding: 0px 26px;
  &::placeholder {
    color: #fff;
  }
`

const Input = (props) => {
  const { color, style } = props
  const _color = COLORS[color]

  const [hover, setHover] = useState(false)

  return (
    <Body
      {...props}
      color={_color}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <InputWord type="text" {...props} style={{}} />
    </Body>
  )
}

export default Input
