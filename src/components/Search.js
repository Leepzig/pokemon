import React from 'react'

const Search = ( {search, getSearch}) => {





  return (
    <div style={{padding:"20px"}}>

      <div>
        <select name="type" onChange={getSearch} value={search.type}>
          <option value="">All</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="electric">Electric</option>
        </select>
        <input type="text" name="name" placeholder="Pokemon name..." value={search.name} onChange={getSearch}/>
      </div>
    </div>
  )
}

export default Search
