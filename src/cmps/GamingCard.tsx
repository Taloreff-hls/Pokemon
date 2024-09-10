import { useEffect, useRef, useState } from "react";
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
      setTimeout(() => setIsAnimating(false), 1000);
    }

    prevHpRef.current = hp;
  }, [activeTurn]);

  return (
    <StyledGamingCard
      $activeTurn={activeTurn}
      $isAnimating={isAnimating}
      $hit={hit}
    >
      <Typography
        fontWeight={700}
        type="heading-md-lg"
        color={colors.neutrals[400]}
        aligntext="center"
      >
        {isUser ? "You" : "Opponent"}
      </Typography>
      <AvatarContainer>
        <ImageContainer>
          <PokemonImage src={pokemon.image.hires} alt={pokemon.name.english} />
        </ImageContainer>
        <PowerLevelContainer>
          <PowerLevel>
            <Typography
              type="caption"
              fontWeight={700}
              color={colors.neutrals[500]}
            >
              {pokemon.base?.Attack ?? 0}
            </Typography>
            <Typography
              type="x-small"
              fontWeight={400}
              color={colors.neutrals[500]}
              margin={`0 ${SPACING[1]} 0 0`}
            >
              px
            </Typography>
          </PowerLevel>
        </PowerLevelContainer>
      </AvatarContainer>
      <Typography
        fontWeight={400}
        type="subheading-md"
        color={colors.neutrals[200]}
        aligntext="center"
      >{`#${pokemon.id.toString().padStart(4, "0")}`}</Typography>
      <Typography
        fontWeight={400}
        type="heading-lg"
        color={colors.neutrals[500]}
        aligntext="center"
      >
        {pokemon.name.english}
      </Typography>
      <StyledProgress value={animatedHP} max={pokemon.base.HP || 100} />
    </StyledGamingCard>
  );
};

export default GamingCard;
