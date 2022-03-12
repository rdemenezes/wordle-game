import styled from 'styled-components'

export const StyledTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 1rem;
  width: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};

  .letter {
    font-size: 1.5rem;
    font-weight: 700;
    vertical-align: center;
  }
`
