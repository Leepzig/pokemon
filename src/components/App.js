import React, { useState, useEffect } from "react"
import PokemonList from "./PokemonList";
import TrainersLineup from "./TrainersLineup"
import Search from "./Search"
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';




function App() {
  const [pokemon, setPokemon] = useState([])
  const [pickedPokemon, setPickedPokemon] = useState([])


  const handleAddPokemon = (addedPokemon) => {
    setPickedPokemon([...pickedPokemon, addedPokemon])
  }

  const removePokemon = pokemon => {
    setPickedPokemon([pickedPokemon.filter(poke => poke.id !== pokemon.id)])
  }

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState({
    name:"",
    type:"all"
  })

  const getSearch = e => {
    setSearch({...search, [e.target.name] :e.target.value})
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  const useStyles = makeStyles((theme) => ({
    btn:{
      backgroundColor:"hsl(0, 0%, 70%)"
    }
  }))

  const classes = useStyles()


  useEffect(() => {

    const baseUrl = "http://localhost:3009/pokemon"
    const searchUrl = `${search.name !== "" ? `&name_like=${search.name}&` : ""}`
    const typeFilterUrl = `${search.type === "all"? "" : `&types_like=${search.type}`}`
    const pageUrl = `?_page=${page}&_limit=12`

    const webfetch = `${baseUrl}${pageUrl}${searchUrl}${typeFilterUrl}`
    
    fetch(webfetch)
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  },[page, search])

  useEffect(() => {
    setPage(1)
  },[search])
  

  return (
    <div className="App">
      <Typography variant="h2">Welcome to Trainer's Dream World!</Typography>
      <Typography variant="subtitle1">Where every pokemon can be yours with the click of a button</Typography>
      <TrainersLineup pickedPokemon={pickedPokemon} removePokemon={removePokemon}/>
      <Search getSearch={getSearch} search={search}/>
      <PokemonList pokemon={pokemon} handleAddPokemon={handleAddPokemon}/>
      <div style={{padding:"20px"}}>
      <Button onClick={previousPage} className={classes.btn}>Previous</Button> {page} <Button className={classes.btn} onClick={nextPage}>Next</Button>
      
      </div>
    </div>
  );
}

export default App;
