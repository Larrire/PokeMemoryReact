import styled from 'styled-components';
import { devices } from '../../styles/variables';

export const PokemonCard = styled.article`
  perspective: 1000px;
  background-color: transparent;
  margin: 1%;
  height: 15%;
  width: 16%;

  @media screen and (min-width: ${devices.laptop}) { 
    height: 25%;
    width: 8%;
  }
`;

export const PokemonCardInner = styled.div`
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  box-shadow: 0 0 10px rgba(0,0,0, 0.15);
  transform-style: preserve-3d;
`;

export const PokemonCardBack = styled.section`
  transform: rotateY(180deg);
  background-color: #fff;
  border-radius: inherit;
`;

export const pokemonCardTitle = styled.p`
  font-size: 18px;
  font-family: PokemonFont;
  -webkit-text-stroke: 1px rgb(52, 72, 175);
  -webkit-text-fill-color: rgb(255, 203, 5);

  @media screen and (min-width: ${devices.laptop}) { 
    font-size: 24px;
  }

  @media screen and (min-width: ${devices.laptopL}) { 
    font-size: 24px;

    br {
      display: none;
    }
  }
`;

export const PokemonCardImg = styled.img`
  height: 100%;
  width: 100%;
`;
