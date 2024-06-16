import { NavLink } from "react-router-dom";
import Img404 from "../../assets/404Error.svg";

import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={styles.not_found_page}>
      <h1>Página Não Encontrada</h1>
      <img src={Img404} alt="" />
      <p>
        Desculpe, não conseguimos encontrar esta página. Mas não se preocupe,
        você pode retornar para nossa <NavLink to="/">página de login</NavLink>.
      </p>
    </div>
  );
};

export default Page404;
