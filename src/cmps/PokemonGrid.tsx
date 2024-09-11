import React, { useState, useEffect, useRef } from "react";
import PokemonCardComponent from "./PokemonCard";
import { Pokemon } from "../interfaces/Pokemon";
import { CardGrid, EmptyPokemonsContainer } from "../styles/StyledPokemonCard";
import PokemonModal from "./PokemonModal";
import { EmptyPokemons } from "../styles/StyledTable";
import emptyPokemons from "../assets/imgs/no_pokemon.png";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

const ROWS = 3;
const COLS = 4;

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [visiblePokemons, setVisiblePokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = ROWS * COLS;
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisiblePokemons(pokemons.slice(0, itemsPerPage));
  }, [pokemons, itemsPerPage]);

  useEffect(() => {
    const currentRef = observerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePokemons();
        }
      },
      { threshold: 1.0 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [observerRef, page, pokemons]);

  const loadMorePokemons = () => {
    const newPage = page + 1;
    const newVisiblePokemons = pokemons.slice(0, newPage * itemsPerPage);
    setVisiblePokemons(newVisiblePokemons);
    setPage(newPage);
  };

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <CardGrid spacing={2}>
        {visiblePokemons.length > 0 ? (
          visiblePokemons.map((pokemon) => (
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
              No Pokemons found.
            </EmptyPokemons>
          </EmptyPokemonsContainer>
        )}
        <div ref={observerRef} style={{ height: "20px" }} />
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
