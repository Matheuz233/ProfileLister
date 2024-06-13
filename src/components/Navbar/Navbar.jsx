import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={Logo} alt="Imagem da Logo" />
        <h1>ProfileLister</h1>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
