import React, { useState } from 'react'
import { Alert } from 'react-native'

import LevelSelect from './src/screens/LevelSelect'
import MineField from './src/components/MineField'
import Header from './src/components/Header'

import { Container } from './src/styles/pages/Container'
import { Board } from './src/styles/pages/Board'

import params from './src/params'

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  getUsedFlags
} from './src/functions'

const App: React.FC = () => {
  const minesAmount = () => {
    const columns = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(columns * rows * params.difficultLevel)
  }

  const createState = () => {
    const columns = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, columns, minesAmount()),
      hasWon: false,
      hasLost: false,
      showLevelSelection: false
    }
  }

  const [state, setState] = useState(createState())

  const onOpenField = (row: number, column: number) => {
    const board = cloneBoard(state.board)
    openField(board, row, column)
    const hasLost = hadExplosion(board)
    const hasWon = wonGame(board)

    if (hasLost) {
      showMines(board)
      Alert.alert('Sorry', 'You Lost!!')
    }

    if (hasWon) {
      Alert.alert('Congrats!', 'You Won!!')
    }

    setState({ ...state, board, hasLost, hasWon })
  }

  const onSelectField = (row: number, column: number) => {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)
    const hasWon = wonGame(board)

    if (hasWon) {
      Alert.alert('Congrats!', 'You Won!!')
    }

    setState({ ...state, board, hasWon })
  }

  const onLevelSelected = (level: number) => {
    params.difficultLevel = level
    setState(createState())
  }

  return (
    <Container>
      <LevelSelect
        isVisible={state.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setState({ ...state, showLevelSelection: false })}
      />
      <Header
        remainingFlags={minesAmount() - getUsedFlags(state.board)}
        onNewGame={() => setState(createState())}
        onFlagPress={() => setState({ ...state, showLevelSelection: true })}
      />
      <Board>
        <MineField
          board={state.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </Board>
    </Container>
  )
}

export default App
