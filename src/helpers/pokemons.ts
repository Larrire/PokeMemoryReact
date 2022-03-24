import { getPokemonById } from "../services/api";
import { PokemonApiResponse, Pokemon } from '../types/pokemon';

export async function getPokemonsByIdsArray(pokemonsIds:number[]) {
  const pokemonsArray:Object[] = []
  let count = 0;

  while( count < pokemonsIds.length ){
    const requestPokemon:PokemonApiResponse = await getPokemonById(pokemonsIds[count]);

    const newPokemon:Pokemon = {
      id: requestPokemon.id,
      flipped: false,
      found: false,
      imgUrl: requestPokemon.sprites.other.dream_world.front_default
    };

    newPokemon && pokemonsArray.push(newPokemon, newPokemon) && count++;

    if( pokemonsArray.length === pokemonsIds.length*2 ) break;
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