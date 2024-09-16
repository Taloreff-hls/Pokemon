import styled from "styled-components";
import colors from "../assets/constants/colors";
import { SPACING } from "../assets/constants/spacings";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
`;

export const ContentLayout = styled.div`
  background-color: ${colors.neutrals[100]};
  padding: ${SPACING[6]} ${SPACING[9]} 38px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: ${SPACING[6]};
  min-height: calc(100vh - 200px);
  max-width: 1900px;
`;
