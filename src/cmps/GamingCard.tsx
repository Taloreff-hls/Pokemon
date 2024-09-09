import colors from "../assets/constants/colors";
import {
  StyledGamingCard,
  ImageContainer,
  AvatarContainer,
  StyledProgress,
  PowerLevelContainer,
  PokemonImage,
} from "../styles/StyledGamingCard";
import Typography from "../styles/Typography";
import { Pokemon } from "../interfaces/Pokemon";
import { PowerLevel } from "../styles/StyledPokemonCard";
import { SPACING } from "../assets/constants/spacings";
import { useEffect, useState } from "react";

interface GamingCardProps {
  pokemon: Pokemon;
  hp: number;
  isUser: boolean;
  activeturn: boolean;
}

const GamingCard = ({ pokemon, hp, isUser, activeturn }: GamingCardProps) => {
  const [animatedHP, setAnimatedHP] = useState(hp);
  const [isDamaged, setIsDamaged] = useState(false);

  useEffect(() => {
    if (animatedHP > hp) {
      setIsDamaged(true);
      const interval = setInterval(() => {
        setAnimatedHP((prevHP) => {
          const newHP = Math.max(prevHP - 1, hp);
          return newHP;
        });
      }, 30);

      return () => {
        clearInterval(interval);
        setIsDamaged(false);
      };
    } else {
      setIsDamaged(false);
    }
  }, [hp, animatedHP]);

  return (
    <StyledGamingCard
      $activeturn={activeturn}
      $isDamaged={isDamaged}
      $hit={animatedHP}
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
      <StyledProgress value={animatedHP} max={pokemon.base?.HP || 100} />
    </StyledGamingCard>
  );
};

export default GamingCard;
