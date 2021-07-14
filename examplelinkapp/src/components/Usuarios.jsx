import React, { useEffect, useState } from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom';



export default function Usuarios(){
    const [usuarios,setUsuarios] = useState([])
    const obtenerUsuario = async() =>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const users = await res.data
        setUsuarios(users)
    }

    useEffect(()=>{
        obtenerUsuario()
    },[])

    return(
        <div>
            <h2>Lista de usuarios</h2>
            {
                usuarios.map((item)=>(
                    <div>
                        <Link to={`/usuario/${item.id}`} key ={item.id}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )


}