import type { NextPage } from 'next';

import styles from './styles.module.scss';

const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      <hr />

      <h2>Um pouco da nossa história...</h2>

      <div className={styles.list}>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/teste.jpg" alt="Small sheet" />
        </span>
      </div>
    </div>
  );
};

export default Images;
