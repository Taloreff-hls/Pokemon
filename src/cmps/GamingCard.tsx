import { useEffect, useMemo, useRef, useState } from "react";
import {
  StyledGamingCard,
  AvatarContainer,
  ImageContainer,
  PowerLevelContainer,
  PokemonImage,
  StyledProgress,
} from "../styles/StyledGamingCard";
import Typography from "../styles/Typography";
import { Pokemon } from "../interfaces/Pokemon";
import colors from "../assets/constants/colors";
import { PowerLevel } from "../styles/StyledPokemonCard";
import { SPACING } from "../assets/constants/spacings";
import { TypographyType } from "../enums/TypographyEnum";
import { TIMEOUT_SHORT_DURATION } from "../assets/constants/timeouts";
interface GamingCardProps {
  pokemon: Pokemon;
  hp: number;
  isUser: boolean;
  activeTurn: boolean;
  hit: number;
  isFightClicked: boolean;
}

const GamingCard = ({
  pokemon,
  hp,
  isUser,
  activeTurn,
  hit,
  isFightClicked,
}: GamingCardProps) => {
  const [animatedHP, setAnimatedHP] = useState(hp);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevHpRef = useRef(hp);

  const formattedPokemonId = useMemo(() => {
    return `#${pokemon.id.toString().padStart(4, "0")}`;
  }, [pokemon.id]);

  useEffect(() => {
    if (hit > 0) {
      setIsAnimating(true);
      const interval = setInterval(() => {
        setAnimatedHP((prevAnimatedHP) => {
          const newHP = Math.max(prevAnimatedHP - 1, hp);
          if (newHP === hp) {
            clearInterval(interval);
            setIsAnimating(false);
          }
          return newHP;
        });
      }, 30);

      return () => clearInterval(interval);
    } else if (hit === 0 && activeTurn && isFightClicked) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), TIMEOUT_SHORT_DURATION);
    }

    prevHpRef.current = hp;
  }, [activeTurn]);

  useEffect(() => {
    setAnimatedHP(pokemon.hp);
  }, [pokemon]);

  return (
    <StyledGamingCard
      $activeTurn={activeTurn}
      $isAnimating={isAnimating}
      $hit={hit}
    >
      <Typography
        fontWeight={700}
        type={TypographyType.HeadingMdLg}
        color={colors.neutrals[400]}
        aligntext="center"
      >
        {isUser ? "You" : "Opponent"}
      </Typography>
      <AvatarContainer>
        <ImageContainer>
          <PokemonImage src={pokemon.image} alt={pokemon.name} />
        </ImageContainer>
        <PowerLevelContainer>
          <PowerLevel>
            <Typography
              type={TypographyType.Caption}
              fontWeight={700}
              color={colors.neutrals[500]}
            >
              {pokemon.attack}
            </Typography>
            <Typography
              type={TypographyType.XSmall}
              fontWeight={400}
              color={colors.neutrals[500]}
              marginRight={SPACING[1]}
            >
              pwr
            </Typography>
          </PowerLevel>
        </PowerLevelContainer>
      </AvatarContainer>
      <Typography
        fontWeight={400}
        type={TypographyType.SubheadingMd}
        color={colors.neutrals[200]}
        aligntext="center"
      >
        {formattedPokemonId}
      </Typography>
      <Typography
        fontWeight={400}
        type={TypographyType.HeadingLg}
        color={colors.neutrals[500]}
        aligntext="center"
      >
        {pokemon.name}
      </Typography>
      <StyledProgress value={animatedHP} max={pokemon.hp} />
    </StyledGamingCard>
  );
};

export default GamingCard;
