/*  Este context extrae las categorias disponibles de la api de 
eventful y los coloca a disposicion de los componentes hijo*/

import React, { Component } from 'react';
import axios from 'axios'

export const ContextCategorias = React.createContext();
export  const ContextConsumer = ContextCategorias.Consumer;

export  class CategoriasProvider extends Component {

    state = {
        categorias:[]
    }

    componentDidMount(){
        this.obtenerDatos();
    }

    obtenerDatos = async () => {
        const  privateKey = 'GSrBp6V778cPgSpv'
        const URL  = `http://api.eventful.com/json/categories/list?app_key=${privateKey}`
        const categorias =await axios.get(URL)
        this.setState( {
            categorias : categorias.data.category
        })
    }
    render() {
        return (
            <ContextCategorias.Provider
                value={{
                   categorias : this.state.categorias
                }}
            >
               {this.props.children}
            </ContextCategorias.Provider>
        );
    }
}

