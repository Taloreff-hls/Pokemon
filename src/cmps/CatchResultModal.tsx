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
import { ButtonSizeEnum, ButtonTypeEnum } from "../enums/ButtonEnum";

interface CatchResultModalProps {
  isCaught: boolean;
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

  const stats = [
    { category: "Height", value: pokemon.height },
    { category: "Weight", value: pokemon.weight },
    { category: "Category", value: pokemon.type.join(", ") },
    { category: "Abilities", value: pokemon.abilities[0] },
  ];

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
              Congratulations! You just caught {pokemon.name}!
            </Typography>
            <ImageContainer>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
            </ImageContainer>
            <DetailsContainer>
              <PokemonDetail>{pokemon.description}</PokemonDetail>
              <PokemonStats>
                {stats.map((stat) => (
                  <PokemonStat key={stat.category}>
                    <StatCategory>{stat.category}</StatCategory>
                    <Ability>{stat.value}</Ability>
                  </PokemonStat>
                ))}
              </PokemonStats>
            </DetailsContainer>
            <Link to="/">
              <GenericButton
                type={ButtonTypeEnum.Primary}
                size={ButtonSizeEnum.Medium}
                label="Back to home"
                fontSize="1.4rem"
                fontWeight="400"
                marginTop={SPACING[4]}
              />
            </Link>
          </ResultInnerContainer>
        </ModalContainer>
      </ModalOverlay>
    );
  }
};

export default CatchResultModal;
