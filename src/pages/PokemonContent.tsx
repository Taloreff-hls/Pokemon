import { useEffect, useState } from "react";
import Typography from "../styles/Typography";
import ActionBar from "../cmps/ActionBar";
import PokemonTable from "../cmps/PokemonTable";
import PokemonGrid from "../cmps/PokemonGrid";
import { ViewModeEnum } from "../enums/ViewModeEnum";
import colors from "../assets/constants/colors";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";
import { TypographyType } from "../enums/TypographyEnum";
import { utilService } from "../services/util.service";
import {
  usePokemonGridData,
  usePokemonTableData,
} from "../hooks/pokemonDataHooks";

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

  const pokemonTableData = usePokemonTableData({
    page,
    rowsPerPage,
    sort_by,
    sort_order,
    searchValue,
    selectedCtg,
  });

  const pokemonGridData = usePokemonGridData({
    sort_by,
    sort_order,
    searchValue,
    selectedCtg,
  });

  useEffect(() => {
    setPage(0);
  }, [searchValue, sortOption, selectedCtg]);

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
            pokemons={pokemonTableData.data?.pokemons || []}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPage={rowsPerPage}
            total={pokemonTableData.data?.total || 0}
            onRowsPerPageChange={handleRowsPerPageChange}
            selectedCtg={selectedCtg}
          />
        ) : (
          <PokemonGrid
            pokemons={
              pokemonGridData.data?.pages.flatMap((page) => page.pokemons) || []
            }
            fetchNextPage={pokemonGridData.fetchNextPage}
            hasNextPage={pokemonGridData.hasNextPage}
            isFetchingNextPage={pokemonGridData.isFetchingNextPage}
          />
        )}
      </ContentLayout>
    </LayoutContainer>
  );
};

export default PokemonContent;
