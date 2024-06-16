import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      {!user ? (
        <NavLink to="/" className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <h1>ProfileLister</h1>
        </NavLink>
      ) : (
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <h1>ProfileLister</h1>
        </div>
      )}

      <ul className={styles.links_list}>
        {!user ? (
          <>
            <li>
              <NavLink to="/">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/" onClick={handleLogout}>
              Sair
              <FontAwesomeIcon
                className={styles.logout_icon}
                icon={faArrowRightFromBracket}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
