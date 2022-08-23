import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 1px solid rgba(245, 245, 245, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 100;
`;

export const Content = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  nav ul {
    display: flex;
  }

  nav ul li {
    padding: 2rem;
    cursor: pointer;
  }
`;
