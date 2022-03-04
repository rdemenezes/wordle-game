#!/bin/bash
set -e

echo
read -p "Component name: " name \
    && [[ ! -z $name && $name != '' ]] \
    || echo -e "\n❌ You must enter a valid component name!"

echo -ne "\nCreating $name.tsx... "
cat > src/Components/$name.tsx << EOF
import React from 'react'
import { Styled$name } from 'Styles/Styled$name'

export const $name = () => {
  return (
    <Styled$name>
      <div>$name</div>
    </Styled$name>
  )
}

export default $name
EOF
echo "✅"

echo -ne "\nCreating Styled$name.ts... "
cat > src/Styles/Styled$name.ts << EOF
import styled from 'styled-components'

export const Styled$name = styled.div\`\`
EOF
echo "✅"

echo -ne "\nCreating $name.test.tsx... "
cat > src/Tests/$name.test.tsx << EOF
import React from 'react'
import { render } from '@testing-library/react'
import $name from 'Components/$name'

test('it renders $name', () => {
  const component = render(<$name />)
  expect(component).toBeDefined()
})
EOF
echo "✅"

exit 0
