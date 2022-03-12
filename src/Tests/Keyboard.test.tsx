import React from 'react'
import { render } from '@testing-library/react'
import Keyboard from 'Components/Keyboard'

test('it renders Keyboard', () => {
  const component = render(<Keyboard />)
  expect(component).toBeDefined()
})
