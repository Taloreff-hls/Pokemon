import { Pokemon } from "../interfaces/Pokemon";

export const getRandomOpponent = (pokemons: Pokemon[]): Pokemon => {
  return pokemons[Math.floor(Math.random() * pokemons.length)];
};
