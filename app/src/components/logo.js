import React from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.svg'

const Logo = styled.img`
  width: 106px;
  height: 110px;
  margin-top: 38px;
  margin-bottom: 38px;
`

export default () => (
  <Logo src={logo} />
)
