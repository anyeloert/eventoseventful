import React, { Component } from 'react';
//import {ContextConsumer} from '../context/CategoriasProvider.js'
import {EventosConsumer} from '../context/EventosProvider.js'



{/* La clase Formulario contiene todas las portes que componen el 
formulario que sera renderizado*/}
class Formulario extends Component {
    /*El state esta compuesto por el valor escrito en el campo de 
    campo de texto "nombre" y por la categoria seleccionada en el
    select*/
    state={
        nombre : '',
        categoria : 'Sports'
    }



    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 
    render() {
        return (
            <EventosConsumer>
                {(value) =>{
                    return (  
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                value.buscarEventos(this.state)
                            }}
                        >
                            
                            <div className='card '>
                                <h3 className='card-title center'>
                                    Search your event by name or category
                                </h3> 
                                <div className='row'>                               
                                    <div className='col s12 m6 l4 input-field'>
                                        <input                                 
                                            type='text' 
                                            placeholder='City Name or Event'
                                            name='nombre'
                                            onChange = {this.handleChange}>
                                        </input>
                                    </div >
                                    <div className='col s12 m6 l4 input-field  '>
                                        {/* hubo problemas para renderizar la etiqueta option 
                                        dentro del ciclo map, por tal motivo hubo que 
                                        colocar las categorias de manera manual y el 
                                        context EventosProvider no se ha usado */}
                                        <select
                                            name='categoria'
                                            onChange = {this.handleChange}
                                            >
                                                <option>--Select a Category--</option>
                                                <option>Concerts &amp; Tour Dates</option>
                                                <option>Conferences &amp; Tradeshows</option>
                                                <option>Comedy</option>
                                                <option>Education</option>
                                                <option>Kids &amp; Family</option>
                                                <option>Festivals</option>
                                                <option>Film</option>
                                                <option>Food &amp; Wine</option>
                                                <option>Fundraising &amp; Charity</option>
                                                <option>Art Galleries &amp; Exhibits</option>
                                                <option>Health &amp; Wellness</option>
                                                <option>Holiday</option>
                                                <option>Literary &amp; Books</option>
                                                <option>Museums &amp; Attractions</option>
                                                <option>Neighborhood</option>
                                                <option>Business &amp; Networking</option>
                                                <option>Nightlife &amp; Singles</option>
                                                <option>University &amp; Alumni</option>
                                                <option>Organizations &amp; Meetups</option>
                                                <option>Outdoors &amp; Recreation</option>
                                                <option>Performing Arts</option>
                                                <option>Pets</option>
                                                <option>Politics &amp; Activism</option>
                                                <option>Sales &amp; Retail</option>
                                                <option>Science</option>
                                                <option>Religion &amp; Spirituality</option>
                                                <option>Sports</option>
                                                <option>Technology</option>
                                                <option>Other &amp; Miscellaneous</option>

                                        </select>
                                    </div>
                                    <div className='col s12 m6 l4 card-action center'>
                                        <input 
                                            type='submit'
                                            className='waves-effect waves-light btn'
                                            value='SEND'
                                        />
                                    </div>
                                </div>    
                            </div>                  
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;