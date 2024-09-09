import { Pokemon } from "../interfaces/Pokemon";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";

export const pokemonService = {
  sort,
  fightTurn,
  calculateDamage,
  catchPokemon,
  isBattleOver,
  endBattle,
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

function fightTurn(userPokemon: Pokemon, opponentPokemon: Pokemon | null) {
  if (!opponentPokemon) return "user";
  return userPokemon.base?.Speed >= opponentPokemon.base?.Speed
    ? "user"
    : "opponent";
}

function calculateDamage(
  attacker: Pokemon,
  defender: Pokemon,
  defenderHP: number
) {
  console.log("attacker:", attacker);
  console.log("defender:", defender);
  const damage = Math.max(0, attacker.base.Attack - defender.base.Defense);
  console.log(
    `${attacker.name.english} is attacking ${defender.name.english} for ${damage}!, ${defender.name.english} new HP is ${defender.base.HP - damage}`
  );
  const newHP = defenderHP - damage;

  return newHP > 0 ? newHP : 0;
}

function catchPokemon(opponentHP: number, opponentMaxHP: number) {
  const baseRate = 0.1;
  const lowHPRate = 0.7;

  if (opponentHP <= opponentMaxHP * 0.2) {
    return Math.random() < baseRate + lowHPRate;
  }

  return Math.random() < baseRate;
}

function isBattleOver(userHP: number, opponentHP: number) {
  return userHP <= 0 || opponentHP <= 0;
}

function endBattle(userHP: number, catchAttempts: number) {
  if (userHP <= 0) {
    alert("You lost!");
  } else if (catchAttempts <= 0) {
    alert("The Pokémon has fled!");
  } else {
    alert("You won!");
  }
}
