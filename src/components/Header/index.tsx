import styles from './styles.module.scss';

import logoSvg from '../../assets/logo.svg';
import specialButtonSvg from '../../assets/special-button.svg';
import avatarSvg from '../../assets/avatar.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logoSvg} alt="Logo" />
      </h1>

      <nav>
        <ul>
          <li><a href="/">Solutions</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Pricing</a></li>
        </ul>
      </nav>

      <div>
        <a href="/">
          <img src={specialButtonSvg} alt="Special Conference" />
          <span>Special Conf</span>
        </a>

        <img src={avatarSvg} alt="Avatar" />
      </div>
    </header>
  )
}