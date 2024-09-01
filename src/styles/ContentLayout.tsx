import styled from "styled-components";
import colors from "../assets/constants/colors";
import { SPACING } from "../assets/constants/spacings";

export const ContentLayout = styled.div`
  background-color: ${colors.neutrals[100]};
  padding: 53px ${SPACING[9]};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
