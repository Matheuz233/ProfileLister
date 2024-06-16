import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import mainImage from "../../assets/banner.svg";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "usuario@exemplo.com" && password === "12345678") {
      const userData = { email, password };
      login(userData);
      navigate("/home");
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
        <label className={styles.labelInput} htmlFor="email">
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <input
            ref={inputRef}
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label className={styles.labelInput} htmlFor="password">
          <FontAwesomeIcon className={styles.icon} icon={faLock} />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.showPasswordBtn}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </label>
        <button type="submit" className={styles.btn}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
