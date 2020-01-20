import React, { Component, Fragment } from 'react';
import Header from './Components/Header'
import {EventosProvider} from './context/EventosProvider'
import {CategoriasProvider} from './context/CategoriasProvider.js'
import Formulario from './Components/Formulario'
import Eventos from './Components/Eventos'

import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Header/>
        <EventosProvider>{/*Context que extrae los eventos de la 
        api */} 
          <CategoriasProvider> {/* Context que extrae las categorias
          la api*/}
            <div className='container'>
              <Formulario/>{/* Componente que contiene el formulario
              de la busqueda */}
              <Eventos/> {/* Componente que manipula los eventos */}
            </div>            
          </CategoriasProvider>
        </EventosProvider>            
      </Fragment>
    )
  }
}



export default App;
