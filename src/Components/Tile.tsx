import { STATUS } from 'constants/status'
import React from 'react'
import { StyledTile } from 'Styles/StyledTile'

export const Tile = ({ letter, status, testID }: TileProps) => {
  const getTileBackgroundColor = (status) => {
    switch (status) {
      case STATUS.CORRECT_POSITION:
        return 'orange'
      case STATUS.CORRECT_WORD:
        return 'blue'
      case STATUS.INCORRECT:
        return 'red'
      default:
        return 'grey'
    }
  }

  return (
    <StyledTile backgroundColor={getTileBackgroundColor(status)}>
      <div className="letter">{letter.toUpperCase()}</div>
    </StyledTile>
  )
}

export interface TileProps {
  letter: string
  status: string
  testID?: string
}

export default Tile
