import type { NextPage } from 'next';
import Head from 'next/head';
import Name from '../components/index/Name';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casamento Andressa e Matheus</title>
        <meta name="description" content="Casamento Andressa e Matheus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Name />
    </div>
  );
};

export default Home;
