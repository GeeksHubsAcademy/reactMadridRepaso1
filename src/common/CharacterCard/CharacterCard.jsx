
import React from 'react';
import './CharacterCard.css';

export const CharacterCard = ({character}) => {
    return (
        <div className='characterCardDesign'>
            <div><img className='avatarRickMorty' src={character.image}/></div>
            <div>{character.name}</div>
            <div>{character.species}</div>
        </div>
    )
};