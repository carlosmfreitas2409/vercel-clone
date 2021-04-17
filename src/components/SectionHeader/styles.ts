import styled from 'styled-components';

interface ContainerProps {
  color: 'blue' | 'pink';
}

const labelColors = {
  blue: {
    line: 'linear-gradient(var(--black), #019AE9)',
    text: 'linear-gradient(90deg, #007cf0, #00dfd8)'
  },
  pink: {
    line: 'linear-gradient(var(--black), #9A1FB8)',
    text: 'linear-gradient(90deg, #7928CA, #FF0080)'
  }
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
    display: contents;

    span:first-child {
      width: 1px;
      height: 6.25rem;
      background: ${({ color }) => labelColors[color].line};
      padding-right: 1px;
    }

    span:last-child {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 1.5rem;
      border-radius: 100%;

      font-weight: 700;
      color: var(--black);
      background: ${({ color }) => labelColors[color].text};
      
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  h3 {
    margin-bottom: 1rem;
    padding: 0 0.2em;

    font-size: 2rem;
    letter-spacing: -0.05rem;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: ${({ color }) => labelColors[color].text};
  }

  h4 {
    color: var(--white);
    font-size: 3.75rem;
    letter-spacing: -0.05rem;
    text-align: center;
  }

  @media (max-width: 599px) {
    h4 {
      font-size: 2.5rem;
    }
  }
`;
