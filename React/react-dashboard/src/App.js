import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Contultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';


function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
      <Contultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
