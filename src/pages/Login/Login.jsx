import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import mainImage from "../../assets/banner.svg";

import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "usuario@exemplo.com" && password === "12345678") {
      // Adicionar Redirecionamento
    } else {
      setError("Email ou Senha Inválida");
    }
  };

  return (
    <div className={styles.login}>
      <img className={styles.img} src={mainImage} alt="Banner" />
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Bem-Vindo(a) ao ProfileLister!</h2>
        {error && <p className={styles.error}>{error}</p>}
        <label className={styles.label_input} htmlFor="email">
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={styles.label_input} htmlFor="password">
          <FontAwesomeIcon className={styles.icon} icon={faLock} />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className={styles.btn}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
