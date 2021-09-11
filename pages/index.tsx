import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casamento Andressa e Matheus</title>
        <meta name="description" content="Casamento Andressa e Matheus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Casamento Andressa e Matheus</h1>
      </main>
    </div>
  );
};

export default Home;
