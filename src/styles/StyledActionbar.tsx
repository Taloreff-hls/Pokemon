import styled from "styled-components";
import { SPACING } from "../assets/constants/spacings";

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING[8]};
`;
