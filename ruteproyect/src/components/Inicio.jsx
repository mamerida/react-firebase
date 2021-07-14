import React from 'react';
//para poder utilizar el componente qeu me manda por la ruta debo utilizar el useParams
import { useParams } from 'react-router-dom';

export default function Inicio(){

    //para poder atrapar el parametro qeu se me envia por url genero la constante con el mismo nombre
    const {nombre,id,edad} = useParams();

    return(
        <div>
            <h1>Pagina de Inicio</h1>
            <p>{nombre}</p>
            <p>{id}</p>
            <p>{edad}</p>
        </div>
    )
}