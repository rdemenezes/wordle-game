import React from 'react'
import { StyledApp } from 'Styles/StyledApp'

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
