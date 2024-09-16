import { useEffect } from "react";
import GamingCard from "./GamingCard";
import ArenaButton from "../genericCmps/arenaBtn/ArenaButton";
import FightResultModal from "./FightResultModal";
import CatchResultModal from "./CatchResultModal";
import {
  StyledFightArena,
  StyledBtnsContainer,
} from "../styles/StyledFightArena";
import colors from "../assets/constants/colors";
import { TypographyType } from "../enums/TypographyEnum";
import { useBattleState, useBattleLogic } from "../hooks/fightArenaHooks";
import { Pokemon } from "../interfaces/Pokemon";

interface FightArenaProps {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon;
}

const FightArena = ({ selectedPokemon, opponentPokemon }: FightArenaProps) => {
  const {
    userHP,
    setUserHP,
    opponentHP,
    setOpponentHP,
    isFightClicked,
    setIsFightClicked,
    currentTurn,
    setCurrentTurn,
    battleResult,
    setBattleResult,
    catchAttempts,
    setCatchAttempts,
    userHit,
    setUserHit,
    opponentHit,
    setOpponentHit,
    showCatchModal,
    setShowCatchModal,
    catchResult,
    setCatchResult,
    gamePaused,
    setGamePaused,
  } = useBattleState({ selectedPokemon, opponentPokemon });

  const { handleFightClick, handleAttack, handleCatch } = useBattleLogic(
    selectedPokemon,
    opponentPokemon,
    {
      userHP,
      setUserHP,
      opponentHP,
      setOpponentHP,
      isFightClicked,
      setIsFightClicked,
      currentTurn,
      setCurrentTurn,
      battleResult,
      setBattleResult,
      catchAttempts,
      setCatchAttempts,
      userHit,
      setUserHit,
      opponentHit,
      setOpponentHit,
      showCatchModal,
      setShowCatchModal,
      catchResult,
      setCatchResult,
      gamePaused,
      setGamePaused,
    }
  );

  useEffect(() => {
    setUserHP(selectedPokemon.base.HP);
    setUserHit(0);
  }, [selectedPokemon, setUserHP, setUserHit]);

  const handleCloseCatchModal = () => {
    setShowCatchModal(false);
    if (battleResult === null) {
      setCatchResult(false);
    }
  };

  const renderOpponent = () => {
    if (!opponentPokemon) return null;
    return (
      <GamingCard
        pokemon={opponentPokemon}
        hp={opponentHP}
        isUser={false}
        activeTurn={currentTurn === "opponent"}
        hit={opponentHit}
        isFightClicked={isFightClicked}
      />
    );
  };

  const renderBattleResult = () => {
    if (!battleResult) return null;
    return (
      <FightResultModal
        result={battleResult}
        onClose={() => setBattleResult(null)}
        playerPokemon={selectedPokemon}
        opponentPokemon={opponentPokemon}
      />
    );
  };

  const renderCatchModal = () => {
    if (!showCatchModal || !opponentPokemon) return null;
    return (
      <CatchResultModal
        isCaught={catchResult}
        pokemon={opponentPokemon}
        onClose={handleCloseCatchModal}
      />
    );
  };

  const renderButton = (label: string, handleClick: () => void) => {
    return (
      <ArenaButton
        background={colors.primary[300]}
        fontWeight={700}
        type={TypographyType.HeadingXxxxl}
        width="237px"
        height="232px"
        onClick={handleClick}
      >
        {label}
      </ArenaButton>
    );
  };

  return (
    <>
      <StyledFightArena>
        <GamingCard
          pokemon={selectedPokemon}
          hp={userHP}
          isUser
          activeTurn={currentTurn === "user"}
          hit={userHit}
          isFightClicked={isFightClicked}
        />
        {!isFightClicked ? (
          renderButton("Fight", handleFightClick)
        ) : (
          <StyledBtnsContainer>
            {renderButton("Attack", handleAttack)}
            {renderButton("Catch", handleCatch)}
          </StyledBtnsContainer>
        )}
        {renderOpponent()}
      </StyledFightArena>
      {renderBattleResult()}
      {renderCatchModal()}
    </>
  );
};

export default FightArena;
