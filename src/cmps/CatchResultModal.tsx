import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  InnerContainer,
  ModalContainer,
  ModalOverlay,
} from "../styles/StyledPokemonModal";
import { ResultText } from "../styles/StyledFightResultModal";
import colors from "../assets/constants/colors";
import pokeball from "../assets/imgs/pokeball-pokemon-svgrepo-com.svg";
import { SPACING } from "../assets/constants/spacings";

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

const RotatingPokeball = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 ${SPACING[9]} ${SPACING[7]} white;
  border-radius: 100%;
  animation: ${rotateAnimation} 0.25s ease-in-out infinite;
`;

interface CatchResultModalProps {
  isCaught: boolean | null; // Accept null initially
  pokemonName: string;
  onClose: () => void;
}

const CatchResultModal: React.FC<CatchResultModalProps> = ({
  isCaught,
  pokemonName,
  onClose,
}) => {
  const [hasResult, setHasResult] = useState(false); // Track if the result is ready

  // Automatically close the modal if the catch fails after the result is ready
  useEffect(() => {
    if (isCaught === false && hasResult) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Wait 2 seconds before closing the modal

      return () => clearTimeout(timer);
    }
  }, [isCaught, onClose, hasResult]);

  // Set result ready flag after 3 seconds
  useEffect(() => {
    const resultTimer = setTimeout(() => {
      setHasResult(true); // Result is now ready
    }, 3000);

    return () => clearTimeout(resultTimer);
  }, []);

  // Show Pokéball animation while the result is being processed
  if (!hasResult) {
    return (
      <ModalOverlay>
        <RotatingPokeball src={pokeball} alt="Pokeball" />
      </ModalOverlay>
    );
  }

  // Show congratulatory message when the Pokémon is caught
  if (isCaught) {
    return (
      <ModalOverlay>
        <ModalContainer>
          <InnerContainer>
            <ResultText>
              Congratulations! You just caught {pokemonName}!
            </ResultText>
            <Link
              to="/"
              style={{
                color: colors.primary[300],
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Back to Home
            </Link>
          </InnerContainer>
        </ModalContainer>
      </ModalOverlay>
    );
  }

  return null; // If the result is false, close the modal after 2 seconds
};

export default CatchResultModal;
