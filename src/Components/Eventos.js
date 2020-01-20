import React from 'react';
import {EventosConsumer} from '../context/EventosProvider.js'
import Evento from './Evento'


//import '../index.css';

const Eventos = () => {
    return (
        <div className='row' >
            <EventosConsumer>
                {(value) =>{                      
                    return  value.eventos.map(evento => (                                
                            <Evento 
                                key={evento.id}
                                evento = {evento}
                            />                            
                        ))
                    }      
                }
            </EventosConsumer>
        </div>
    );
};

export default Eventos;