# What is it?

we have a list of names
with that list we can get more information

we have 20 pokemon names and urls in an array of objects
we're going to iterate over 20 => go to the details url
fetch those details and create objects to store for display.

user can look through the pokemon card details and add up to 6 pokemon to their "team"
then the user can register their team which will be save in the json-server
users can browse other teams that other users have created


## TODO

### Components
  - PokemonList => list of PokemonCards => will have next and previous buttons at the bottom of the page to find different pokemon
    - STRECH: implement a search/filter functionality
    - PokemonCard => displays the pokemon object details
      - has add to Team button
      - STRETCH: card is different color depending on type ?
  - MyTeam => will hold the pokemon currently selected for your prospective team
    - will need to add a remove button to the card to replace the add button
      - possible button component?
  - TrainerTeams => shows other pokemon teams that users have made
    - STRETCH: people can upvote or like their favorite teams?
  - NavBar => Home | Pokemon | Trainers 















pokemon = useEffect => list of [{name: bulbasoaur, url:detailed info}, {name:...., url:....}]

const pokemonDetails

{ name: pokemon.name,
  img: pokemon.sprites.front_default
  types: pokemon.types[1].type.name,
  stats:?
  }

pokemon.forEach( pokemon => {
  fetch(pokemon.url)
  then(data => helpSetPokemon(data))
})

helpSetPokemon(pokemonData) {
  const newPokemon = {
    name: pokemonData.name,
    img: pokemon.sprites.front_default,
    types: pokemon.types[1].type.name,
  }
  setPokemonDetails([...PokemonDetails, newPokemon])

}