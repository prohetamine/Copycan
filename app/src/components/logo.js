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
    background: ${
      props => props.bin > 0.3 && props.bin < 0.4
                ? '#9C9C9C'
                : props.bin > 0.6 && props.bin < 1
                    ? '#D3D3D3'
                    : Math.random() > 0.5 ? '#1183B5' : '#11B570'
    };
    border-radius: 4px;
    display: inline-block;
    margin: 2px;
  `

  return () => {
    const [bin, setBin] = useState(Math.random())

    useEffect(() => {
      const timeId = setInterval(() => {
        setBin(Math.random())
      }, 1000)

      return () => clearInterval(timeId)
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
