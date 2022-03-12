import React from 'react'
import { StyledApp } from 'Styles/StyledApp'
import Gameboard from './Gameboard'
import Keyboard from './Keyboard'

export const App = () => {
  const language = 'Coptic'

  return (
    <StyledApp>
      <div className="title">Wordle in {language}</div>
      <Gameboard />
      <Keyboard />
    </StyledApp>
  )
}

export default App
