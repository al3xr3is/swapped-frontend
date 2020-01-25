import React, { useState } from 'react';
import api from './services/api';

import SearchForm from './components/SearchForm';
import SwappersItem from './components/SwappersItems';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [swappers, setSwappers] = useState([]);

  async function handleSubmit(data) {
    const res = await api.get(`/search/index?devices=${data.device}&latitude=${data.latitude}&longitude=${data.longitude}`); 
    setSwappers(res.data.swappers);
  }

  return (
    <div id="app">
      <aside>
        <strong>-Buscar Swappers-</strong>
        <SearchForm onSubmit={handleSubmit} />
      </aside>

      <main>
        <ul>
          {swappers.map(swappers => (
            <SwappersItem key={swappers.data.idUsuario} swappers={swappers} />))}
        </ul>
      </main>
    </div>
  );
}

export default App;
