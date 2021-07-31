import React, { useState } from "react"

  //gets the list of pokemon along with their details URL
  //Then invokes function to loop through the list to make anew list of pokemonDetail Objects
  useEffect( () => {

    let pokeData = []
    async function getPokemon() {
      let next = "https://pokeapi.co/api/v2/pokemon/"
      while (next !== null) {
        const response = await fetch(next)
        const data = await response.json()
        pokeData = [...pokeData, ...data.results]
        next = data.next
      }
      //Change pokeData.length to a smaller number to get a smaller sample
      for (let i = 0; i < 10; i++) {
        const response = await fetch(pokeData[i].url)
        const data = await response.json()
        const statsObj = {}
        data.stats.forEach( stat => statsObj[stat.stat.name] = stat.base_stat)
        const newPokemon = {
          name: pokeData[i].name,
          img: data.sprites.front_default ? data.sprites.front_default: "" ,
          abilities: data.abilities.map(ability => ability.ability),
          stats: statsObj,
          types: data.types.map(type => type.type.name)
        }
        // debugger
        const resp = await fetch("http://localhost:3009/pokemon",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body: JSON.stringify(newPokemon)
        })
      const eachPokemon  = await resp.json()
      }
    }
    getPokemon()

  }, [])