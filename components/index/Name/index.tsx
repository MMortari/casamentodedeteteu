import type { NextPage } from 'next';

import styles from './styles.module.scss';

const Name: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>Andressa</span> <span>e</span> <span>Matheus</span>
      </h1>

      <img src="/img/small_sheet.png" alt="Small sheet" />
    </div>
  );
};

export default Name;
