import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";

export const pokemonService = {
  sort,
  getPokemons,
  fightTurn,
  calculateDamage,
  catchPokemon,
  isBattleOver,
  endBattle,
  applyDamage,
  determineFirstTurn,
  handleOpponentTurn,
  getRandomPokemon,
};

function sort(pokemons: Pokemon[], selectedOption: DropdownItem): Pokemon[] {
  switch (selectedOption.label) {
    case "Alphabetical A-Z":
      return pokemons.sort((a, b) => a.name.localeCompare(b.name));
    case "Alphabetical Z-A":
      return pokemons.sort((a, b) => b.name.localeCompare(a.name));
    case "Power (High to low)":
      return pokemons.sort((a, b) => (b.attack || 0) - (a.attack || 0));
    case "Power (Low to high)":
      console.log("selected:", selectedOption.label);
      return pokemons.sort((a, b) => (a.attack || 0) - (b.attack || 0));
    case "HP (High to low)":
      return pokemons.sort((a, b) => (b.hp || 0) - (a.hp || 0));
    case "HP (Low to high)":
      return pokemons.sort((a, b) => (a.hp || 0) - (b.hp || 0));
    default:
      return pokemons;
  }
}

async function getPokemons(
  user_id?: string,
  page: number = 0,
  rows: number = 10,
  sort_by: string = "name",
  sort_order: string = "asc",
  name?: string
) {
  const queryParams = new URLSearchParams({
    page: (page + 1).toString(),
    limit: rows.toString(),
    sort_by: sort_by,
    sort_order: sort_order,
  });

  const body: { name?: string; user_id?: string } = {};
  if (name) body.name = name;
  if (user_id) body.user_id = user_id;

  const { data } = await axios.post(
    `http://localhost:4000/pokemons?${queryParams.toString()}`,
    body
  );

  return {
    pokemons: data.pokemons || [],
    total: data.total || 0,
  };
}

async function getRandomPokemon(userId: string) {
  const { data } = await axios.get(
    `http://localhost:4000/pokemons/random?userId=${userId}`
  );
  return data;
}

function fightTurn(userPokemon: Pokemon, opponentPokemon: Pokemon | null) {
  if (!opponentPokemon) return "user";
  return userPokemon.speed >= opponentPokemon.speed ? "user" : "opponent";
}

function calculateDamage(
  attacker: Pokemon,
  defender: Pokemon,
  defenderHP: number
) {
  console.log("attacker:", attacker);
  console.log("defender:", defender);
  const damage = Math.max(0, attacker.attack - defender.defense);
  console.log(
    `${attacker.name} is attacking ${defender.name} for ${damage}!, ${defender.name} new HP is ${defender.hp - damage}`
  );
  const newHP = defenderHP - damage;

  return newHP > 0 ? newHP : 0;
}

function catchPokemon(opponentHP: number, opponentMaxHP: number) {
  const baseRate = 0.1;
  const lowHPRate = 0.4;
  const random = Math.random();

  if (opponentHP <= opponentMaxHP * 0.2) {
    return random < baseRate + lowHPRate;
  }

  return random < baseRate;
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

function applyDamage(attacker: Pokemon, defender: Pokemon, defenderHP: number) {
  const newHP = calculateDamage(attacker, defender, defenderHP);
  const hit = defenderHP - newHP;
  return { newHP, hit };
}

function determineFirstTurn(
  selectedPokemon: Pokemon,
  opponentPokemon: Pokemon | null
) {
  return fightTurn(selectedPokemon, opponentPokemon);
}

function handleOpponentTurn(
  opponentPokemon: Pokemon,
  selectedPokemon: Pokemon,
  userHP: number
) {
  return applyDamage(opponentPokemon, selectedPokemon, userHP);
}
