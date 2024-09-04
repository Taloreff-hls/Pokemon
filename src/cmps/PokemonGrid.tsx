import { Pokemon } from "../interfaces/Pokemon";
import PokemonCard from "./PokemonCard";
import { CardGrid } from "../styles/StyledPokemonCard";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <CardGrid container spacing={2}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardGrid>
  );
};

export default PokemonGrid;
