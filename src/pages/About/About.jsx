import styles from "./About.module.css";

import developer from "../../assets/developer.svg";
import githubIcon from "../../assets/github-icon.svg";

const About = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.about}>
      <img src={developer} alt="Imagem de um Desenvolvedor" />
      <p>
        Esta aplicação foi desenvolvida por Matheuz233 com a biblioteca React JS
        como parte do processo seletivo da empresa de delivery Vokerê,
        localizada em Balsas-MA.
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => handleNavigation("https://github.com/Matheuz233")}>
          <img src={githubIcon} alt="Icone do Github" />
          Matheuz233
        </button>
      </div>
    </div>
  );
};

export default About;
