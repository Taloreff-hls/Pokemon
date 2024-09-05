import { useEffect, useState } from "react";
import { ContentLayout } from "../styles/ContentLayout";
import Typography from "../styles/Typography";
import ActionBar from "./ActionBar";
import PokemonTable from "./PokemonTable";
import PokemonGrid from "./PokemonGrid";
import { Pokemon } from "../interfaces/Pokemon";
import { ViewMode } from "../interfaces/ViewMode";
import colors from "../assets/constants/colors";

const PokemonContent = () => {
  const [viewMode, setViewMode] = useState<ViewMode["mode"]>("list");
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = pokemonData.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPokemonData(filteredData);
  }, [searchValue, pokemonData]);

  const fetchData = async () => {
    const response = await fetch("/src/data/pokemon.json");
    const data = await response.json();
    setPokemonData(data);
    setFilteredPokemonData(data);
  };

  return (
    <ContentLayout>
      <Typography weight={500} type="heading-lg" color={colors.greys[300]}>
        All Pokemons
      </Typography>
      <ActionBar setViewMode={setViewMode} setSearchValue={setSearchValue} />

      {viewMode === "list" ? (
        <PokemonTable pokemons={filteredPokemonData} />
      ) : (
        <PokemonGrid pokemons={filteredPokemonData} />
      )}
    </ContentLayout>
  );
};

export default PokemonContent;
