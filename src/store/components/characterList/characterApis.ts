/* eslint-disable no-restricted-globals */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../../utils/constants";
import { IPokemonList } from "../../../utils/types/pokemonType";

export const characterApis = createApi({
  reducerPath: "characterApis",

  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  endpoints: (builder) => ({
    getCharacterList: builder.query<IPokemonList, void>({
      query: () => ({
        url: `https://swapi.dev/api/people`,
        method: "GET",
      }),
    }),

  }),
});

export const {
  useGetCharacterListQuery
} = characterApis;
