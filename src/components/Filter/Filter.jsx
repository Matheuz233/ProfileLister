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
        name="name"
        placeholder="Filter by name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Filter by email"
        value={filters.email}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Filter by last name"
        value={filters.lastName}
        onChange={handleFilterChange}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filter;
