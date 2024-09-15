import { Link } from "react-router-dom";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";
import Typography from "../styles/Typography";
import GenericButton from "../genericCmps/button/GenericButton";
import { FightResult } from "../types";
import { Pokemon } from "../interfaces/Pokemon";
import {
  ModalContainer,
  ModalOverlay,
  PokemonImage,
} from "../styles/StyledPokemonModal";
import {
  PokemonContainer,
  ResultInnerContainer,
} from "../styles/StyledFightResultModal";
import { TypographyType } from "../enums/TypographyEnum";

interface FightResultModalProps {
  result: FightResult;
  playerPokemon: Pokemon;
  opponentPokemon: Pokemon | null;
  onClose: () => void;
}

const FightResultModal = ({
  result,
  playerPokemon,
  opponentPokemon,
  onClose,
}: FightResultModalProps) => {
  let resultText = "";
  let detailText = "";
  let titleDetailText = "";
  let resultPokemon: Pokemon | null = null;

  switch (result) {
    case "won":
      resultText = "You Won!";
      titleDetailText = "Congratulations!";
      detailText = `Your ${playerPokemon.name.english} defeated ${opponentPokemon?.name.english}!`;
      resultPokemon = playerPokemon;
      break;
    case "lost":
      resultText = "You Lost!";
      titleDetailText = "Oh no!";
      detailText = `Your ${playerPokemon.name.english} was defeated by ${opponentPokemon?.name.english}.`;
      resultPokemon = opponentPokemon;
      break;
    case "uncaught":
      resultText = `${opponentPokemon?.name.english} has fled!`;
      detailText = `${opponentPokemon?.name.english} has fled after your last catch attempt.`;
      resultPokemon = opponentPokemon;
      break;
    default:
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ResultInnerContainer>
          <Typography
            color={colors.primary[500]}
            fontWeight={700}
            type={TypographyType.HeadingMdLg}
          >
            {resultText}
          </Typography>

          <PokemonContainer>
            <PokemonImage
              src={resultPokemon?.image.hires}
              alt={resultPokemon?.name.english}
            />
          </PokemonContainer>
          <Typography
            type={TypographyType.HeadingMd}
            color={colors.greys[700]}
            margin={`0 0 ${SPACING[4]} 0`}
            fontWeight={600}
          >
            {titleDetailText}
          </Typography>
          <Typography
            type={TypographyType.Body}
            color={colors.greys[700]}
            margin={`0 0 ${SPACING[4]} 0`}
          >
            {detailText}
          </Typography>

          <Link to="/">
            <GenericButton
              type="primary"
              size="medium"
              label="Back to Home"
              fontSize="1.4rem"
              fontWeight="400"
              margin={`${SPACING[4]} 0 0`}
              onClick={onClose}
            />
          </Link>
        </ResultInnerContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FightResultModal;
