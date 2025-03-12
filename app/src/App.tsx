import React from 'react'
import { useQuery } from '@apollo/client'
import CharacterCard from './components/CharacterCard'
import {CharacterResponse } from './models/character'
import { GET_CHARACTERS } from './service/queries'
import './App.css'

function App() {
  const {loading, error, data} = useQuery<CharacterResponse>(GET_CHARACTERS, {
    variables: {page: 1, status: "", species: ""},
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <div>
      {data?.characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default App
