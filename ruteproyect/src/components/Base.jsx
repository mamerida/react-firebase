import React,{ useEffect,useState} from 'react';

export default function Base(){
    //se carga despues de renderizada toda la pagina
    const [nombre,setNombre] = useState("Pedro")
    useEffect(()=>{
        //despues de dos segundos de cargada la pagina 2 segundos carga Manuel
        setTimeout(()=>{
            setNombre("Manuel")
        },2000)
    })
    return(
        <div>
            <h1>Pagina de base ruta /</h1>
            {nombre}
        </div>
    )
}