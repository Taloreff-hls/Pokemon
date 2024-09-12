import { useState } from "react";
import { StyledFightArena } from "../styles/StyledFightArena";
import GamingCard from "./GamingCard";
import { Pokemon } from "../interfaces/Pokemon";
import ArenaButton from "../genericCmps/arenaBtn/ArenaButton";
import colors from "../assets/constants/colors";
import { StyledBtnsContainer } from "../styles/StyledBtnContainer";
import { TypographyType } from "../enums/TypographyEnum";

interface FightArenaProps {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon;
}

const FightArena = ({ selectedPokemon, opponentPokemon }: FightArenaProps) => {
  const [isFightClicked, setIsFightClicked] = useState(false);

  const handleFightClick = () => {
    setIsFightClicked(true);
  };

  return (
    <StyledFightArena>
      <GamingCard pokemon={selectedPokemon} />
      {!isFightClicked ? (
        <ArenaButton
          background={colors.primary[300]}
          fontWeight={700}
          type={TypographyType.HeadingXxxxl}
          width="237px"
          height="232px"
          onClick={handleFightClick}
        >
          Fight
        </ArenaButton>
      ) : (
        <StyledBtnsContainer>
          <ArenaButton
            background={colors.primary[300]}
            fontWeight={500}
            type={TypographyType.SubheadingXl}
            width="237px"
            height="90px"
          >
            Attack
          </ArenaButton>
          <ArenaButton
            background={colors.primary[50]}
            fontWeight={500}
            type={TypographyType.SubheadingXl}
            color={colors.neutrals[200]}
            width="237px"
            height="90px"
          >
            Catch
          </ArenaButton>
        </StyledBtnsContainer>
      )}
      <GamingCard pokemon={opponentPokemon} />
    </StyledFightArena>
  );
};

export default FightArena;
