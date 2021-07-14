import React from 'react';
import './App.css';
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Formulario from './components/Formulario'
//importo mi componente
//import Hola from './components/Hola';

function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo de mi aplicacions </h1>
      {/* llamo al componente en esta linea para incorporarlo al export de mi pagina web */}
      {/* <Hola></Hola> */}
      <Formulario></Formulario>
      <Temperatura></Temperatura>
      <Contador></Contador>
      <Listado></Listado>
    </div>
  );
}

export default App;
