import { useEffect, useState } from "react";
import { ContentLayout } from "../styles/ContentLayout";
import Typography from "../styles/Typography";
import ActionBar from "./ActionBar";
import PokemonTable from "./PokemonTable";
import PokemonGrid from "./PokemonGrid";
import { Pokemon } from "../interfaces/Pokemon";
import { ViewMode } from "../interfaces/ViewMode";
import colors from "../assets/constants/colors";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { pokemonService } from "../services/pokemon.service";

const PokemonContent = () => {
  const [viewMode, setViewMode] = useState<ViewMode["mode"]>("list");
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState<DropdownItem>(
    SORTING_OPTIONS[0]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/src/data/pokemon.json");
    const data = await response.json();
    setPokemonData(data);
  };

  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedPokemonData = pokemonService.sort(
    filteredPokemonData,
    sortOption
  );

  return (
    <ContentLayout>
      <Typography $weight={500} type="heading-lg" color={colors.greys[300]}>
        All Pokemons
      </Typography>
      <ActionBar
        setViewMode={setViewMode}
        setSearchValue={setSearchValue}
        setSortOption={setSortOption}
      />

      {viewMode === "list" ? (
        <PokemonTable pokemons={sortedPokemonData} />
      ) : (
        <PokemonGrid pokemons={sortedPokemonData} />
      )}
    </ContentLayout>
  );
};

export default PokemonContent;
