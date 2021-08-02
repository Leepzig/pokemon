import React from 'react'
import PokemonCard from "./PokemonCard"
import Search from "./Search"

import Grid from '@material-ui/core/Grid'


const PokemonList = ( { pokemon, handleAddPokemon } ) => {

  

  const pokemonArray = pokemon.map(poke => <PokemonCard  pokemon={poke} key={poke.id} buttonFunction={handleAddPokemon}/>)

  return (
    <div>
      <hr/>
      <Grid container spacing={3}>
        {pokemonArray}

      </Grid>
      
      
    </div>
  )
}

export default PokemonList
