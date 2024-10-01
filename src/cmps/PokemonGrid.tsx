import { useState } from "react";
import PokemonCardComponent from "./PokemonCard";
import { Pokemon } from "../interfaces/Pokemon";
import { CardGrid, EmptyPokemonsContainer } from "../styles/StyledPokemonCard";
import PokemonModal from "./PokemonModal";
import { EmptyPokemons } from "../styles/StyledTable";
import emptyPokemons from "../assets/imgs/no_pokemon.png";
import { useInfiniteScroll } from "../hooks/useInfiniteScrollHook";

interface PokemonGridProps {
  pokemons: Pokemon[];
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
}

const PokemonGrid = ({
  pokemons,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: PokemonGridProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const observerRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <CardGrid spacing={2}>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCardComponent
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => handleCardClick(pokemon)}
            />
          ))
        ) : (
          <EmptyPokemonsContainer>
            <EmptyPokemons>
              <img src={emptyPokemons} alt="no pokemons" />
              No Pokemons were found.
            </EmptyPokemons>
          </EmptyPokemonsContainer>
        )}
        <div ref={observerRef} style={{ height: "20px" }} />
      </CardGrid>
      {isFetchingNextPage && <div>Loading more...</div>}
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
