import { useState, useEffect, useCallback } from "react";
import { pokemonService } from "../services/pokemon.service";
import { Pokemon } from "../interfaces/Pokemon";
import { FightResult } from "../types";
import {
  TIMEOUT_MEDIUM_DURATION,
  TIMEOUT_LONG_DURATION,
} from "../assets/constants/timeouts";
interface useBattleStateProps {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon | null;
}

export const useBattleState = ({
  selectedPokemon,
  opponentPokemon,
}: useBattleStateProps) => {
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
    setUserHP(selectedPokemon.base.HP);
    setUserHit(0);
  }, [selectedPokemon]);

  return {
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
  };
};

export const useBattleLogic = (
  selectedPokemon: Pokemon,
  opponentPokemon: Pokemon | null,
  battleState: ReturnType<typeof useBattleState>
) => {
  const {
    userHP,
    setUserHP,
    opponentHP,
    setOpponentHP,
    isFightClicked,
    setIsFightClicked,
    currentTurn,
    setCurrentTurn,
    setBattleResult,
    catchAttempts,
    setCatchAttempts,
    setUserHit,
    setOpponentHit,
    setShowCatchModal,
    setCatchResult,
    gamePaused,
  } = battleState;

  useEffect(() => {
    if (
      !gamePaused &&
      isFightClicked &&
      pokemonService.isBattleOver(userHP, opponentHP)
    ) {
      const result = userHP > 0 ? "won" : "lost";
      setBattleResult(result);
    }
  }, [userHP, opponentHP, isFightClicked, gamePaused, setBattleResult]);

  useEffect(() => {
    if (
      !gamePaused &&
      currentTurn === "opponent" &&
      isFightClicked &&
      opponentPokemon &&
      !pokemonService.isBattleOver(userHP, opponentHP)
    ) {
      const timeout = setTimeout(() => {
        const { newHP, hit } = pokemonService.handleOpponentTurn(
          opponentPokemon,
          selectedPokemon,
          userHP
        );
        setUserHP(newHP);
        setUserHit(hit);
        setCurrentTurn("user");
      }, TIMEOUT_MEDIUM_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [
    currentTurn,
    isFightClicked,
    opponentPokemon,
    selectedPokemon,
    userHP,
    opponentHP,
    gamePaused,
    setUserHP,
    setUserHit,
    setCurrentTurn,
  ]);

  const handleFightClick = useCallback(() => {
    setIsFightClicked(true);
    const firstTurn = pokemonService.determineFirstTurn(
      selectedPokemon,
      opponentPokemon
    );
    setCurrentTurn(firstTurn);
  }, [selectedPokemon, opponentPokemon, setIsFightClicked, setCurrentTurn]);

  const handleAttack = useCallback(() => {
    if (!gamePaused && currentTurn === "user" && opponentPokemon) {
      const { newHP, hit } = pokemonService.applyDamage(
        selectedPokemon,
        opponentPokemon,
        opponentHP
      );
      setOpponentHP(newHP);
      setOpponentHit(hit);
      setCurrentTurn("opponent");
    }
  }, [
    currentTurn,
    selectedPokemon,
    opponentPokemon,
    opponentHP,
    setOpponentHP,
    setOpponentHit,
    setCurrentTurn,
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
              setBattleResult("uncaught");
            } else {
              setCurrentTurn("opponent");
            }
            return newAttempts;
          });
        } else {
          setBattleResult("caught");
        }
      }, TIMEOUT_LONG_DURATION);
    }
  }, [
    opponentPokemon,
    opponentHP,
    catchAttempts,
    setShowCatchModal,
    setCatchResult,
    setCatchAttempts,
    setBattleResult,
    setCurrentTurn,
  ]);

  return { handleFightClick, handleAttack, handleCatch };
};
