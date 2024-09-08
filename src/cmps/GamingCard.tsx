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

interface GamingCardProps {
  pokemon: Pokemon;
}

const GamingCard = ({ pokemon }: GamingCardProps) => {
  return (
    <StyledGamingCard>
      <Typography
        fontWeight={700}
        type="heading-md-lg"
        color={colors.neutrals[400]}
        alignText="center"
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
              type="caption"
              fontWeight={700}
              color={colors.neutrals[500]}
            >
              {pokemon?.base.Attack ?? 0}
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
        alignText="center"
      >{`#${pokemon?.id.toString().padStart(4, "0")}`}</Typography>
      <Typography
        fontWeight={400}
        type="heading-lg"
        color={colors.neutrals[500]}
        alignText="center"
      >
        {pokemon?.name.english}
      </Typography>
      <StyledProgress value={70} max={100} />
    </StyledGamingCard>
  );
};

export default GamingCard;
