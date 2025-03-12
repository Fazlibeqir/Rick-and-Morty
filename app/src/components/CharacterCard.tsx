import React from "react";
import { Character } from "../models/character";


interface CharacterCardProps {
  character: Character;
  language: "en" | "de";
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
  return (
    <div key={character.id} className="character-card">
            <h3>{character.name}</h3>
            <p>
              <strong>{language === "en" ? "Status" : "Status"}:</strong> {character.status}
            </p>
            <p>
              <strong>{language === "en" ? "Species" : "Spezies"}:</strong> {character.species}
            </p>
            <p>
              <strong>{language === "en" ? "Gender" : "Geschlecht"}:</strong> {character.gender}
            </p>
            <p>
              <strong>{language === "en" ? "Origin" : "Herkunft"}:</strong> {character.origin.name}
            </p>
          </div>
    );
}   

export default CharacterCard;