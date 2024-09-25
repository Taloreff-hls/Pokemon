import { PokemonType } from "../enums/PokemonEnum";

export interface Pokemon {
  id: string;
  name: string;
  type: PokemonType[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  description: string;
  image: string;
  height: string;
  weight: string;
  abilities: [string][];
  belongsToUser?: boolean;
}

export interface PokemonQueryParams {
  sort_by: string;
  sort_order: string;
  searchValue: string;
  selectedCtg: number;
  page?: number;
  rowsPerPage?: number;
  userId: string;
}
