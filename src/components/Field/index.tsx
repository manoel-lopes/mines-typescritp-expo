import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from '../../params'
import Mine from '../Mine'
import Flag from '../Flag'

import { Field as OwnProps } from '../../util'

import { OpenedField, ExplodedField, RegularField, Label } from './styles'
import { StyledComponent } from 'styled-components'

export const Field: React.FC<OwnProps> = ({
  mined,
  opened,
  nearMines,
  exploded,
  flagged,
  onOpen,
  onSelect
}) => {
  const FieldArea =
    opened && !exploded
      ? OpenedField
      : exploded
      ? ExplodedField
      : !opened && !exploded
      ? RegularField
      : null

  const color =
    nearMines > 0
      ? nearMines === 1
        ? 'blue'
        : nearMines == 2
        ? 'green'
        : nearMines > 2 && nearMines <= 6
        ? 'red'
        : 'magenta'
      : null

  return (
    <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
      <FieldArea>
        {!mined && opened && nearMines > 0 ? (
          <Label color={color}>{nearMines}</Label>
        ) : (
          false
        )}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag /> : false}
      </FieldArea>
    </TouchableWithoutFeedback>
  )
}
