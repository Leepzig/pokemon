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

import { useColorManager } from "./hooks"

const PokemonCard = ( { pokemon, buttonFunction } ) => {
  let cardColor
  let buttonColor

  const [grassColor, changeGrassColor] = useColorManager("hsl(140, 100%, 40%)")
  const [fireColor, changeFireColor] = useColorManager("hsl(3, 100%, 72%)")
  const [bugColor, changeBugColor] = useColorManager("hsl(90, 100%, 45%)")
  const [waterColor, changeWaterColor] = useColorManager("hsl(220, 100%, 60%)")
  const [poisonColor, changePoisonColor] = useColorManager("hsl(109, 98%, 50%)")
  const [normalColor, changeNormalColor] = useColorManager("hsl(0, 0%, 80%)")
  const [groundColor, changeGroundColor] = useColorManager("hsl(31, 45%, 62%)")
  const [electricColor, changeElectricColor] = useColorManager("hsl(62, 100%, 81%)")
  const [psychicColor, changePsychicColor] = useColorManager("hsl(312, 100%, 82%)")
  const [fightingColor, changeFightingColor] = useColorManager("hsl(25, 100%, 80%)")
  const [rockColor, changeRockColor] = useColorManager("hsl(42, 33%, 76%)")
  const [fairyColor, changeFairyColor] = useColorManager("hsl(323, 100%, 94%)")
  const [ghostColor, changeGhostColor] = useColorManager("hsl(323, 17%, 52%)")

  const lightnessChange = -20

  switch (pokemon.types[0]) {
    case "grass":
      cardColor = grassColor
      buttonColor = changeGrassColor(lightnessChange)
      break
    case "fire":
      cardColor = fireColor
      buttonColor = changeFireColor(lightnessChange)
      break
    case "bug":
      cardColor = bugColor
      buttonColor = changeBugColor(lightnessChange)
      break
    case "water":
      cardColor = waterColor
      buttonColor = changeWaterColor(lightnessChange)
      break
    case "poison":
      cardColor = poisonColor
      buttonColor = changePoisonColor(lightnessChange)
      break
    case "electric":
      cardColor = electricColor
      buttonColor = changeElectricColor(lightnessChange)
      break
    case "ground":
      cardColor = groundColor
      buttonColor = changeGroundColor(lightnessChange)
      break
    case "psychic":
      cardColor = psychicColor
      buttonColor = changePsychicColor(lightnessChange)
      break
    case "fairy":
      cardColor = fairyColor
      buttonColor = changeFairyColor(lightnessChange)
      break
    case "rock":
      cardColor = rockColor
      buttonColor = changeRockColor(lightnessChange)
      break
    case "fighting":
      cardColor = fightingColor
      buttonColor = changeFightingColor(lightnessChange)
      break
    case "ghost":
      cardColor = ghostColor
      buttonColor = changeGhostColor(lightnessChange)
      break
    default:
      cardColor = normalColor
      buttonColor = changeNormalColor(lightnessChange)
  } 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 350,
    width: 250,
  },
  cardColor:{
    backgroundColor: cardColor
  },
  buttonColor:{
    backgroundColor: buttonColor
  }
}))

const classes = useStyles()
 
  return (
    <Grid item xs={3} >
      <Grid container justifyContent="center" >
        
        <Paper className={classes.paper} elevation={5}>
          <Grid container justifyContent="center" className={classes.cardColor}>

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
              <Grid container justifyContent="flex-start">
              <Typography variant="subtitle1">HP: {pokemon.stats.hp}</Typography>
              <Typography variant="subtitle1">Attack: {pokemon.stats.attack}</Typography>
              <Typography variant="subtitle1">Defense: {pokemon.stats.defense}</Typography>
              <Typography variant="subtitle1">Special Attack: {pokemon.stats["special-attack"]}</Typography>
              <Typography variant="subtitle1">Special Defense: {pokemon.stats["special-defense"]}</Typography>
              <Typography variant="subtitle1">Speed: {pokemon.stats.speed}</Typography>

              </Grid>
              <Typography>{pokemon.types[0]}</Typography>
              <Button onClick={() => buttonFunction(pokemon)} className={classes.buttonColor}>Add To List</Button>
            </CardContent>
          </Grid>

        </Paper>
      </Grid>
    </Grid>
  )
}

export default PokemonCard
