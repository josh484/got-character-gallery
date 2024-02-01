import React from 'react'
import CharacterData from '../data/characterData.json'
function Character(prop){
    return(
        <>
            {prop.id}
            <h2>{prop.name}</h2>
            <img src={prop.imgUrl}></img>
            <ul>
                <li>Date of Birth: {prop.birth}</li>
                <li>Date of Death: {prop.death}</li>
                <li>Race: {prop.race}</li>
                <li>Realm:{prop.realm}</li>
                <li>Spouse: {prop.spouse}</li>
            </ul>
        </>
    )
}

export default Character