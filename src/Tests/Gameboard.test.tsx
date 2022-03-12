import React from 'react'
import { render } from '@testing-library/react'
import Gameboard from 'Components/Gameboard'

test('it renders Gameboard', () => {
  const component = render(<Gameboard />)
  expect(component).toBeDefined()
})
