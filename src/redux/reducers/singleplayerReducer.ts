import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'singleplayer',
  initialState: {
    totalPokemons: 15,
    totalClicksCurrentPlay: 0,
    totalFoundPairs: 0,
    firstSelection: {
      pokemon: null,
      card: null
    },
    secondSelection: {
      pokemon: null,
      card: null
    }
  },
  reducers: {
    setTotalClicksCurrentPlay: ( state, action ) => {
      state.totalClicksCurrentPlay = action.payload
    },
    setTotalFoundPairs: ( state, action ) => {
      state.totalFoundPairs = action.payload
    },
    setFirstSelection: ( state, action ) => {
      state.firstSelection = action.payload
    },
    setSecondSelection: ( state, action ) => {
      state.secondSelection = action.payload
    },
  }
});

export const {
  setTotalClicksCurrentPlay,
  setTotalFoundPairs,
  setFirstSelection,
  setSecondSelection
} = slice.actions
export default slice.reducer;