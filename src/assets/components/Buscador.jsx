import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className='input-container'
        name="Buscador"
        placeholder="Buscar por título o tipo de feriado"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;