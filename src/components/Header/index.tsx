import React from 'react'
import { GestureResponderEvent } from 'react-native'

import Flag from '../Flag'

import {
  Container,
  FlagWrapper,
  FlagButton,
  RemainingFlags,
  NewGameButton,
  Label
} from './styles'

type OwnProps = {
  onFlagPress: (e: GestureResponderEvent) => void
  remainingFlags: number
  onNewGame: (e: GestureResponderEvent) => void
}

const Header: React.FC<OwnProps> = props => {
  const { onFlagPress, remainingFlags, onNewGame } = props

  return (
    <Container>
      <FlagWrapper>
        <FlagButton onPress={onFlagPress}>
          <Flag bigger />
        </FlagButton>
        <RemainingFlags>= {remainingFlags}</RemainingFlags>
      </FlagWrapper>
      <NewGameButton onPress={onNewGame}>
        <Label>New Game</Label>
      </NewGameButton>
    </Container>
  )
}

export default Header