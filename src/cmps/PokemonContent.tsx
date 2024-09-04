import { useEffect, useState } from "react";
import { ContentLayout } from "../styles/ContentLayout";
import Typography from "../styles/Typography";
import ActionBar from "./ActionBar";
import PokemonTable from "./PokemonTable";
import PokemonGrid from "./PokemonGrid";
import { Pokemon } from "../interfaces/Pokemon";

const PokemonContent = () => {
  const [viewMode, setViewMode] = useState<"list" | "card">("list");
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/src/data/pokemon.json");
    const data = await response.json();
    setPokemonData(data);
  };

  return (
    <ContentLayout>
      <Typography weight={500} type="heading-lg" color="#44484C">
        All Pokemons
      </Typography>
      <ActionBar setViewMode={setViewMode} />

      {viewMode === "list" ? (
        <PokemonTable pokemons={pokemonData} />
      ) : (
        <PokemonGrid pokemons={pokemonData} />
      )}
    </ContentLayout>
  );
};

export default PokemonContent;
