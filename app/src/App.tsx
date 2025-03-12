import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import CharacterCard from './components/CharacterCard'
import {CharacterResponse } from './models/character'
import { GET_CHARACTERS } from './service/queries'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
  const [language, setLanguage] = useState<"en" | "de">("en");
  const {loading, error, data} = useQuery<CharacterResponse>(GET_CHARACTERS, {
    variables: {page: 1, status: "", species: ""},
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <div className='container'>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <h1>{language === "en" ?"Rick and Morty Characters" : "Rick und Morty Charaktere"}</h1>
      {/* TODO make a list component for characters */}
      {data?.characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      </div>
  )
}

export default App
