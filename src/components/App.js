import React, {useState, useEffect} from "react"
import PokemonList from "./PokemonList";



function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])

  //this use effect depends on the first useEffect loading
  //how do I tell this useEffect to wait?
  //use async? and await?
  //or put this useEffect on another component and pass pokemon down as props?
  
  useEffect(() => {
    pokemon.results.forEach( pokemon => {
      fetch(pokemon.url)
      .then(resp => resp.json())
      .then(data => helpSetPokemon(data))
    })
  }, [pokemon])

  function helpSetPokemon(pokemonData) {
    const newPokemon = {
      name: pokemonData.name,
      img: pokemon.sprites.front_default,
      types: pokemon.types[1].type.name
    }
    setPokemonDetails([...pokemonDetails, newPokemon])
  }

  debugger


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
