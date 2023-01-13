
import React, {useState, useEffect} from 'react';
import { CharacterCard } from '../../common/CharacterCard/CharacterCard';
//useState lo usaremos paralos hooks, useEffect para el ciclo de vida del componente
import { Clicker } from '../../common/Clicker/Clicker';
import { getCharacters } from '../../services/apiCalls';
import './Home.css';

export const Home = () => {

    //Zona de hooks, primero en analizarse
    const [characters, setCharacters] = useState([]);

    //Los useEffect son las funciones de ciclo de vida del componente
    useEffect(()=>{

        if(characters.length === 0){
            
            //Si no hay nada en el hook characters, me los traigo....

            getCharacters()
                .then(
                    resultado => {
                        //Resultado será lo que devuelva getCharacters en su return

                        setCharacters(resultado.data.results)
                        
                    }
                )
                .catch(error => console.log(error));
        }

    },[characters]);


    //Funciones.....
    const Escogido = (personaje) => {
        console.log(personaje);
    }

    //Zona de renderizado, segundo en analizarse
    return (
        <div className='homeDesign'>

            {characters.length > 0 &&

                //Mapeo a todos los elementos guardados en el hook characters
            
                characters.map(personaje => {
                    return (
                        //Paso el personaje por props a cada una de las tarjetas
                        <div key={personaje.id} onClick={()=>Escogido(personaje)}>
                            <CharacterCard  
                                character={personaje} 
                                
                            />
                        </div>
                    )
                })
            
            }
            
            <Clicker destination={"Login"} path={"/login"} />
        </div>
    );
};