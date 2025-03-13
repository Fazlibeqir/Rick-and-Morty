import React from "react";
import { Character } from "../models/character";


interface CharacterCardProps {
    character: Character;
    language: "en" | "de";
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, language }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 >{character.name}</h5>
                    <p>
                        <strong>{language === "en" ? "Status" : "Status"}:</strong> {character.status}
                    </p>
                    <p>
                        <strong>{language === "en" ? "Species" : "Spezies"}:</strong> {character.species}
                    </p>
                    <p >
                        <strong>{language === "en" ? "Gender" : "Geschlecht"}:</strong> {character.gender}
                    </p>
                    <p >
                        <strong>{language === "en" ? "Origin" : "Herkunft"}:</strong> {character.origin.name}
                    </p>
                </div>
            </div>
        </div>

    );
}

export default CharacterCard;