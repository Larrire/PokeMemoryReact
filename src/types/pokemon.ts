export type PokemonApiResponse = {
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  }
}

export type Pokemon = {
  id: number,
  imgUrl: string,
  flipped: boolean;
  found: boolean;
}