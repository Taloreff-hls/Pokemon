import { useEffect, useState } from "react";
import {
  Ability,
  DetailsContainer,
  ImageContainer,
  ModalContainer,
  ModalOverlay,
  PokemonDetail,
  PokemonImage,
  PokemonStat,
  PokemonStats,
  RotatingPokeball,
  StatCategory,
} from "../styles/StyledPokemonModal";
import pokeball from "../assets/imgs/pokeball-pokemon-svgrepo-com.svg";
import { SPACING } from "../assets/constants/spacings";
import { Pokemon } from "../interfaces/Pokemon";
import Typography from "../styles/Typography";
import colors from "../assets/constants/colors";
import GenericButton from "../genericCmps/button/GenericButton";
import { Link } from "react-router-dom";
import { ResultInnerContainer } from "../styles/StyledFightResultModal";
import { TypographyType } from "../enums/TypographyEnum";
import {
  TIMEOUT_MEDIUM_DURATION,
  TIMEOUT_LONG_DURATION,
} from "../assets/constants/timeouts";

interface CatchResultModalProps {
  isCaught: boolean | null;
  pokemon: Pokemon;
  onClose: () => void;
}

const CatchResultModal = ({
  isCaught,
  pokemon,
  onClose,
}: CatchResultModalProps) => {
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    if (!isCaught && hasResult) {
      const timer = setTimeout(() => {
        onClose();
      }, TIMEOUT_MEDIUM_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isCaught, onClose, hasResult]);

  useEffect(() => {
    const resultTimer = setTimeout(() => {
      setHasResult(true);
    }, TIMEOUT_LONG_DURATION);

    return () => clearTimeout(resultTimer);
  }, []);

  if (!hasResult) {
    return (
      <ModalOverlay>
        <RotatingPokeball src={pokeball} alt="Pokeball" />
      </ModalOverlay>
    );
  }

  if (isCaught) {
    return (
      <ModalOverlay>
        <ModalContainer>
          <ResultInnerContainer>
            <Typography
              color={colors.primary[500]}
              fontWeight={700}
              type={TypographyType.Subheading}
            >
              Congratulations! You just caught {pokemon.name.english}!
            </Typography>
            <ImageContainer>
              <PokemonImage
                src={pokemon.image.hires}
                alt={pokemon.name.english}
              />
            </ImageContainer>
            <DetailsContainer>
              <PokemonDetail>{pokemon.description}</PokemonDetail>
              <PokemonStats>
                <PokemonStat>
                  <StatCategory>Height</StatCategory>
                  <Ability>{pokemon.profile.height}</Ability>
                </PokemonStat>
                <PokemonStat>
                  <StatCategory>Weight</StatCategory>
                  <Ability>{pokemon.profile.weight}</Ability>
                </PokemonStat>
                <PokemonStat>
                  <StatCategory>Category</StatCategory>
                  <Ability>{pokemon.type[0]}</Ability>
                </PokemonStat>
                <PokemonStat>
                  <StatCategory>Abilities</StatCategory>
                  <Ability>{pokemon.profile.ability[0][0]}</Ability>
                </PokemonStat>
              </PokemonStats>
            </DetailsContainer>
            <Link to="/">
              <GenericButton
                type="primary"
                size="medium"
                label="Back to home"
                fontSize="1.4rem"
                fontWeight="400"
                margin={`${SPACING[4]} 0 0 auto`}
              />
            </Link>
          </ResultInnerContainer>
        </ModalContainer>
      </ModalOverlay>
    );
  }
};

export default CatchResultModal;
