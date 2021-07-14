import React from 'react';




export default function Bienvenida(props){
    //otra forma seria mediante la destructuracion, en este caso tomo la propiedad qeu necesito y la defino
    const {nombre} = props
    console.log(props)
    return(
        <div>
            <h2>Bienvenido {props.nombre} </h2>
        </div>
    )
}