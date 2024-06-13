import Logo from "../../assets/logo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Imagem da Logo" />
        <h1>ProfileLister</h1>
      </div>
      <ul className={styles.routes}>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
