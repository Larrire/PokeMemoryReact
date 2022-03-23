import React, { useState } from "react";
import * as Component from './styles';
import styles from './style.module.css';

interface PokemonCardProps {
  pokemon: any
}

export const PokemonCard = ({pokemon}:PokemonCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleClik = () => {
    setFlipped(!flipped)
  }

  return <Component.PokemonCard onClick={handleClik}>
    <Component.PokemonCardInner className={ flipped ? styles['pokemonCardInner--active'] : {} } >
      <section className={styles.pokemonCardFront}>
        <Component.pokemonCardTitle>
          Poké<br/>Memory
        </Component.pokemonCardTitle>
      </section>
      <Component.PokemonCardBack className={styles.pokemonCardBack}>
        <Component.PokemonCardImg src={pokemon.sprites.other.dream_world.front_default} />
      </Component.PokemonCardBack>
    </Component.PokemonCardInner>
  </Component.PokemonCard>
}