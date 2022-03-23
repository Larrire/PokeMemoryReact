import React, { useEffect, useState } from "react";
import * as Component from './styles';
import { PokemonCard } from "../../components/PokemonCard";
import { SinglePlayerHeader } from "../../components/GameHeader/SinglePlayer";
import { getRandomIds, getPokemonsByIdsArray } from "../../helpers/pokemons";

export const SinglePlayer = () => {
  const randomPokemonsRange = 20;
  const totalPokemons = 15;
  const [pokemonsArray, setPokemonsArray] = useState<Object[]>([]);

  useEffect(function(){
    const randomIds = getRandomIds(totalPokemons, randomPokemonsRange);

    getPokemonsByIdsArray(randomIds).then(
      pokemonsArray => {
        setPokemonsArray(pokemonsArray)
      }
    );
  }, []);

  return <Component.Container>
    <SinglePlayerHeader/>

    <Component.PokemonCardsContainer>
      { pokemonsArray.map( (pokemon, index) => <PokemonCard key={index} pokemon={pokemon} /> )}
    </Component.PokemonCardsContainer>
  </Component.Container>
}
