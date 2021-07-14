import React , {Fragment} from 'react'


function Hola(){
    let saludo ="variable saludo"

    return(
        <Fragment>
            <h2>Primer componente Hola como estas?{ saludo}</h2>
            <p>Hola que tal buenos dias </p>
        </Fragment>
    )
}

export default Hola


 /* El hecho de trabajar con {} se puede hacer dentro del return gracias al jsx 
        Para poder trabajar con varios elementos dentro del return utilizo div y los "empaqueto" todo junto en un div
        Fragment
        Me permite mandar varios elementos dentro de un contenedor que no es un div para evitar estar anidando div
    */
