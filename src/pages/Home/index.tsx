import React from "react";
import styles from "./styles.module.scss";

// images
import instagramCelular from "../../assets/instagram-celular.png";
import perfilInstagram from "../../assets/perfil-instagram.jpg";
import instagramLogo from "../../assets/instagram-logo.png";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.phone}>
        <img src={instagramCelular} alt="celular" />
      </aside>
      <main className={styles.continue}>
        <div className={styles.group}>
          <img src={instagramLogo} alt="instagram logo" />
          <div>
            <img src={perfilInstagram} alt="foto do perfil" />
          </div>
          <a href="#">Continue como pedroafonso</a>
          <a href="#">Remover conta</a>
        </div>
        <div className={styles.group}>
          <p>Não é pedroafonso?</p>
          <p>
            <span>Alternar contas</span>
            ou
            <span>Inscreva-se</span>
          </p>
        </div>
        <div className={styles.getTheApp}>
          <p>Baixe o aplicativo</p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </main>
    </div>
  );
};
