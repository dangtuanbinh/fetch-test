import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./components/customModal/modalSlice";
import { characterApis } from "./components/characterList/characterApis";
import pokemonReducer from "./components/characterList/characterSlices";
import characterItemReducer from "./components/characterItem/characterItemSlice"

const rootReducer = {
  [characterApis.reducerPath]: characterApis.reducer,
  modal: modalReducer,
  characterItem: characterItemReducer,
  pokemon: pokemonReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([characterApis.middleware]),
});

export default store;
