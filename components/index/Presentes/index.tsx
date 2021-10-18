import type { NextPage } from 'next';
import Link from 'next/link';

import Divider from '../../Divider';

import styles from './styles.module.scss';

const Presentes: NextPage = () => {
  return (
    <div className={styles.container}>
      <Divider />

      <main>
        <h2>Hora dos mimos!</h2>

        <p>
          Nosso maior presente é compartilhar com você nosso Dia Especial, mas que tal nos ajudar com a missão casa nova ou tornar nossa lua de mel
          inesquecível ?
        </p>

        {/* <Link href="https://sites.icasei.com.br/casamentodedemath/pages/25293234"> */}
        <a href="https://sites.icasei.com.br/casamentodedemath/pages/25293234" target="_blank" rel="noreferrer">
          Quero dar um presentão para os noivos!
        </a>
        {/* </Link> */}
      </main>
    </div>
  );
};

export default Presentes;
