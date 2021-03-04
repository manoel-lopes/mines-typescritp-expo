import React from 'react'
import { Modal } from 'react-native'

import {
  Container,
  Frame,
  Title,
  Label,
  EasyLevelButton,
  NormalLevelButton,
  HardLevelButton
} from './styles'

type OwnProps = {
  onCancel: () => void,
  isVisible: boolean,
  onLevelSelected: (level: number) => void
}

const LevelSelect: React.FC<OwnProps> = props => {
  const { onCancel, isVisible, onLevelSelected } = props

  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType='slide'
      transparent={true}>
      <Frame>
        <Container>
          <Title>Select Level</Title>
          <EasyLevelButton onPress={() => onLevelSelected(0.1)}>
            <Label>Easy</Label>
          </EasyLevelButton>
          <NormalLevelButton onPress={() => onLevelSelected(0.2)}>
            <Label>Normal</Label>
          </NormalLevelButton>
          <HardLevelButton onPress={() => onLevelSelected(0.3)}>
            <Label>Hard</Label>
          </HardLevelButton>
        </Container>
      </Frame>
    </Modal>
  )
}

export default LevelSelect