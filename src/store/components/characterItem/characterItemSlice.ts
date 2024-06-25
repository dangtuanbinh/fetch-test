import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  characterItem: null
};

const characterItem = createSlice({
  name: "characterItem",
  initialState,
  reducers: {
    setCharacterItem: (state: any, action: PayloadAction<any>) => {
      state.characterItem = action.payload;
    },
  },
});

const { reducer, actions } = characterItem;
export const { setCharacterItem } = actions;
export default reducer;
