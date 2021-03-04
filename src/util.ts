import { GestureResponderEvent } from 'react-native'

export type Board = {
  row: number
  column: number
  opened: boolean
  flagged: boolean
  mined: boolean
  exploded: boolean
  nearMines: number
}

export type Field = {
  mined: boolean
  opened: boolean
  nearMines: number
  exploded: boolean
  flagged: boolean
  onOpen: (e: GestureResponderEvent) => void
  onSelect: (e: GestureResponderEvent) => void
}
