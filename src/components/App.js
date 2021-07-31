import React, { useState, useEffect } from "react"
import PokemonList from "./PokemonList";
import TrainersLineup from "./TrainersLineup"
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';




function App() {
  const [pokemon, setPokemon] = useState([])
  const [pickedPokemon, setPickedPokemon] = useState(["","","","","",""])
  const [page, setPage] = useState(1)

  const useStyles = makeStyles((theme) => ({
    btn:{
      backgroundColor:"hsl(0, 0%, 70%)"
    }
  }))

  const classes = useStyles()



  useEffect(() => {
    fetch(`http://localhost:3009/pokemon?_page=${page}&_limit=20`)
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="App">
      <Typography variant="h2">Welcome to Trainer's Dream World!</Typography>
      <Typography variant="subtitle">Where every pokemon can be yours with the click of a button</Typography>
      <TrainersLineup pickedPokemon={pickedPokemon}/>
      <PokemonList pokemon={pokemon} />
      <div style={{padding:"20px"}}>

      <Button onClick={previousPage} className={classes.btn}>Previous</Button> {page} <Button className={classes.btn} onClick={nextPage}>Next</Button>
      </div>
    </div>
  );
}

export default App;
