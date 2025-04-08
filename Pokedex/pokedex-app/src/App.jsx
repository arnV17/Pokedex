import React from 'react'
import './App.css'
import SideNav from './components/SideNav.jsx'
import { useState } from 'react'
import PokeCards from './components/PokeCards.jsx'

function App() {

  
  const [pokemun, setPokenum] = useState("")
  

  return (
    <div className='god'>
        <SideNav pokemun={pokemun} setPokenum={setPokenum}/>
        <PokeCards pokemun={pokemun}/>


      
    </div>
  )
}

export default App
