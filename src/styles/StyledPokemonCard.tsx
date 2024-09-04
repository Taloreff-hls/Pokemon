import styled from "styled-components";
import { Grid2 } from "@mui/material";
import colors from "../assets/constants/colors";
import { SPACING } from "../assets/constants/spacings";

export const PokemonCard = styled.div`
  && {
    padding: ${SPACING[7]};
    border-radius: ${SPACING[2]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.neutrals.white};
  }
`;

export const AvatarContainer = styled.div`
  && {
    position: relative;
    padding: ${SPACING[7]};
    background-color: rgba(235, 239, 246, 0.6);
    margin-bottom: ${SPACING[4]};
  }
`;

export const PokemonAvatar = styled.img`
  && {
    width: 100%;
    height: 100%;
  }
`;

export const PowerLevelContainer = styled.div`
  && {
    position: absolute;
    top: 6px;
    right: 6px;
  }
`;

export const PowerLevel = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: end;
  }
`;

export const CardGrid = styled(Grid2)`
  && {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${SPACING[7]};
  }
`;
