import { STATUS } from 'constants/status'
import React from 'react'
import { StyledGameboard } from 'Styles/StyledGameboard'
import Tile from './Tile'

export const Gameboard = () => {
  return (
    <StyledGameboard>
      <Tile letter="A" status={STATUS.INACTIVE} />
      <br />
      <Tile letter="B" status={STATUS.CORRECT_POSITION} />
      <br />
      <Tile letter="C" status={STATUS.CORRECT_WORD} />
      <br />
      <Tile letter="D" status={STATUS.INCORRECT} />
    </StyledGameboard>
  )
}

export default Gameboard
