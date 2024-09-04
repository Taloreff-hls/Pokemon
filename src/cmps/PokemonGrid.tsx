import React, { useState } from "react";
import PokemonCardComponent from "./PokemonCard";
import { Pokemon } from "../interfaces/Pokemon";
import { CardGrid } from "../styles/StyledPokemonCard";
import PokemonModal from "./PokemonModal";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <CardGrid container spacing={2}>
        {pokemons.map((pokemon) => (
          <PokemonCardComponent
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handleCardClick(pokemon)}
          />
        ))}
      </CardGrid>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  );
};

export default PokemonGrid;
