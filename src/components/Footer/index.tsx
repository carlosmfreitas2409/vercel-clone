import { RiGithubFill, RiTwitterFill } from 'react-icons/ri';

import { Container, StatusBox } from './styles';

export function Footer() {
  return (
    <Container>
      <span>Copyright © {new Date().getFullYear()} Vercel Inc. All rights reserved.</span>

      <div className="contact">
        <a href="/"><RiGithubFill size={24} color="#888" /></a>
        <a href="/"><RiTwitterFill size={24} color="#888" /></a>
      </div>

      <StatusBox>
        <small>Status:</small>
        <span />
        <p>All systems normal.</p>
      </StatusBox>

      <span>
        Develop with 💜 by <a href="https://github.com/carlosmfreitas2409">Carlos Eduardo</a>
      </span>
    </Container>
  );
};