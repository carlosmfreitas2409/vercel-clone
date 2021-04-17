import { useLayoutEffect, useState } from 'react';
import { Button } from '../Button';

import logoSvg from '../../assets/logo.svg';

import { Container, Content, Logo, Navigation, Details } from './styles';

export function Header() {
  const [isRetracted, setIsRetracted] = useState(true);

  useLayoutEffect(() => {
    function onScroll() {
      if(window.scrollY > 15) {
        setIsRetracted(false);
      } else {
        setIsRetracted(true);
      }      
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <Container isRetracted={isRetracted}>
      <Content>
        <Logo>
          <img src={logoSvg} alt="Logo" />
        </Logo>

        {isRetracted && (
          <Navigation>
            <ul>
              <li><a href="/">Templates</a></li>
              <li><a href="/">Analytics</a></li>
              <li><a href="/">Pricing</a></li>
            </ul>
          </Navigation>
        )}

        <Details>
          <div>
            <a href="/">Contact</a>
            <a href="/">Login</a>

            <span>
              <Button size="sm">Sign Up</Button>
            </span>
          </div>
        </Details>
      </Content>
    </Container>
  )
}