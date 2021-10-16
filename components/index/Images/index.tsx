import type { NextPage } from 'next';

import styles from './styles.module.scss';

const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      <hr />

      <h2>Um pouco da nossa história...</h2>

      <div className={styles.list}>
        <span>
          <img src="/img/foto1.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto2.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto3.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto4.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto5.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto6.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto7.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto8.png" alt="Small sheet" />
        </span>
        <span>
          <img src="/img/foto9.png" alt="Small sheet" />
        </span>
      </div>
    </div>
  );
};

export default Images;
