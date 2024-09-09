import { styled, css, keyframes } from "styled-components";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";

const damageAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
        transform: rotate(10deg);

  }
  100% {
    transform: rotate(0deg);
  }
`;

export const StyledGamingCard = styled.div<{
  $activeturn: boolean;
  $isDamaged: boolean;
  $hit: number;
}>`
  && {
    padding: ${SPACING[8]};
    border-radius: ${SPACING[2]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.neutrals.white};
    width: 28%;
    max-width: 400px;
     animation: ${(props) =>
       props.$hit === 0
         ? css`
             ${rotateAnimation} 0.5s ease-in-out 0s 2
           `
         : props.$isDamaged
           ? css`
               ${damageAnimation} 0.5s ease-in-out 0s 3
             `
           : "none"};
  }
    border: ${(props) =>
      props.$activeturn ? `2px solid ${colors.green[100]}` : "none"};
  }
`;

export const AvatarContainer = styled.div`
  && {
    display: flex;
    justify-content: center;
    position: relative;
    padding: ${SPACING[7]};
    padding-bottom: ${SPACING[2]};
  }
`;

export const InnerContainer = styled.div`
  padding: ${SPACING[6]};
  border-bottom: ${SPACING[4]} solid ${colors.green[100]};
`;

export const ImageContainer = styled.div`
  background-color: ${colors.neutrals[600]};
  height: 158px;
  padding: ${SPACING[5]};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PowerLevelContainer = styled.div`
  && {
    position: absolute;
    top: ${SPACING[8]};
    right: 28px;
  }
`;

export const PokemonImage = styled.img`
  width: 158px;
`;
export const StyledProgress = styled.progress`
  appearance: none;
  width: 100%;
  height: ${SPACING[4]};
  margin-top: ${SPACING[3]};

  &::-webkit-progress-bar {
    background-color: #e0e0e0;
    border-radius: ${SPACING[4]};
  }

  &::-webkit-progress-value {
    background-color: ${colors.green[100]};
    border-radius: ${SPACING[4]} 0 0 ${SPACING[4]};
  }
`;
