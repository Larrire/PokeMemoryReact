import React, { useEffect, useState } from "react";
import * as Component from './styles';
import { PokemonCard } from "../../components/PokemonCard";
import { SinglePlayerHeader } from "../../components/GameHeader/SinglePlayer";
import { getRandomIds, getPokemonsByIdsArray } from "../../helpers/pokemons";
import { useAppSelector } from "../../redux/hooks/useAppSelectores";
import { useDispatch } from 'react-redux'
import { setPokemonsArray, setTimer } from '../../redux/reducers/singleplayerReducer';

export const SinglePlayer = () => {
  const randomPokemonsRange = 151;
  const dispatch = useDispatch();

  const {totalPokemons, totalClicksCurrentPlay, pokemonsArray, timer} = useAppSelector(state => state.singlePlayer);

  useEffect(function(){
    const randomIds = getRandomIds(totalPokemons, randomPokemonsRange);

    getPokemonsByIdsArray(randomIds).then(
      pokemonsArray => {
        dispatch(setPokemonsArray(pokemonsArray));
        setInterval(()=>{
          console.log('a')
          const a = timer+1
          dispatch(setTimer(a));
        }, 1000);
      }
    );
  }, []);

  return <Component.Container>
    <SinglePlayerHeader/>

    {totalClicksCurrentPlay}

    <Component.PokemonCardsContainer>
      { pokemonsArray.map( (pokemon, index) => <PokemonCard key={index} cardIndex={index} pokemon={pokemon} /> )}
    </Component.PokemonCardsContainer>
  </Component.Container>
}
