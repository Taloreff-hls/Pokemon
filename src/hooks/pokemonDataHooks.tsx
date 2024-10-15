import { useQuery, useInfiniteQuery } from "react-query";
import { pokemonService } from "../services/pokemon.service";
import { Pokemon, PokemonQueryParams } from "../interfaces/Pokemon";

export const usePokemonTableData = ({
  page,
  rowsPerPage,
  sort_by,
  sort_order,
  searchValue,
  selectedCtg,
  userId,
}: PokemonQueryParams) => {
  const queryResult = useQuery(
    [
      "pokemonData",
      page,
      rowsPerPage,
      sort_by,
      sort_order,
      searchValue,
      selectedCtg,
    ],
    () =>
      pokemonService.getPokemons(
        selectedCtg === 1 ? userId : undefined,
        page!,
        rowsPerPage!,
        sort_by,
        sort_order,
        searchValue
      ),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  const { data: userPokemonData } = useUserPokemons(userId);

  const pokemonsWithOwnership =
    queryResult.data?.pokemons.map((pokemon: Pokemon) => ({
      ...pokemon,
      belongsToUser:
        userPokemonData?.pokemons.some(
          (userPokemon: Pokemon) => userPokemon.id === pokemon.id
        ) || false,
    })) || [];

  return {
    ...queryResult,
    data: {
      ...queryResult.data,
      pokemons: pokemonsWithOwnership,
    },
  };
};

export const usePokemonGridData = ({
  sort_by,
  sort_order,
  searchValue,
  selectedCtg,
  userId,
}: PokemonQueryParams) => {
  return useInfiniteQuery(
    ["infinitePokemonData", selectedCtg, sort_by, sort_order, searchValue],
    ({ pageParam = 0 }) =>
      pokemonService.getPokemons(
        selectedCtg === 1 ? userId : undefined,
        pageParam,
        12,
        sort_by,
        sort_order,
        searchValue
      ),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage * 12 < lastPage.total ? nextPage : undefined;
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useUserPokemons = (userId: string) => {
  return useQuery(
    ["userPokemons", userId],
    () => pokemonService.getPokemons(userId),
    { refetchOnWindowFocus: false }
  );
};

export const useOpponentPokemon = (userId: string) => {
  return useQuery(
    ["opponentPokemon", userId],
    () => pokemonService.getRandomPokemon(userId),
    { refetchOnWindowFocus: false }
  );
};
