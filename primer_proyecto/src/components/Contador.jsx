import React, {Fragment, useState} from 'react'

 const Contador = () =>{
    //codigo del componente
    //al usar use state le das la logica para modificar el contenido de la constante
    const [numero,setNumero] = useState(0)
    const Aumentar =() =>{
        return setNumero(numero +1)
    }
    const Reducir =() =>{
        return setNumero(numero -1)
    }


    return(
        <Fragment>
            <h2>Cantidad del contador : {numero}</h2>
            <button className="btn btn-success btn-block" onClick={Aumentar}>Aumentar</button>
            <button className="btn btn-success btn-block" onClick={Reducir}>Reducir</button>
        </Fragment>

    )

}

export default Contador