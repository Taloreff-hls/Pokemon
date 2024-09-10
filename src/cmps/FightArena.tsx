import React from "react";
import GamingCard from "./GamingCard";
import ArenaButton from "../genericCmps/arenaBtn/ArenaButton";
import FightResultModal from "./FightResultModal";
import CatchResultModal from "./CatchResultModal";
import {
  StyledFightArena,
  StyledBtnsContainer,
} from "../styles/StyledFightArena";
import colors from "../assets/constants/colors";
import { useBattleState, useBattleLogic } from "../hooks/fightArenaHooks";
import { Pokemon } from "../interfaces/Pokemon";

interface FightArenaProps {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon | null;
}

const FightArena = ({ selectedPokemon, opponentPokemon }: FightArenaProps) => {
  const battleState = useBattleState({ selectedPokemon, opponentPokemon });
  const { handleFightClick, handleAttack, handleCatch } = useBattleLogic(
    selectedPokemon,
    opponentPokemon,
    battleState
  );

  const {
    userHP,
    opponentHP,
    isFightClicked,
    currentTurn,
    battleResult,
    userHit,
    opponentHit,
    showCatchModal,
    catchResult,
    setBattleResult,
    setShowCatchModal,
  } = battleState;

  const handleCloseCatchModal = () => {
    setShowCatchModal(false);
    if (battleResult === null) {
      battleState.setCatchResult(null);
    }
  };

  return (
    <>
      <StyledFightArena>
        <GamingCard
          pokemon={selectedPokemon}
          hp={userHP}
          isUser={true}
          activeTurn={currentTurn === "user"}
          hit={userHit}
          isFightClicked={isFightClicked}
        />
        {!isFightClicked ? (
          <ArenaButton
            background={colors.primary[300]}
            fontWeight={700}
            type="heading-xxxxl"
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
              type="subheading-xl"
              width="237px"
              height="90px"
              onClick={handleAttack}
            >
              Attack
            </ArenaButton>
            <ArenaButton
              background={colors.primary[50]}
              fontWeight={500}
              type="subheading-xl"
              color={colors.neutrals[200]}
              width="237px"
              height="90px"
              onClick={handleCatch}
            >
              Catch
            </ArenaButton>
          </StyledBtnsContainer>
        )}
        {opponentPokemon && (
          <GamingCard
            pokemon={opponentPokemon}
            hp={opponentHP}
            isUser={false}
            activeTurn={currentTurn === "opponent"}
            hit={opponentHit}
            isFightClicked={isFightClicked}
          />
        )}
      </StyledFightArena>
      {battleResult && (
        <FightResultModal
          result={battleResult}
          onClose={() => setBattleResult(null)}
          playerPokemon={selectedPokemon}
          opponentPokemon={opponentPokemon}
        />
      )}
      {showCatchModal && opponentPokemon && (
        <CatchResultModal
          isCaught={catchResult === true}
          pokemon={opponentPokemon}
          onClose={handleCloseCatchModal}
        />
      )}
    </>
  );
};

export default FightArena;
