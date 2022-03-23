const pokeApiUrl = 'https://pokeapi.co/api/v2'; 

export const getPokemonById = (id:number) => {
  return fetch(`${pokeApiUrl}/pokemon/${id}`)
  .then(data => data.json())
  .then(dataJSON => dataJSON)
}