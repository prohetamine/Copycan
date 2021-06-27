import React, { useEffect } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 18px;
`

const GithubLink = styled.a`
  color: #D3D3D3;
  font-weight: bold;
  margin: 0px 7px;
`

const By = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14.5px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #D3D3D3;
`

const KeyBoard = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14.5px;
  line-height: 17px;
  color: #D3D3D3;
`

const Prohetamine = () => {
  return (
    <Body>
      <By>By <GithubLink href='https://github.com/prohetamine/copycan'>Prohetamine</GithubLink> 2021</By>
      <KeyBoard>Made with ♥ keyboard</KeyBoard>
    </Body>
  )
}

export default Prohetamine
