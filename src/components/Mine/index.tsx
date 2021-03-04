import React from 'react'

import {
  Container,
  CoreMine,
  HorizontalLine,
  VerticalLine,
  RightLine,
  LeftLine
} from './styles'

const Mine: React.FC = () => {
  return (
    <Container>
      <CoreMine />
      <HorizontalLine />
      <VerticalLine />
      <RightLine />
      <LeftLine />
    </Container>
  )
}

export default Mine
