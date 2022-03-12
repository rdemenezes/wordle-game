import React from 'react'
import { render } from '@testing-library/react'
import Tile, { TileProps } from 'Components/Tile'
import { STATUS } from 'constants/status'

const props: TileProps = {
  letter: 'a',
  status: STATUS.NOT_ACTIVE,
  testID: 'Tile',
}

test('it renders Tile', () => {
  const component = render(<Tile {...props} />)
  expect(component).toBeDefined()
})

test('it shows the received letter in uppercase', () => {
  const component = render(<Tile {...props} />)

  expect(component.getByText(props.letter.toUpperCase())).toBeDefined()
})
