import { Pokemon } from "../interfaces/Pokemon";
import { FightResultEnum } from "../enums/FightResultEnum";

interface FightResultDetails {
  resultText: string;
  titleDetailText: string;
  detailText: string;
  resultPokemon: Pokemon | null;
}

export const useFightResult = (
  result: FightResultEnum,
  playerPokemon: Pokemon,
  opponentPokemon: Pokemon | null
): FightResultDetails => {
  let resultText = "";
  let detailText = "";
  let titleDetailText = "";
  let resultPokemon: Pokemon | null = null;

  switch (result) {
    case FightResultEnum.WON:
      resultText = "You Won!";
      titleDetailText = "Congratulations!";
      detailText = `Your ${playerPokemon.name} defeated ${opponentPokemon?.name}!`;
      resultPokemon = playerPokemon;
      break;
    case FightResultEnum.LOST:
      resultText = "You Lost!";
      titleDetailText = "Oh no!";
      detailText = `Your ${playerPokemon.name} was defeated by ${opponentPokemon?.name}.`;
      resultPokemon = opponentPokemon;
      break;
    case FightResultEnum.UNCAUGHT:
      resultText = `${opponentPokemon?.name} has fled!`;
      detailText = `${opponentPokemon?.name} has fled after your last catch attempt.`;
      resultPokemon = opponentPokemon;
      break;
    default:
      break;
  }

  return {
    resultText,
    titleDetailText,
    detailText,
    resultPokemon,
  };
};
