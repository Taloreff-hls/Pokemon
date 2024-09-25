import { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import Typography from "../styles/Typography";
import ActionBar from "../cmps/ActionBar";
import PokemonTable from "../cmps/PokemonTable";
import PokemonGrid from "../cmps/PokemonGrid";
import { ViewModeEnum } from "../enums/ViewModeEnum";
import colors from "../assets/constants/colors";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { pokemonService } from "../services/pokemon.service";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";
import { TypographyType } from "../enums/TypographyEnum";
import { utilService } from "../services/util.service";

interface PokemonContentProps {
  selectedCtg: number;
}

const PokemonContent = ({ selectedCtg }: PokemonContentProps) => {
  const [viewMode, setViewMode] = useState<ViewModeEnum>(ViewModeEnum.List);
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState<DropdownItem>(
    SORTING_OPTIONS[0]
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { sort_by, sort_order } = utilService.getSortParams(sortOption.label);

  const { data: pokemonResponse = { pokemons: [], total: 0 } } = useQuery(
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
        page,
        rowsPerPage,
        sort_by,
        sort_order,
        searchValue
      ),
    { keepPreviousData: true }
  );

  const {
    data: gridData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
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
      keepPreviousData: true,
    }
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <LayoutContainer>
      <ContentLayout>
        <Typography
          fontWeight={500}
          type={TypographyType.HeadingLg}
          color={colors.greys[300]}
        >
          All Pokemons
        </Typography>
        <ActionBar
          setViewMode={setViewMode}
          setSearchValue={setSearchValue}
          setSortOption={setSortOption}
        />
        {viewMode === ViewModeEnum.List ? (
          <PokemonTable
            pokemons={pokemonResponse.pokemons}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPage={rowsPerPage}
            total={pokemonResponse.total}
            onRowsPerPageChange={handleRowsPerPageChange}
            selectedCtg={selectedCtg}
          />
        ) : (
          <PokemonGrid
            pokemons={gridData?.pages.flatMap((page) => page.pokemons) || []}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </ContentLayout>
    </LayoutContainer>
  );
};

export default PokemonContent;
