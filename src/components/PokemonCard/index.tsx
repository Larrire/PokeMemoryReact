import React, { useEffect, useState } from "react";
import * as Component from './styles';
import styles from './style.module.css';
import { useAppSelector } from '../../redux/hooks/useAppSelectores';
import { useDispatch } from 'react-redux'
import { setFirstSelection, setPokemonsArray, setTotalClicksCurrentPlay, setTotalFoundPairs } from '../../redux/reducers/singleplayerReducer';
import { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon
  cardIndex: number
}

export const PokemonCard = ({pokemon, cardIndex}:PokemonCardProps) => {
  const dispatch = useDispatch();

  const {totalClicksCurrentPlay, firstSelection, pokemonsArray, totalFoundPairs, totalPokemons} = useAppSelector(state => state.singlePlayer);

  const handleClik = () => {
    if( totalClicksCurrentPlay >= 2 ) return null;
    if( firstSelection.card === cardIndex ) return null;
    
    dispatch(setTotalClicksCurrentPlay( totalClicksCurrentPlay + 1 ));

    const currentPokemonsArray:Pokemon[] = [...pokemonsArray];
    const currentCard = {...currentPokemonsArray[cardIndex]};

    currentCard.flipped = true;

    currentPokemonsArray[cardIndex] = currentCard;

    dispatch(setPokemonsArray(currentPokemonsArray))

    if( totalClicksCurrentPlay === 0 ){
      dispatch(setFirstSelection({
        pokemon: pokemon.id,
        card: cardIndex,
      }));

      return null;
    }

    const newPokemonsArray:Pokemon[] = [...pokemonsArray];
    const resetedFirstSelection = {...newPokemonsArray[firstSelection.card]}
    const resetedSecondSelection = {...currentCard}

    if( equalCards(resetedFirstSelection, currentCard) ){
      const newTotalFoundPairs = totalFoundPairs + 1
      dispatch(setTotalFoundPairs(newTotalFoundPairs));
      resetedFirstSelection.found = true;
      resetedSecondSelection.found = true;
      
      if( verifyVictory(newTotalFoundPairs) ) return showVictoryMessage();
    } else {  
      resetedFirstSelection.flipped = false;
      resetedSecondSelection.flipped = false;
    }
    
    newPokemonsArray[firstSelection.card] = resetedFirstSelection;
    newPokemonsArray[cardIndex] = resetedSecondSelection;

    resetTurn(newPokemonsArray);
  }

  const verifyVictory = (newTotalFoundPairs:number) => {
    return newTotalFoundPairs === totalPokemons
  }

  const showVictoryMessage = () => {
    setTimeout(() => {
      alert('Parabéns, você venceu o jogo!');
    }, 1000);
  }

  const equalCards = (firstSelection: Pokemon, secondSelection: Pokemon) => {
    return firstSelection.id === secondSelection.id
  }

  const resetTurn = (newPokemonsArray:Pokemon[]) => {
    setTimeout(()=>{
      dispatch(setTotalClicksCurrentPlay( 0 ))
      dispatch(setPokemonsArray(newPokemonsArray))
      dispatch(setFirstSelection({
        pokemon: 0.1,
        card: 0.1
      }));
    }, 2000);
  }

  return <Component.PokemonCard onClick={handleClik}>
    <Component.PokemonCardInner className={ pokemon.flipped ? styles['pokemonCardInner--active'] : {} } >
      <section className={styles.pokemonCardFront}>
        <Component.PokemonCardTitle>
          Poké<br/>Memory
        </Component.PokemonCardTitle>
      </section>
      <Component.PokemonCardBack className={styles.pokemonCardBack}>
        <Component.PokemonCardImg src={pokemon.imgUrl} />
      </Component.PokemonCardBack>
    </Component.PokemonCardInner>
  </Component.PokemonCard>
}