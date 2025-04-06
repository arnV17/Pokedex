import React from 'react'
import './App.css'
import SideNav from './components/SideNav.jsx'
import { useState } from 'react'
import PokeCards from './components/PokeCards.jsx'

function App() {

  
  const [pokenum, setPokenum] = useState(1)
  

  return (
    <div className='god'>
        <SideNav pokenum={pokenum} setPokenum={setPokenum}/>
        <PokeCards pokenum={pokenum}/>


      
    </div>
  )
}

export default App
