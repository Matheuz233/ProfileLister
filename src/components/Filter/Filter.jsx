import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        name="nome"
        placeholder="Filtrar por Nome"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Filtrar por Email"
        value={filters.email}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="sobrenome"
        placeholder="Filtrar por Sobrenome"
        value={filters.lastName}
        onChange={handleFilterChange}
      />
      <button onClick={handleApplyFilters}>Aplicar Filtros</button>
      <button onClick={clearFilters}>Limpar Filtros</button>
    </div>
  );
};

export default Filter;
