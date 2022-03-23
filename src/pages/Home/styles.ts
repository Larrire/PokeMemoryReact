import styled from 'styled-components';
import { secondaryBlue } from '../../styles/variables';
import grassBackground from '../../assets/images/pokemon_grass_texture_wallpaper_by_crystaelart_derwvdb-pre.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${grassBackground});
`;

export const TitleHeader = styled.h1`
  font-size: 3rem;
  
  font-family: PokemonFont;
  -webkit-text-stroke: 4px rgb(52, 72, 175);
  -webkit-text-fill-color: rgb(255, 203, 5);
  letter-spacing: 5px;
  margin-bottom: 5rem;

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const Menu = styled.div`
`;

export const MenuItem = styled.div`
  font-family: PokemonFont;
  background-color: ${secondaryBlue};
  font-size: 2rem;
  -webkit-text-stroke: 2px rgb(52, 72, 175);
  -webkit-text-fill-color: rgb(255, 203, 5);
  margin-bottom: 2rem;
  padding: 8px 24px;
  border-radius: 8px;

  &:nth-of-type(2) {
    opacity: 0.5;
  }
`;