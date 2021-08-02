import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import PokemonCard from './PokemonCard';


const TrainersLineup = ( { pickedPokemon, removePokemon }) => {


  return (
    <Grid>
      <Grid container spacing={3}>
        {pickedPokemon.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} buttonFunction={removePokemon}/>)}
      </Grid>
    </Grid>
  )
}

export default TrainersLineup
