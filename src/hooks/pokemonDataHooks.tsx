import { useQuery, useInfiniteQuery } from "react-query";
import { pokemonService } from "../services/pokemon.service";
import { PokemonQueryParams } from "../interfaces/Pokemon";

export const usePokemonTableData = ({
  page,
  rowsPerPage,
  sort_by,
  sort_order,
  searchValue,
  selectedCtg,
}: PokemonQueryParams) => {
  return useQuery(
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
        selectedCtg === 1 ? "02fea148-e9dc-4cae-89aa-8db50df0dd48" : undefined,
        page!,
        rowsPerPage!,
        sort_by,
        sort_order,
        searchValue
      ),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
};

export const usePokemonGridData = ({
  sort_by,
  sort_order,
  searchValue,
  selectedCtg,
}: PokemonQueryParams) => {
  return useInfiniteQuery(
    ["infinitePokemonData", selectedCtg, sort_by, sort_order, searchValue],
    ({ pageParam = 0 }) =>
      pokemonService.getPokemons(
        selectedCtg === 1 ? "02fea148-e9dc-4cae-89aa-8db50df0dd48" : undefined,
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
