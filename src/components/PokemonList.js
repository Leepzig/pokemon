import React from 'react'
import PokemonCard from "./PokemonCard"

import Grid from '@material-ui/core/Grid'


const PokemonList = ( { pokemon } ) => {



  const pokemonArray = pokemon.map(poke => <PokemonCard  pokemon={poke} key={poke.id}/>)

  return (
    <div>
      <Grid container spacing={3}>
        {pokemonArray}

      </Grid>
   
      
    </div>
  )
}

export default PokemonList
