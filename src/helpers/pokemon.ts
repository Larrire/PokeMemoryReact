import { getPokemonById } from "../services/api";

export async function getPokemonsByIdsArray(pokemonsIds:number[]) {
  const pokemonsArray:Object[] = []
  let count = 0;

  while( count < pokemonsIds.length ){
    const newPokemon = await getPokemonById(pokemonsIds[count]);
    console.log(newPokemon)
    newPokemon && pokemonsArray.push(newPokemon, newPokemon) && count++;

    if( pokemonsArray.length === pokemonsIds.length ) break;
  }

  return pokemonsArray.sort(() => Math.random() - 0.5);
}

export const getRandomIds = (totalIds:number, pokemonsRange: number) => {
  const idsArray:number[] = [];
  let count = 0;

  const idNotPicked = (randomNumber: number) => {
    return !idsArray.find( item => item === randomNumber );
  }

  while (count < totalIds) {
    const randomNumber = parseInt((Math.random() * pokemonsRange).toFixed(0))

    if( idNotPicked(randomNumber) && randomNumber !== 0 ){
      idsArray.push(randomNumber);
      count++
    }
  }

  return idsArray;
}