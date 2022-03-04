import React from 'react'
import { render } from '@testing-library/react'
import App from 'Components/App'

test('it renders App', () => {
  const app = render(<App />)
  expect(app).toBeDefined()
})
