import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

const Name: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>Andressa</span> <span>e</span> <span>Matheus</span>
      </h1>

      <img src="/small_sheet.png" alt="Small sheet" />
    </div>
  );
};

export default Name;
