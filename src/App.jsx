import React, { useState } from 'react';
import './App.css';
import MiApi from './assets/components/MiApi';
import Buscador from './assets/components/Buscador';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <h1>Feriados de Chile</h1>
      <Buscador onSearch={setSearch} />
      <MiApi search={search} />
      <footer><p>Búsqueda de feriados de Chile 2024. Valentina Paz</p></footer>
    </>
  );
}

export default App;
