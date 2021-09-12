import type { NextPage } from 'next';

import styles from './styles.module.scss';

const Divider: NextPage = () => {
  return <hr className={styles.container} />;
};

export default Divider;
