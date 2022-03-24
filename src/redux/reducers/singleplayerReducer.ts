import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'singleplayer',
  initialState: {
    totalPokemons: 2,
    timer: 0,
    totalClicksCurrentPlay: 0,
    totalFoundPairs: 0,
    pokemonsArray: [],
    firstSelection: {
      pokemon: 0.1,
      card: 0.1,
    },
  },
  reducers: {
    setTotalClicksCurrentPlay: ( state, action ) => {
      state.totalClicksCurrentPlay = action.payload
    },
    setTotalFoundPairs: ( state, action ) => {
      state.totalFoundPairs = action.payload
    },
    setPokemonsArray: ( state, action ) => {
      state.pokemonsArray = action.payload
    },
    setFirstSelection: ( state, action ) => {
      state.firstSelection = action.payload
    },
    setTimer: ( state, action ) => {
      state.timer = action.payload
    },
  }
});

export const {
  setTotalClicksCurrentPlay,
  setTotalFoundPairs,
  setPokemonsArray,
  setFirstSelection,
  setTimer
} = slice.actions
export default slice.reducer;