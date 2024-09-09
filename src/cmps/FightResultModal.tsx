import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {
  CloseButton,
  InnerContainer,
  ModalContainer,
  ModalOverlay,
} from "../styles/StyledPokemonModal";
import { ResultText } from "../styles/StyledFightResultModal";
import { FightResult } from "../types";

interface FightResultModalProps {
  result: FightResult;
  onClose: () => void;
}

const FightResultModal = ({ result, onClose }: FightResultModalProps) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <InnerContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon fontSize="large" />
          </CloseButton>
          <ResultText>{result === "won" ? "You Won!" : "You Lost!"}</ResultText>
          <Link to={"/"}>Back to Home</Link>
        </InnerContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FightResultModal;
