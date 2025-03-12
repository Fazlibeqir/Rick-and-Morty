import React from 'react'
import CharacterCard from './components/CharacterCard'
import { Character } from './models/character'
import './App.css'

const characters: Character[] = [
  {
    id: '1',
    name: 'Rick Sanchez', 
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
      name: 'Earth',
    },
  },]

function App() {

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default App
