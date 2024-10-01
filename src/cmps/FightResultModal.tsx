import { Link } from "react-router-dom";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";
import Typography from "../styles/Typography";
import GenericButton from "../genericCmps/button/GenericButton";
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
import { useFightResult } from "../hooks/fightResultHooks";
import { FightResultEnum } from "../enums/FightResultEnum";
import { ButtonSizeEnum, ButtonTypeEnum } from "../enums/ButtonEnum";

interface FightResultModalProps {
  result: FightResultEnum;
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
  const { resultText, titleDetailText, detailText, resultPokemon } =
    useFightResult(result, playerPokemon, opponentPokemon);

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
              src={resultPokemon?.image}
              alt={resultPokemon?.name}
            />
          </PokemonContainer>
          <Typography
            type={TypographyType.HeadingMd}
            color={colors.greys[700]}
            marginBottom={SPACING[4]}
            fontWeight={600}
          >
            {titleDetailText}
          </Typography>
          <Typography
            type={TypographyType.Body}
            color={colors.greys[700]}
            marginBottom={SPACING[4]}
          >
            {detailText}
          </Typography>

          <Link to="/">
            <GenericButton
              type={ButtonTypeEnum.Primary}
              size={ButtonSizeEnum.Medium}
              label="Back to Home"
              fontSize="1.4rem"
              fontWeight="400"
              marginTop={SPACING[4]}
              onClick={onClose}
            />
          </Link>
        </ResultInnerContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FightResultModal;
