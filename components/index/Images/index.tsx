import type { NextPage } from 'next';

import styles from './styles.module.scss';

const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      <hr />

      <h2>Um pouco da nossa história...</h2>

      <p>
        Nos conhecemos no ensino médio e nos tornamos grandes amigos, quando rolou o primeiro sim, já sabíamos que era pra casar. Do primeiro{' '}
        <strong>SIM</strong> para o segundo foram quatro anos de muita cumplicidade, amizade e muiiito amor! E aqui estamos muito felizes para o
        terceiro <strong>SIM</strong>.
      </p>

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
