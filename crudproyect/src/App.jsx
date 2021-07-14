import React from 'react';
import Bienvenida from './component/Bienvenida.jsx';
import Cards from './component/Cards.jsx';
/* import ListadoNombres from './component/ListadoNombres'; */

function App() {
  return (
    <div className="ms-1">
      <h1 >Propiedades Objetos</h1>
     
      <Bienvenida nombre ="Manuel"/>
    <hr/>
      <div className="row">
        <div className="col">
          <Cards
            imagen ="http://lorempixel.com/160/160/"
            titulo = "titulo imagen 1"
            texto = "texto imagen 1" 
          />
        </div>
        <div className="col">
          <Cards
            imagen ="http://lorempixel.com/160/160/"
            titulo = "titulo imagen 2"
            texto = "texto imagen 2" 
          />
        </div>
        <div className="col">
          <Cards
            imagen ="http://lorempixel.com/160/160/"
            titulo = "titulo imagen 3"
            texto = "texto imagen 3" 
          />
        </div>
      </div>

    </div>
  );
}

export default App;
