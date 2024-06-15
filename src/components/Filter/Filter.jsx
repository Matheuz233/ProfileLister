import React, { useState } from "react";

import styles from "./Filter.module.css"

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

  const clearFilters = () => {
    setFilters({
      name: "",
      email: "",
      lastName: "",
    });
    onApplyFilters({
      name: "",
      email: "",
      lastName: "",
    });
  };

  return (
    <div className={styles.filter}>
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

      <div className={styles.buttons}>
      <button className={styles.button} onClick={handleApplyFilters}>Aplicar Filtros</button>
      <button className={styles.button} onClick={clearFilters}>Limpar Filtros</button>
      </div>
    </div>
  );
};

export default Filter;
