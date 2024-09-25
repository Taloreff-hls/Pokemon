import { useState, useEffect, useRef } from "react";
import PokemonCardComponent from "./PokemonCard";
import { Pokemon } from "../interfaces/Pokemon";
import { CardGrid, EmptyPokemonsContainer } from "../styles/StyledPokemonCard";
import PokemonModal from "./PokemonModal";
import { EmptyPokemons } from "../styles/StyledTable";
import emptyPokemons from "../assets/imgs/no_pokemon.png";

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
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
