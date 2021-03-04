import React from 'react'

import { Board } from '../../util'
import { Field } from '../Field'
import { Columns, Rows } from './styles'

type OwnProps = {
  board: Board[][]
  onOpenField: (row: number, columns: number) => void
  onSelectField: (row: number, columns: number) => void
}

const MineFiled: React.FC<OwnProps> = props => {
  const { board, onOpenField, onSelectField } = props

  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={() => onSelectField(r, c)}
        />
      )
    })
    return <Columns key={r}>{columns}</Columns>
  })
  return <Rows>{rows}</Rows>
}

export default MineFiled
