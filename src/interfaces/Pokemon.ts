import { PokemonType } from "../enums/PokemonEnum";

// export interface Pokemon {
//   id: number;
//   name: {
//     english: string;
//     japanese?: string;
//     chinese?: string;
//     french?: string;
//   };
//   type: PokemonType[];
//   base: {
//     HP: number;
//     Attack: number;
//     Defense: number;
//     "Sp. Attack": number;
//     "Sp. Defense": number;
//     Speed: number;
//   };
//   species: string;
//   description: string;
//   evolution?: { prev?: string; next?: [string, string][] };
//   profile: {
//     height: string;
//     weight: string;
//     egg?: string[];
//     ability: [string, string][];
//     gender?: string;
//   };
//   image: {
//     sprite: string;
//     thumbnail: string;
//     hires: string;
//   };
//   belongsToUser: boolean;
// }

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
}
