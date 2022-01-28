import type { NextPage } from "next";

import Divider from "../../Divider";

import styles from "./styles.module.scss";

const Local: NextPage = () => {
  return (
    <div className={styles.container}>
      <Divider />
      <h2>Está chegando o grande dia!</h2>
      <h3>05/02/2022 às 13hrs</h3>
      <p>
        Você é nosso convidado especial! E por isso é muito importante que você
        confirme sua presença, estamos ansiosos para dividir esse momento
        contigo!
        {/* <ul>
          <li>❤️ 30/03/2017</li>
          <li>💍 29/05/2021</li>
          <li>👰🏻‍♀ 05/02/2022</li>
        </ul> */}
      </p>

      <a
        href="https://sites.icasei.com.br/casamentodedemath/rsvp"
        target="blank"
      >
        Confirmar minha presença
      </a>

      <p>
        <h4>Algumas informações adicionais</h4>
        <br />
        <br />
        <b>Qual o tipo de roupa que devo ir?</b>
        <br />
        Como o casamento será em uma chácara com almoço, vá de esporte fino, e
        mulheres, se forem de salto, evitem os finos.
        <br />
        <br />
        <b>
          Queria dar o presente de vocês em dinheiro ao invés do produto no
          site, pode ser?
        </b>
        <br />
        Pode usar nosso PIX <b>(11) 94720-7302</b>.
        <br />
        <br />
        <b>Que horas devo chegar?</b>
        <br />
        Como o lugar fica dentro de um condomínio com lista de convidados, pode
        ser que tenha um &#34;trânsito&#34; na entrada do local, então chegue um
        pouco antes!
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.219301422846!2d-46.44429508449651!3d-23.739557884594795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6b5712f61a55%3A0xc6745db219259787!2sest%C3%A2ncia%20silvestre!5e0!3m2!1spt-BR!2sbr!4v1634349112139!5m2!1spt-BR!2sbr"
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Local;
