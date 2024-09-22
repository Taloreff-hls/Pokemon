import { useState, useMemo, useEffect } from "react";
import { useQuery } from "react-query";
import Typography from "../styles/Typography";
import ActionBar from "../cmps/ActionBar";
import PokemonTable from "../cmps/PokemonTable";
import PokemonGrid from "../cmps/PokemonGrid";
import { Pokemon } from "../interfaces/Pokemon";
import { ViewModeEnum } from "../enums/ViewModeEnum";
import colors from "../assets/constants/colors";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { pokemonService } from "../services/pokemon.service";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";
import { TypographyType } from "../enums/TypographyEnum";

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

  const { data: pokemonData = [] } = useQuery(
    "pokemonData",
    pokemonService.getPokemons
  );

  const filteredPokemonData = useMemo(() => {
    return pokemonData.filter(
      (pokemon: Pokemon) =>
        pokemon.name.english
          .toLowerCase()
          .includes(searchValue.toLowerCase()) &&
        (selectedCtg === 1 ? pokemon.belongsToUser : true)
    );
  }, [pokemonData, searchValue, selectedCtg]);

  useEffect(() => {
    setPage(0);
  }, [filteredPokemonData]);

  const sortedPokemonData = pokemonService.sort(
    filteredPokemonData,
    sortOption
  );

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
            pokemons={sortedPokemonData}
            page={page}
            onPageChange={setPage}
            selectedCtg={selectedCtg}
          />
        ) : (
          <PokemonGrid pokemons={sortedPokemonData} key={sortOption.label} />
        )}
      </ContentLayout>
    </LayoutContainer>
  );
};

export default PokemonContent;
