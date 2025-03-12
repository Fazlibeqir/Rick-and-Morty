import React, { useState } from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'
import CharacterList from './components/CharacterList'

function App() {
  const [language, setLanguage] = useState<"en" | "de">("en")
  return (
    <div className='container'>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <CharacterList language={language} />
      </div>
  )
}

export default App
