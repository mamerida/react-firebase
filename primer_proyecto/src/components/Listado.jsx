import React,{Fragment,useState} from 'react';

const   Listado = () =>{
    const [numeros,SetNumeros] = useState([1,2,3,4,5,6])
    return(
        <Fragment>
            <ul>{/* Al colocar { indico que lo siguiente viene en js y no en html} */}
                {
                    numeros.map((item,index) => <li key={index} >{item} - {index}</li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado;