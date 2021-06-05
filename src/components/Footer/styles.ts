import styled from 'styled-components';

export const Container = styled.footer`
  font-size: 0.875rem;
  background: var(--black-800);
  border-top: 1px solid var(--gray-700);
  padding: 2.4rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--blue);
    transition: color 0.2s;

    &:hover {
      color: var(--white);
    }
  }

  .contact {
    display: flex;

    a:first-child {
      border-right: 1px solid var(--gray-700);
      margin-right: 15px;
      padding-right: 15px;
    }

    svg {
      transition: fill 0.2s;
      
      &:hover {
        fill: var(--white);
      }
    }
  }
`;

export const StatusBox = styled.div`
  height: 32px;
  padding: 0 12px;

  background: var(--black);
  border: 1px solid var(--gray-700);
  border-radius: 5px;

  letter-spacing: -0.01em;

  display: flex;
  align-items: center;

  small {
    color: var(--white);
    font-size: 14px;
    line-height: 1.5;
  }

  span {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: var(--blue);
    margin: 0 7px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: var(--blue);
  }
`;