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
      detailText = `Your ${playerPokemon.name.english} defeated ${opponentPokemon?.name.english}!`;
      resultPokemon = playerPokemon;
      break;
    case FightResultEnum.LOST:
      resultText = "You Lost!";
      titleDetailText = "Oh no!";
      detailText = `Your ${playerPokemon.name.english} was defeated by ${opponentPokemon?.name.english}.`;
      resultPokemon = opponentPokemon;
      break;
    case FightResultEnum.UNCAUGHT:
      resultText = `${opponentPokemon?.name.english} has fled!`;
      detailText = `${opponentPokemon?.name.english} has fled after your last catch attempt.`;
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
