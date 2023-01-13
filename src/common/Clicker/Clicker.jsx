
import React from 'react';
import './Clicker.css';
import {useNavigate} from 'react-router-dom';

export const Clicker = ({destination, path}) => {

    //Tengo que instanciar useNavigate dentro de una constante, antes de poder usarlo.
    const navigate = useNavigate();

    return (
        // Hemos puesto un callback antes de la función para que no la ejecute
        // automáticamente nada más renderizar el elemento
        <div className='clickerDesign' onClick={()=>navigate(path)}>
            {destination}
        </div>
    )
};