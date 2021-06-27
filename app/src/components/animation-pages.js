import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Route, Link, useHistory, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import queryString from 'query-string'

const Body = styled(motion.div)`
  margin: 0;
  width: 360px;
`

const AnimationPages = ({ children }) => {
  const location = useLocation()
      , parsed = queryString.parse(location.search)

  const propsAnimation = ({
    to: {
      initial: { x: 360 },
      animate: { x: 0 },
      exit: { x: -360 },
      transition: { duration: 0.3 }
    },
    from: {
      initial: { x: -360 },
      animate: { x: 0 },
      exit: { x: 360 },
      transition: { duration: 0.3 }
    },
    none: {
      initial: { x: 0 },
      animate: { x: 0 },
      exit: { x: -360 },
      transition: { duration: 0.3 }
    }
  })[
    parsed.to === 'true'
      ? 'to'
      : parsed.from === 'true'
          ? 'from'
          : 'none'
  ]

  return (
    <Body
      {...propsAnimation}
    >
      {children}
    </Body>
  )
}

export default AnimationPages
