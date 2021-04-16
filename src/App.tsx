import { Footer } from './components/Footer';
import { Header } from './components/Header';

import styles from './styles/landing.module.scss';
import './styles/global.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h1>
          <span>Develop.</span>
          <span>Preview.</span>
          <span>Ship.</span>
        </h1>

        <div className={styles.buttons}>
          <button type="button">Start Deploying</button>
          <button type="button">Get a Demo</button>
        </div>

        <h2>
          Vercel combines the best developer experience with an obsessive focus on end-user performance.
          Our platform enables frontend teams to do their best work.
        </h2>
      </main>

      <Footer />
    </div>
  );
}

export default App;
