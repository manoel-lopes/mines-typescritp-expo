import React from 'react'

import {
  Container,
  RedFlag,
  RedFlagPole,
  BaseOne,
  BaseTwo,
  BiggerRedFlag,
  BiggerRedFlagPole,
  BiggerBaseOne,
  BiggerBaseTwo
} from './styles'

const Flag: React.FC<{ bigger?: boolean }> = ({ bigger }) =>
  <Container>
    {bigger ? <BiggerRedFlag /> : <RedFlag />}
    {bigger ? <BiggerRedFlagPole /> : <RedFlagPole />}
    {bigger ? <BiggerBaseTwo /> : <BaseTwo />}
    {bigger ? <BiggerBaseOne /> : <BaseOne />}
  </Container>

export default Flag