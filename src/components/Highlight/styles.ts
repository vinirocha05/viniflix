import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;
  max-width: 60rem;
  img {
    height: 100%;
  }
`;

export const Details = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 1rem;
  text-shadow: 1px 1px solid rgba(0, 0, 0, 0.9);
  h2 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  p {
    max-width: 55rem;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
`;

export const GradientFromBottom = styled.div`
  height: 20vh;
  display: block;
  position: absolute;
  top: 40%;
  z-index: 1;
  height: 30vh;
  width: 100%;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.dark} 10%,
    transparent 100%
  );
`;

export const GradientFromRight = styled.div`
  display: block;
  position: absolute;
  top: 10%;
  z-index: 1;
  height: 60vh;
  width: 50vw;
  right: 40%;
  background: linear-gradient(
    250deg,
    ${({ theme }) => theme.colors.dark} 10%,
    transparent 100%
  );
`;
