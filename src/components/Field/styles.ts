import { View, Text } from 'react-native'
import params from '../../params'
import styled from 'styled-components/native'

const { blockSize, borderSize, fontSize } = params

const Field = styled(View)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  border-width: ${borderSize}px;
`
const backgroundColor = '#999'
const leftTopColor = '#CCC'
const rightBottomColor = '#333'

export const RegularField = styled(Field)`
  background-color: ${backgroundColor};
  border-left-color: ${leftTopColor};
  border-top-color: ${leftTopColor};
  border-right-color: ${rightBottomColor};
  border-bottom-color: ${rightBottomColor};
`

export const OpenedField = styled(Field)`
  background-color: ${backgroundColor};
  border-color: #777;
  align-items: center;
  justify-content: center;
`

export const ExplodedField = styled(OpenedField)`
  background-color: #f00;
  border-color: #f00;
`

export const Label = styled(Text)`
  font-weight: bold;
  font-size: ${fontSize}px;
  color: ${(props: { color: string }) => props.color};
`