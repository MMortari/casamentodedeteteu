import type { NextPage } from 'next';
import Link from 'next/link';

import Divider from '../../Divider';

import styles from './styles.module.scss';

const Local: NextPage = () => {
  return (
    <div className={styles.container}>
      <Divider />

      <h2>Está chegando o grande dia!</h2>
      <h3>05/02/2022 às 13hrs</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Quamvis enim depravatae
        non sint, pravae tamen esse possunt. Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure. Sullae consulatum?
      </p>

      <a href="https://api.whatsapp.com/send?phone=+5511974308964" target="blank">
        Confirmar minha presença
      </a>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.7625360333!2d-46.564421599999996!3d-23.70488545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4331eb112075%3A0xbfba0b7315f06de3!2sO%20Tradicionalissimo%20SBC!5e0!3m2!1spt-BR!2sbr!4v1631463075587!5m2!1spt-BR!2sbr"
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Local;
