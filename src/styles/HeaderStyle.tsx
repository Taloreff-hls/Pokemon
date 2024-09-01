import styled from "styled-components";
import { SPACING } from "../assets/constants/spacings";

export const HeaderContainer = styled.div`
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING[5]} ${SPACING[9]};
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
  gap: 14px;
`;
