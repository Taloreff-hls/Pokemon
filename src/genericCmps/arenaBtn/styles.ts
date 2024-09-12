import styled from "styled-components";
import { ArenaButtonProps } from "./interfaces";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import typography from "../../assets/constants/typography";

export const StyledArenaButton = styled.button<ArenaButtonProps>`
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.background || colors.primary[300]};
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${fonts.mulish};
  border-radius: 200px;
  box-shadow: 0px 9px 17.6px ${colors.greys[1000]};
  font-size: ${(props) =>
    props.type
      ? typography[props.type].fontSize
      : typography["heading-xxxxl"].fontSize};
  line-height: ${(props) =>
    props.type
      ? typography[props.type].lineHeight
      : typography["heading-xxxxl"].lineHeight};
  color: ${(props) => props.color || colors.neutrals.white};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
