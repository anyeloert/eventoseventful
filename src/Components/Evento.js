

import React from 'react';
{/* El componente Evento permite la manipulacion de cada evento de manera 
independiente */}

{/* clase evento que devuelve cada 
evento organizado en la forma como sera renderizado, recibe un 
objeto mediante props, el objeto recibido contiene la informacion de
cada evento*/}
const Evento = ({evento}) => { 
    const {image, title, description, url} = evento 
    const imagen = image!==null ? //operador terniario: revisa que el evento contenga una imagen
        <div className='card-image'> {/* si el evento incluye una imagen devuelve un objeto html con la imagen*/}
            <img src={image.medium.url} alt={title} />
        </div>
    : null //Si el evento no incluye una imagen devuelve null
    return (
        <div className='col s12 m6 l4'> {/* en pantallas grandes caben tres eventos por fila, en medianas: dos eventos por fila, en pequeñas cabe un evento por fila*/}
            <div className='card'>
                {imagen}            
                <span className='card-title'>{title}</span>
                <p className='card-body'>{description}</p>             
                <a href={url} rel="noopener noreferrer" className="waves-effect waves-light btn footer" target='_blank'>
                    See Event
                </a>                   
            </div>
        </div>
        
    );
};

export default Evento;