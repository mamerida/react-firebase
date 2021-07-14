import React,{useState} from 'react';
//importo useHistory para poder manejar la sesion del usuario segun lo que yo necesite
import{useHistory} from 'react-router-dom';
//importe auth de firebase
import {auth} from '../firebaseconfig';




export default function Login(){
    const historial = useHistory()
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    //creo el estado para tomar los errores y mostrarlos
    const [msgerror, setMgError] = useState(null)

    const RegistrarUsuario = (e) =>{
        e.preventDefault();
        if(!email.trim()){
            setMgError("El campo email esta vacio, debe introducir un mail")
            return
        }
        if(!pass.trim()){
            setMgError("El campo contraseña esta vacio,debes ingresar una contraseña")
            return
        }
        auth.createUserWithEmailAndPassword(email,pass)
        //con esto lo que hago es evitar que sale siempre el alert por eso recibo la respuesta
        //ahora en vez del alert lo que hago es mandar al usuario a la pagina que yo quiero con el history
        .then((r)=>{
            //esto me manda al inicio
            historial.push('/')
        })
        .catch(e =>{
            if(e.code ==='auth/invalid-email'){
                setMgError("Formato de mail incorrecto")
            }
            if(e.code === "auth/weak-password"){
                setMgError("La contraseña es muy corta, debe tener minimo 6 caracteres ")
            }
        })    
        
    }

    const LoginUsuario = (e)=>{
        if(!email.trim()){
            setMgError("El campo email esta vacio, debe introducir un mail")
            return
        }
        if(!pass.trim()){
            setMgError("El campo contraseña esta vacio,debes ingresar una contraseña")
            return
        }
        auth.signInWithEmailAndPassword(email,pass)
        .then((r)=>{
            historial.push('/')
        })
        .catch((err)=>{
            /* auth/wrong-password */
            /* auth/invalid-email */
            if(err.code==="auth/wrong-password"){
                setMgError("Contraseña incorrecta por favor intentelo nuevamente")
            }
            if(err.code==="auth/invalid-email"){
                setMgError("Email incorrecto por favor intentelo nuevamente")
            }

        })
    }
    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className="form-group">
                    <input 
                    onChange ={(e)=>{setEmail(e.target.value)}} 
                    className="form-control" type="email" 
                    placeholder="introduce el email"
                    />
                    <input
                    onChange ={(e)=>{setPass(e.target.value)}}
                    className="form-control mt-4" 
                    type="password" 
                    placeholder="introduce la contraseña"
                    />
                    <input type="submit" value="Registrar Usuario" className ="btn btn-dark btn-block mt-4 w-100"/>
                </form>
                <button 
                    className="btn btn-success btn-block mt-3 w-100"
                    onClick={LoginUsuario}
                    > 
                    Iniciar Sesion</button>
                {
                    msgerror !=null ? (<div className ="alert alert-danger mt-3">{msgerror}</div>) : (<span></span>)
                }
            </div>
            <div className="col"></div>
        </div>
    )
}