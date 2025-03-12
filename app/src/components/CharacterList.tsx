import React from "react";
import { useQuery } from "@apollo/client";
import { CharacterResponse } from "../models/character";
import { GET_CHARACTERS } from "../service/queries";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
    language: "en" | "de";
}

const CharacterList: React.FC<CharacterListProps> = ({ language }) => {
    const [page, setPage] = React.useState(1)
    const [status, setStatus] = React.useState("")
    const [species, setSpecies] = React.useState("")
    const { loading, error, data } = useQuery<CharacterResponse>(GET_CHARACTERS, {
        variables: { page, status, species },
    })

    if (loading) return <p>{language === "en" ? "Loading..." : "Lädt..."}</p>;
    if (error) return <p>{language === "en" ? "Error loading data" : "Fehler beim Laden der Daten"}</p>;
    return (
        <div className="container">
            {/* TODO make filters */}
        <h1 className="text-center my-4">
          {language === "en" ? "Rick and Morty Characters" : "Rick und Morty Charaktere"}
        </h1>
  
        <div className="row">
          {data?.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} language={language} />
          ))}
        </div>
  
        <div className="d-flex justify-content-center my-4">
          <button
            className="btn btn-primary mx-2"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!data?.characters.info.prev}
          >
            {language === "en" ? "Previous" : "Zurück"}
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!data?.characters.info.next}
          >
            {language === "en" ? "Next" : "Weiter"}
          </button>
        </div>
      </div>
    );
}

export default CharacterList;