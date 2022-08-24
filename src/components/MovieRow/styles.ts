import styled from 'styled-components';

interface ListContainerProps {
  margin: number;
}

export const ListContainer = styled.section<ListContainerProps>`
  display: flex;
  overflow-x: hidden;
  margin-left: ${({ margin }) => `${margin}px`};
  align-items: center;
  font-size: 4rem;
  transition: all ease-in-out 200ms;
`;

export const ButtonLeft = styled.span`
  position: absolute;
  left: 5px;
  z-index: 2;
  padding: 2rem;
  border-radius: 4rem;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonRight = styled.span`
  position: absolute;
  right: 5px;
  z-index: 2;
  padding: 2rem;
  border-radius: 4rem;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Content = styled.div`
  margin-top: 5rem;

  h2 {
    margin: 2rem;
  }
`;
