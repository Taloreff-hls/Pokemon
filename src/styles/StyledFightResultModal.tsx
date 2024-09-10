import styled from "styled-components";
import { SPACING } from "../assets/constants/spacings";
import Typography from "../styles/Typography";

export const ResultText = styled.p`
  color: red;
  font-size: 24px;
`;

export const ResultInnerContainer = styled.div`
  padding: ${SPACING[5]} ${SPACING[7]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VSText = styled(Typography)`
  margin: 0 ${SPACING[2]};
`;

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: ${SPACING[4]} 0;
`;
