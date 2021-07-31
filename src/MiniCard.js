import React from 'react'
import { Typography } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const MiniCard = ( { pokemon } ) => {

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 350,
    width: 250,
  }
}))

const classes = useStyles()
 
  return (
    <Grid item xs={3} >
      <Grid container justifyContent="center" >
        
        <Paper className={classes.paper} elevation={5}>
          <Grid container justifyContent="center">

            <Typography gutterBottom variant="h5" component="h2">{pokemon.name}</Typography>
            <CardMedia
          component="img"
          alt="Pokemon"
          height="140"
          image={pokemon.img}
          title={pokemon.name}
        />
            <CardContent>
              <Typography>{pokemon.abilities[0].name}</Typography>
              <Grid container justifyContent="center">
              <Typography variant="subheading">HP: {pokemon.stats.hp}</Typography>
              <Typography>Attack: {pokemon.stats.attack}</Typography>
              <Typography>Defense: {pokemon.stats.defense}</Typography>
              <Typography>Special Attack: {pokemon.stats["special-attack"]}</Typography>
              <Typography>Special Defense: {pokemon.stats["special-defense"]}</Typography>
              <Typography>Speed: {pokemon.stats.speed}</Typography>

              </Grid>
              <Typography>{pokemon.types[0]}</Typography>
              <Button >Add To List</Button>
            </CardContent>
          </Grid>

        </Paper>
      </Grid>
    </Grid>
  )
}

export default MiniCard