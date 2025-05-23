import React from 'react';
import { useState } from 'react';

import { first151Pokemon, getPokemonIndex} from '../index.js';

export function SideNav(props) {
    const {pokemun , setPokenum} =props
    //const [pokemonList, setPokemonList] =  useState(first151Pokemon);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredList = first151Pokemon.filter((poki) =>
    poki.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
    
    console.log('Header component rendered');
    return (
        <div className='side-nav'>
            <h1 style={{ textAlign: "center", fontSize: "2.5em", margin: "20px 0" }}>Pokédex</h1>
            <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)  }placeholder="Search Pokémon" />
            {filteredList.map((poki,index) => (
                <button className="nav-button"  onClick={()=>{

                    
                    
                    console.log("ONLICKKK");
                    
                    setPokenum(poki)

                    console.log("Pokenum", pokemun);

                    
                    
                }}  >
                    <h6>{getPokemonIndex(poki)}</h6> 
                    <h6>{poki }</h6>
                </button>
            ))}
        </div>
    );
}

export default SideNav;
