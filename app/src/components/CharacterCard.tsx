import React from "react";
import { Character } from "../models/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div >
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
        <p>{character.origin.name}</p>
    </div>
    );
}   

export default CharacterCard;