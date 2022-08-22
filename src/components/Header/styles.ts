import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 1px 1px solid rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav ul {
    display: flex;
  }

  nav ul li {
    padding: 1rem;
  }
`;
