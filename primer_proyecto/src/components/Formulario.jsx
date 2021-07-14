import React,{useState} from 'react'


export default function Formulario (){

    const[nombre, setNombre] = useState("")
    const[edad, setEdad] = useState("")
    const validar =(event) =>{
        /* evita que la pagina recarge  */
        event.preventDefault()
        console.log("pulsado el boton")
        //trim larga verdadero si hay caracteres y falso si no los hay 
        if(!nombre.trim()){
            console.log("el nombre esta vacio")
            return
        }
        if(!edad.trim()){
            console.log("la edad esta vacia ")
            return
        }
    }

    return(
        <div className="container">
            <form onSubmit ={validar}className="form-group"> 
                <input 
                    placeholder="introduce el nombre" 
                    className="form-control mb-3" 
                    type="text"
                    /* introdusto el onchange con e para indicar que el evento de cmabio dispara la funcion */
                    onChange={(e)=>{setNombre(e.target.value)}}
                />  
                <input
                    placeholder="introduce la edad" 
                    className="form-control mb-3" 
                    type="text"
                    onChange={(e)=>{setEdad(e.target.value)}}
                 />
                <input className="btn btn-info btn-block mb-3" type="submit"/>
            </form>
        </div>
    )
}