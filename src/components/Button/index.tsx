import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'md' | 'sm';
  isOutlined?: boolean;
  children: ReactNode;
}

export function Button({ 
  isOutlined = false,
  size = 'md',
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container type="button" size={size} isOutlined={isOutlined} {...rest}>
      {children}
    </Container>
  );
};
