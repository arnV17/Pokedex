import React from 'react';
import { useState } from 'react';

import { first151Pokemon, getPokedexNumber } from '../index.js';

export function SideNav(props) {
    const {pokenum , setPokenum} =props
    const [pokemonList, setPokemonList] =  useState(first151Pokemon);
    const [searchTerm, setSearchTerm] = useState('');
    
    console.log('Header component rendered');
    return (
        <div className='side-nav'>
            <h1 style={{ textAlign: "center", color: "#000000", fontSize: "2.5em", margin: "20px 0" }}>Pokédex</h1>
            <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)  }placeholder="Search Pokémon" />
            {pokemonList.map((poki, index) => (
                <button className="nav-button" key={index} onClick={()=>{
                    
                    console.log("ONLICKKK");
                    let num=getPokedexNumber(index)
                    setPokenum(num)

                    console.log("Pokenum", pokenum);

                    
                    
                }}  >
                    <h6>{getPokedexNumber(index)}</h6>
                    <h6>{poki}</h6>
                </button>
            ))}
        </div>
    );
}

export default SideNav;
