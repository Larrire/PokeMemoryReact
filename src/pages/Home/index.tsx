import React from "react";
import * as Component from './styles';

export const Home = () => {
  return <Component.Container>
    <Component.TitleHeader>PokéMemory</Component.TitleHeader>

    <Component.Menu>
      <Component.MenuItem>SinglePlayer</Component.MenuItem>
      <Component.MenuItem>MultiPlayer</Component.MenuItem>
    </Component.Menu>
  </Component.Container>
}