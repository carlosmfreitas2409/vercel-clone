import styled, { keyframes } from 'styled-components';

export const colorCycle = keyframes`
  0%, 55% {
    filter: brightness(0) invert(1); // white
  }

  11%, 33% {
    filter: none;
  }
`;

export const Container = styled.h1`
  text-align: center;
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;

  span {
    display: block;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(0) invert(1);

    animation: ${colorCycle} 10s ease-in-out infinite;
  }

  span:nth-child(1) {
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  }

  span:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.33s;
  }

  span:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 6.66s;
  }

  @media (min-width: 1200px) {
    & {
      font-size: 10rem;
    }
  }
`;
