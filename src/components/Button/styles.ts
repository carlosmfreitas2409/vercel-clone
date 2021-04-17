import styled, { css } from 'styled-components';

interface ContainerProps {
  [key: string]: any;
  size: 'lg' | 'md' | 'sm';
  isOutlined: boolean;
}

const buttonStyles = {
  pg: {
    lg: '16px 25px',
    md: '16px 25px',
    sm: '7px 12px'
  },
  fontSize: {
    lg: '1rem',
    md: '1rem',
    sm: '0.875rem'
  }
};

export const Container = styled.button<ContainerProps>`
  padding: ${({ size }) => buttonStyles.pg[size || 'md']};
  font-size: ${({ size }) => buttonStyles.fontSize[size || 'md']};
  font-weight: 500;

  display: -webkit-inline-box;
  justify-content: center;
  
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--white);
  border-radius: 0.25rem;

  transition: .2s ease-in;

  ${({ isOutlined }) => isOutlined && css`
    background: transparent;
    color: var(--gray);
    border-color: var(--gray);
  `}

  &:hover {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
  }
`;
