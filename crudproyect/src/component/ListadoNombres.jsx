import React,{useState} from 'react'
import uniqid from 'uniqid';

export default function ListadoNombres(){

    const [nombre,setNombre] = useState("")
    const [listaNombres,setListaNombres] =useState([])
    const [modoEdicion,setModoEdicion] = useState(false)
    const[id,setId] = useState("")
    const[error,SetError] = useState(null)

    const addNombre = (e) =>{
        e.preventDefault()
        if(!nombre.trim()){
            SetError("El campo nombre esta vacio")
            return
        }
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre:nombre
        }
        //con esto lo que hago es decirle que lo coloque al final de la lista de nombres al nombre
        setListaNombres([...listaNombres,nuevoNombre])
        setNombre("")
        SetError(null)
    }

    const  deleteNombre = (id) =>{
        const nuevaArray = listaNombres.filter(item => item.id !== id)
        setListaNombres(nuevaArray)

    }

     const editar = (item) =>{
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    } 

    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = listaNombres.map(item => item.id === id ? {id:id , tituloNombre:nombre} : item)
        setListaNombres(NuevoArray)
        setModoEdicion(false)
        setNombre("")
    }




    return(
        <div>
            <h2>Aplicacion de CRUD basica </h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map(item =>

                                <li key={item.id} className="list-group-item ">
                                    {item.tituloNombre}
                                    <button 
                                        className="btn btn-danger float-end"
                                        onClick ={()=>{deleteNombre(item.id)}}
                                    >
                                        BORRAR
                                    </button>
                                    <button 
                                        className="btn btn-info float-end"
                                        onClick ={()=>{editar(item)}}
                                    >
                                        EDITAR
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres </h2>
                    <form onSubmit ={modoEdicion ? (e) => {editarNombre(e)} : (e)=>{addNombre(e)} } className="form-group"> 
                        <input 
                            onChange={(e)=>{setNombre(e.target.value)}}
                            value={nombre}
                            className="form-control mb-3" 
                            type="text" 
                            placeholder="Introduce el nombre"
                            
                            /* se agrega esta linea value para limpiar el campo despues del submit */       
                         />
                        <input 
                            className="btn btn-info btn-block" 
                            type="submit" 
                            value={modoEdicion ? "EDITAR NOMBRE" : "REGISTRAR NOMBRE"}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger mt-4">
                                {error}
                            </div>
                        ):(<div></div>)
                    }
                </div>
            </div>
        </div>
    )
}