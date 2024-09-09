import styled from "styled-components";
import bg from "../assets/imgs/bg_yellow.png";
import { SPACING } from "../assets/constants/spacings";

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
`;

export const StyledBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${SPACING[8]};
`;
