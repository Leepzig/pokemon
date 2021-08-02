import React from 'react'
import PokemonCard from "./PokemonCard"
import { Typography, Button } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'


const PokemonList = ( { pokemon, handleAddPokemon, page, previousPage, nextPage, classes } ) => {

  

  const pokemonArray = pokemon.map(poke => <PokemonCard  pokemon={poke} key={poke.id} buttonFunction={handleAddPokemon}/>)

  return (
    <div>
      <hr/>
      <Grid container spacing={3}>
        {pokemonArray}
        <div>
        <Button onClick={previousPage} className={classes.btn}>Previous</Button> {page} <Button className={classes.btn} onClick={nextPage}>Next</Button>
        </div>
      </Grid>
      
      
    </div>
  )
}

export default PokemonList
