import styled, { css } from 'styled-components';

interface ContainerProps {
  isRetracted: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 4rem;
  z-index: 10;

  backdrop-filter: saturate(180%) blur(5px);
  box-shadow: none;
  transition: 0.2s ease 0s;
  
  ${({ isRetracted }) => !isRetracted && css`
    box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  `}
`;

export const Content = styled.header`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;

  a {
    display: inline-block;
    font-size: 0.875rem;
    transition: color 0.1s;

    &:hover {
      color: var(--white);
    }
  }
`;

export const Logo = styled.div`
  flex: 1 1;
  display: flex;
`;

export const Navigation = styled.nav`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li + li {
      margin-left: 0.75rem;
    }

    a {
      padding: 8px;
    }
  }
`;

export const Details = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-left: auto;

    & > *+* {
      margin-left: 1.5rem;
    }
  }
`;