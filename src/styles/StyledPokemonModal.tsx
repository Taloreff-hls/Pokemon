import { styled, keyframes } from "styled-components";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";
import { SPACING } from "../assets/constants/spacings";
import typography from "../assets/constants/typography";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.greys[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${SPACING[1]};
  width: 33%;
  min-height: 42%;
  box-shadow: 0px ${SPACING[1]} 6px ${colors.greys[50]};
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const InnerContainer = styled.div`
  padding: ${SPACING[5]} ${SPACING[7]} ${SPACING[6]};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${SPACING[5]};
  right: ${SPACING[5]};
  background: none;
  border: none;
  ${typography.subheading};
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  height: 158px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.img`
  width: ${SPACING[13]};
  margin-bottom: ${SPACING[4]};
`;

export const PokemonName = styled.h2`
  ${typography["heading-md-lg"]};
  font-family: ${fonts.mulish};
  color: ${colors.neutrals[500]};
  margin-bottom: ${SPACING[2]};
  font-weight: 400;
  margin-top: ${SPACING[2]};
`;

export const PokemonId = styled.h3`
  ${typography.subheading};
  font-family: ${fonts.mulish};
  color: ${colors.neutrals[200]};
  font-weight: 400;
  margin: 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary[50]};
  padding: ${SPACING[7]};
`;

export const PokemonDetail = styled.p`
  ${typography.medium};
  color: ${colors.neutrals[500]};
  font-family: ${fonts.mulish};
  font-weight: 400;
  border-bottom: 1px solid ${colors.neutrals[200]};
  padding-bottom: ${SPACING[7]};
  margin: 0;
`;

export const PokemonStats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: ${SPACING[7]};
`;

export const PokemonStat = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  ${typography.caption};
  color: ${colors.neutrals[400]};
  font-weight: 400;
  font-family: ${fonts.mulish};
`;

export const StatCategory = styled.span`
  ${typography["body-sm"]};
  color: ${colors.neutrals[400]};
  font-weight: 400;
  font-family: ${fonts.mulish};
`;

export const Ability = styled.div`
  text-align: center;
  margin-top: ${SPACING[2]};
  ${typography.medium};
  color: ${colors.neutrals[500]};
  font-weight: 400;
  font-family: ${fonts.mulish};
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colors.greys[800]};
  padding: ${SPACING[6]} 0;
`;

export const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

export const RotatingPokeball = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 ${SPACING[9]} ${SPACING[7]} white;
  border-radius: 100%;
  animation: ${rotateAnimation} 0.25s ease-in-out infinite;
`;
