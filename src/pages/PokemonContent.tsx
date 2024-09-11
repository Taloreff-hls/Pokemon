import { useState } from "react";
import Typography from "../styles/Typography";
import ActionBar from "../cmps/ActionBar";
import PokemonTable from "../cmps/PokemonTable";
import PokemonGrid from "../cmps/PokemonGrid";
import { Pokemon } from "../interfaces/Pokemon";
import { ViewMode } from "../interfaces/ViewMode";
import colors from "../assets/constants/colors";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { pokemonService } from "../services/pokemon.service";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";

interface PokemonContentProps {
  selectedCtg: number;
  pokemonData: Pokemon[];
}

const PokemonContent = ({ selectedCtg, pokemonData }: PokemonContentProps) => {
  const [viewMode, setViewMode] = useState<ViewMode["mode"]>("list");
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState<DropdownItem>(
    SORTING_OPTIONS[0]
  );

  const filteredPokemonData = pokemonData
    .filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((pokemon) => (selectedCtg === 1 ? pokemon.belongsToUser : true));

  const sortedPokemonData = pokemonService.sort(
    filteredPokemonData,
    sortOption
  );

  return (
    <LayoutContainer>
      <ContentLayout>
        <Typography
          fontWeight={500}
          type="heading-lg"
          color={colors.greys[300]}
        >
          All Pokemons
        </Typography>
        <ActionBar
          setViewMode={setViewMode}
          setSearchValue={setSearchValue}
          setSortOption={setSortOption}
        />

        {viewMode === "list" ? (
          <PokemonTable
            pokemons={sortedPokemonData}
            selectedCtg={selectedCtg}
          />
        ) : (
          <PokemonGrid pokemons={sortedPokemonData} />
        )}
      </ContentLayout>
    </LayoutContainer>
  );
};

export default PokemonContent;
