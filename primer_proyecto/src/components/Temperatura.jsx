import React,{Fragment,useState} from 'react';

export default function Temperatura(){
    const [temperatura,setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(temperatura + 1)
    }
    const Bajar = () =>{
        setTemperatura(temperatura - 1)
    }
    return(
        <div className="container">
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'Hace calor mama!!!! ' : "Esta fresco che "
                }
            </p>
            <button className="btn btn-success btn-block" onClick = {Subir}>Aumentar temperatura</button>
            <button className="btn btn-success btn-block" onClick = {Bajar}>Reducir temperatura</button>
        </div>
    )
}