import styled from "styled-components";
import bg from "../assets/imgs/bg_yellow.png";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";
import { TypographyType } from "../enums/TypographyEnum";

export const StyledFightArena = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${SPACING[2]};
  padding: 110px ${SPACING[13]};
  flex-grow: 1;

  @media (min-height: 650px) {
    height: 350px;
  }
`;

export const StyledBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${SPACING[8]};
`;

export const buttonStyles = {
  fight: {
    label: "Fight",
    bgColor: colors.primary[300],
    weight: 700,
    type: TypographyType.HeadingXxxxl,
    height: "232px",
    width: "237px",
  },
  attack: {
    label: "Attack",
    bgColor: colors.primary[300],
    weight: 500,
    type: TypographyType.SubheadingXl,
    height: "90px",
    width: "237px",
  },
  catch: {
    label: "Catch",
    bgColor: colors.primary[50],
    weight: 500,
    type: TypographyType.SubheadingXl,
    height: "90px",
    width: "237px",
  },
};
