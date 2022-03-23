import styled from 'styled-components'
import { secondaryBlue } from '../../styles/variables';

export const Container = styled.div`
  background-image: url('https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Header = styled.div`
  height: 10vh;
  background-color: ${secondaryBlue};
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

export const PokemonCardsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 90vh;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
`;