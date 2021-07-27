import React, { useState, useEffect } from "react"
import PokemonList from "./PokemonList";



function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3009/pokemon?_page=1&_limit=20")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])



  return (
    <div className="App">
      <h1>Hello World!</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
