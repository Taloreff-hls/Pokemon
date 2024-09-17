import styled from "styled-components";
import { SPACING } from "../assets/constants/spacings";
import colors from "../assets/constants/colors";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING[4]} ${SPACING[9]};
  background-color: ${colors.neutrals.white};
`;

export const HeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 150px;
  height: 55px;
  margin-right: ${SPACING[9]};
`;

export const NavigationBtnsContainer = styled.div`
  display: flex;
  gap: ${SPACING[6]};
`;
