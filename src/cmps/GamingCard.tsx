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
import { TypographyType } from "../enums/TypographyEnum";

interface GamingCardProps {
  pokemon: Pokemon;
}

const GamingCard = ({ pokemon }: GamingCardProps) => {
  return (
    <StyledGamingCard>
      <Typography
        fontWeight={700}
        type={TypographyType.HeadingMdLg}
        color={colors.neutrals[400]}
        aligntext="center"
      >
        You
      </Typography>
      <AvatarContainer>
        <ImageContainer>
          <PokemonImage
            src={pokemon?.image.hires}
            alt={pokemon?.name.english}
          />
        </ImageContainer>
        <PowerLevelContainer>
          <PowerLevel>
            <Typography
              type={TypographyType.Caption}
              fontWeight={700}
              color={colors.neutrals[500]}
            >
              {pokemon?.base.Attack ?? 0}
            </Typography>
            <Typography
              type={TypographyType.XSmall}
              fontWeight={400}
              color={colors.neutrals[500]}
              marginRight={SPACING[1]}
            >
              px
            </Typography>
          </PowerLevel>
        </PowerLevelContainer>
      </AvatarContainer>
      <Typography
        fontWeight={400}
        type={TypographyType.SubheadingMd}
        color={colors.neutrals[200]}
        aligntext="center"
      >{`#${pokemon?.id.toString().padStart(4, "0")}`}</Typography>
      <Typography
        fontWeight={400}
        type={TypographyType.HeadingLg}
        color={colors.neutrals[500]}
        aligntext="center"
      >
        {pokemon?.name.english}
      </Typography>
      <StyledProgress value={70} max={100} />
    </StyledGamingCard>
  );
};

export default GamingCard;
