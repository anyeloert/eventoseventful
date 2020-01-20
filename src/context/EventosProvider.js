/* Este context extrae los eventos de acuerdo a las opciones
seleccionadas por el usuario y los coloca a disposicion de los 
componenetes hijos*/

import React, { Component } from 'react';
import axios from 'axios'


export const ContextEventos = React.createContext();
export  const EventosConsumer = ContextEventos.Consumer;


export class EventosProvider extends Component {    
    
    state = {
        eventos : []
    }

    buscarEventos = async (busqueda) =>{

        const token = 'GSrBp6V778cPgSpv'
        const url=`http://api.eventful.com/json/events/search?app_key=${token}&keyword=${busqueda.nombre}&category=${busqueda.categoria}`
        const eventos =await axios.get(url)
        this.setState( {
            eventos : eventos.data.events.event
        })
    }

    render() {
        return (
            <ContextEventos.Provider
                value={{
                    eventos : this.state.eventos,
                    buscarEventos : this.buscarEventos
                }}
            >
                {this.props.children}
            </ContextEventos.Provider>
        );
    }
}

