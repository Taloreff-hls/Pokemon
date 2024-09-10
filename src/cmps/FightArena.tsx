import { useState, useEffect, useCallback } from "react";
import { pokemonService } from "../services/pokemon.service";
import GamingCard from "./GamingCard";
import ArenaButton from "../genericCmps/arenaBtn/ArenaButton";
import { Pokemon } from "../interfaces/Pokemon";
import FightResultModal from "./FightResultModal";
import CatchResultModal from "./CatchResultModal";
import {
  StyledFightArena,
  StyledBtnsContainer,
} from "../styles/StyledFightArena";
import colors from "../assets/constants/colors";
import { FightResult } from "../types";

interface FightArenaProps {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon | null;
}

const FightArena = ({ selectedPokemon, opponentPokemon }: FightArenaProps) => {
  const [userHP, setUserHP] = useState<number>(selectedPokemon.base.HP);
  const [opponentHP, setOpponentHP] = useState<number>(
    opponentPokemon?.base.HP || 0
  );
  const [isFightClicked, setIsFightClicked] = useState(false);
  const [currentTurn, setCurrentTurn] = useState<string>("user");
  const [battleResult, setBattleResult] = useState<FightResult | null>(null);
  const [catchAttempts, setCatchAttempts] = useState(3);
  const [userHit, setUserHit] = useState(0);
  const [opponentHit, setOpponentHit] = useState(0);
  const [showCatchModal, setShowCatchModal] = useState(false);
  const [catchResult, setCatchResult] = useState<boolean | null>(null);
  const [gamePaused, setGamePaused] = useState(false);

  useEffect(() => {
    if (showCatchModal) {
      setGamePaused(true);
    } else {
      setGamePaused(false);
    }
  }, [showCatchModal]);

  useEffect(() => {
    if (
      !gamePaused &&
      isFightClicked &&
      pokemonService.isBattleOver(userHP, opponentHP)
    ) {
      const result = userHP > 0 ? "won" : "lost";
      setBattleResult(result);
    }
  }, [userHP, opponentHP, isFightClicked, gamePaused]);

  useEffect(() => {
    if (
      !gamePaused &&
      currentTurn === "opponent" &&
      isFightClicked &&
      opponentPokemon &&
      !pokemonService.isBattleOver(userHP, opponentHP)
    ) {
      const timeout = setTimeout(() => {
        applyDamage(
          opponentPokemon,
          selectedPokemon,
          userHP,
          setUserHP,
          setUserHit
        );
        setCurrentTurn("user");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [
    currentTurn,
    isFightClicked,
    opponentPokemon,
    selectedPokemon,
    userHP,
    opponentHP,
    setUserHP,
    gamePaused,
  ]);

  const handleFightClick = () => {
    setIsFightClicked(true);
    const firstTurn = pokemonService.fightTurn(
      selectedPokemon,
      opponentPokemon
    );
    setCurrentTurn(firstTurn);
  };

  const handleAttack = useCallback(() => {
    if (!gamePaused && currentTurn === "user" && opponentPokemon) {
      applyDamage(
        selectedPokemon,
        opponentPokemon,
        opponentHP,
        setOpponentHP,
        setOpponentHit
      );
      setCurrentTurn("opponent");
    }
  }, [
    currentTurn,
    selectedPokemon,
    opponentPokemon,
    opponentHP,
    setOpponentHP,
    gamePaused,
  ]);

  const handleCatch = useCallback(() => {
    if (opponentPokemon && catchAttempts > 0) {
      setShowCatchModal(true);
      setCatchResult(null);

      setTimeout(() => {
        const isCaught = pokemonService.catchPokemon(
          opponentHP,
          opponentPokemon.base.HP
        );
        setCatchResult(isCaught);

        if (!isCaught) {
          setCatchAttempts((prevAttempts) => {
            const newAttempts = prevAttempts - 1;
            if (newAttempts === 0) {
              setBattleResult("lost");
            } else {
              setCurrentTurn("opponent");
            }
            return newAttempts;
          });
        } else {
          setBattleResult("caught");
        }
      }, 3000);
    }
  }, [opponentPokemon, opponentHP, catchAttempts]);

  const applyDamage = (
    attacker: Pokemon,
    defender: Pokemon,
    defenderHP: number,
    setHP: (hp: number) => void,
    setHit: (hit: number) => void
  ) => {
    const newHP = pokemonService.calculateDamage(
      attacker,
      defender,
      defenderHP
    );
    const hit = defenderHP - newHP;
    setHP(newHP);
    setHit(hit);
  };

  const handleCloseCatchModal = () => {
    setShowCatchModal(false);
    if (battleResult === null) {
      setCatchResult(null);
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
        />
      )}
      {showCatchModal && opponentPokemon && (
        <CatchResultModal
          isCaught={catchResult === true}
          pokemonName={opponentPokemon.name.english}
          onClose={handleCloseCatchModal}
        />
      )}
    </>
  );
};

export default FightArena;
