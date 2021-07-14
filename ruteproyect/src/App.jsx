import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Base from './components/Base'

function App() {
  return (
    /* Vamos a rutear las paginas mediante el react router dom */
    <Router>
      {/* coloco los links para que se vean en pantalla */}
      <Link to ="/inicio">Inicio</Link>
      <Link to ="/">Base</Link>
      <Switch>
        {/* en este componente se determina ruta y archivo */}
        {/* para pasar parametros dentro de la pagina lo coloco como /:<nombre del parametro> */}
        <Route path="/inicio/:nombre/:id/:edad">
          {/* Cargo los componentes que quiero sean la ruta*/}
          <Inicio/>
        </Route>
        {/* en este componente se determina ruta y archivo  el exact es para especificar la ruta especifica*/}
        <Route exact path="/">
          <Base/>
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
