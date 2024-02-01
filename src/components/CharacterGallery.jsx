import React, { useState } from 'react';
import CharacterData from '../data/characterData.json'
import Character from './Character'
function CharacterGallery(){
    const [character, setCharacter] = useState(CharacterData);
    return (
        <div>
            {character.map(char => (
                <Character 
                key={char._id}
                id={char._id}
                name={char.name}
                imgUrl={char.imgUrl}
                birth={char.birth}
                death={char.death}
                race={char.race}
                realm={char.realm}
                spouse={char.spouse}
                />
            ))}
        </div>
    )

}

export default CharacterGallery