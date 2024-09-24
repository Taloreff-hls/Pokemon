import { useState } from "react";
import { useQuery } from "react-query";
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
        page,
        rowsPerPage,
        sort_by,
        sort_order,
        searchValue,
        selectedCtg === 1 ? "139bb823-ea3d-4d80-9287-e48fa374d105" : undefined
      ),
    { keepPreviousData: true }
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0); // Reset to the first page when changing rows per page
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
            pokemons={pokemonResponse.pokemons}
            key={sortOption.label}
          />
        )}
      </ContentLayout>
    </LayoutContainer>
  );
};

export default PokemonContent;
