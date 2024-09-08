import Typography from "../styles/Typography";
import { Pokemon } from "../interfaces/Pokemon";
import {
  AvatarContainer,
  PokemonAvatar,
  PokemonCard,
  PowerLevel,
  PowerLevelContainer,
} from "../styles/StyledPokemonCard";
import strength from "../assets/imgs/strength.png";
import colors from "../assets/constants/colors";
import { SPACING } from "../assets/constants/spacings";

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCardComponent = ({ pokemon, onClick }: PokemonCardProps) => {
  return (
    <PokemonCard onClick={onClick}>
      <AvatarContainer>
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
            <img src={strength} />
          </PowerLevel>
        </PowerLevelContainer>
        <PokemonAvatar src={pokemon.image.hires} alt={pokemon.name.english} />
      </AvatarContainer>
      <div>
        <Typography
          type="subheading-md"
          color={colors.neutrals[200]}
          margin={`0 0 ${SPACING[4]} 0`}
        >
          {`#${pokemon.id.toString().padStart(4, "0")}`}
        </Typography>
        <Typography type="heading-md-lg" color={colors.neutrals[500]}>
          {pokemon.name.english}
        </Typography>
      </div>
    </PokemonCard>
  );
};

export default PokemonCardComponent;
