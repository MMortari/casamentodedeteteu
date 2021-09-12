import type { NextPage } from 'next';
import Head from 'next/head';

import Name from '../components/index/Name';
import Images from '../components/index/Images';
import Presentes from '../components/index/Presentes';
import Local from '../components/index/Local';

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
      <Images />
      <Local />
      <Presentes />
    </div>
  );
};

export default Home;
