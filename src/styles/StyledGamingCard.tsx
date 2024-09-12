import styled from "styled-components";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";

export const StyledGamingCard = styled.div`
  padding: ${SPACING[8]};
  border-radius: ${SPACING[2]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.neutrals.white};
  width: 28%;
  max-width: 400px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: ${SPACING[7]};
  padding-bottom: ${SPACING[2]};
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
  position: absolute;
  top: ${SPACING[8]};
  right: 28px;
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
