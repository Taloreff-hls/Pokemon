import { Pokemon } from "../interfaces/Pokemon";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";

export const pokemonService = {
  sort,
};

function sort(pokemons: Pokemon[], selectedOption: DropdownItem): Pokemon[] {
  switch (selectedOption.label) {
    case "Alphabetical A-Z":
      return pokemons.sort((a, b) =>
        a.name.english.localeCompare(b.name.english)
      );
    case "Alphabetical Z-A":
      return pokemons.sort((a, b) =>
        b.name.english.localeCompare(a.name.english)
      );
    case "Power (High to low)":
      return pokemons.sort(
        (a, b) => (b.base?.Attack || 0) - (a.base?.Attack || 0)
      );
    case "Power (Low to high)":
      console.log("selected:", selectedOption.label);
      return pokemons.sort(
        (a, b) => (a.base?.Attack || 0) - (b.base?.Attack || 0)
      );
    case "HP (High to low)":
      return pokemons.sort((a, b) => (b.base?.HP || 0) - (a.base?.HP || 0));
    case "HP (Low to high)":
      return pokemons.sort((a, b) => (a.base?.HP || 0) - (b.base?.HP || 0));
    default:
      return pokemons;
  }
}
