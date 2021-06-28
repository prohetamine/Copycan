import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.svg'

const Logo = styled.img`
  width: 105px;
  height: 26px;
`

const Body = styled.div`
  width: 110px;
  height: 121px;
  margin-top: 38px;
  margin-bottom: 38px;
`

const Block = (() => {
  const Body = styled.div`
    width: 18px;
    height: 18px;
    background: ${props => props.bin ? '#9C9C9C' : '#D3D3D3'};
    border-radius: 4px;
    display: inline-block;
    margin: 2px;
  `

  return () => {
    const [bin, setBin] = useState()

    useEffect(() => {
      const timeId = setInterval(() => {
        setBin(Math.random() > 0.5)
      }, 1000)

      return () => timeId()
    }, [])

    return (
      <Body bin={bin} />
    )
  }
})()

export default () => (
  <Body>
    {
      Array(20).fill(1).map(
        (_, key) => (
          <Block key={key} />
        )
      )
    }
    <Logo src={logo} />
  </Body>
)
