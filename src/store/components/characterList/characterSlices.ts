import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { characterApis } from "./characterApis";

const initialState= {
  characterList: []
};

const characterList = createSlice({
  name: "pokemon-list",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addMatcher(
        characterApis.endpoints.getCharacterList.matchFulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.characterList = action.payload;
        }
      )
  },
});

const { reducer, actions } = characterList;
export const {} = actions;
export default reducer;
