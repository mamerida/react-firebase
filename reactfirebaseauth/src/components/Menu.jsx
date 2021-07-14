import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import {auth} from "../firebaseconfig"

export default function Menu(){
    const historial = useHistory()
    const [usuario,setUsuario] =useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    },[])
    const CerrarSesion = () =>{
        auth.signOut()
        setUsuario(null)
        historial.push('/login')
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li>
                        {/* aca lo que hago es indicarle que si existe el usuario no muestre login */}
                        {
                            !usuario ? (<Link className="nav-link" to="/login">Login</Link>) : (null)
                        }
                    </li>
                    <li>
                        {/* aca lo que hago es indicarle que si existe el usuario no muestre login */}
                        {
                            !usuario ? (<Link className="nav-link" to="/">Admin</Link>) : (null)
                        }
                    </li>
                </ul>
                {
                    usuario ? (<button
                                 className="btn btn-danger ms-auto me-3"
                                 onClick={CerrarSesion}>Cerrar Sesion</button>) : (<span></span>)
                }
            </nav>
        </div>
    )
}