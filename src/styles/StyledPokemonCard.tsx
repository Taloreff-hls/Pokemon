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

    &:hover {
      cursor: pointer;
      background-color: ${colors.neutrals[700]};
    }
  }
`;

export const AvatarContainer = styled.div`
  && {
    display: flex;
    justify-content: center;
    height: 168px;
    position: relative;
    padding: ${SPACING[7]};
    border-radius: ${SPACING[0]};
    background-color: ${colors.neutrals[600]};
    margin-bottom: ${SPACING[4]};
  }
`;

export const PokemonAvatar = styled.img`
  && {
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
    align-items: center;
  }
`;

export const CardGrid = styled(Grid2)`
  && {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: ${SPACING[7]};
    margin-top: ${SPACING[5]};
  }
`;

export const EmptyPokemonsContainer = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 300px);
    grid-column: 1/-1;
    grid-row: 1/-1;
    background-color: ${colors.neutrals.white};
    border-top-left-radius: ${SPACING[1]};
    border-top-right-radius: ${SPACING[1]};
  }
`;
