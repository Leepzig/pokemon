import React from 'react'

const PokemonList = ( { pokemon } ) => {



  const pokemonArray = pokemon.map(poke => <li key={poke.name}>{poke.name}</li>)
  return (
    <div>
      <ul>
        {pokemonArray}
      </ul>
      
    </div>
  )
}

export default PokemonList
