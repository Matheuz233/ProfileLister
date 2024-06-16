import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "Enter" &&
        ["name", "email", "lastName"].includes(document.activeElement.name)
      ) {
        handleApplyFilters();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filters, handleApplyFilters]);

  return (
    <div>
      <h1 className={styles.title}>Página Inicial</h1>
      <div className={styles.filter}>
        <h3 className={styles.search_txt}>Buscar: </h3>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Filtrar por Nome"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Filtrar por Email"
          value={filters.email}
          onChange={handleFilterChange}
        />
        <input
          className={styles.input}
          type="text"
          name="lastName"
          placeholder="Filtrar por Sobrenome"
          value={filters.lastName}
          onChange={handleFilterChange}
        />

        <div className={styles.search_btn}>
          <button className={styles.button} onClick={handleApplyFilters}>
            <span className={styles.button_text}>Buscar</span>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
