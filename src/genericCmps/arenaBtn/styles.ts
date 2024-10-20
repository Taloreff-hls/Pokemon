import styled from "styled-components";
import { ArenaButtonProps } from "./interfaces";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import typography from "../../assets/constants/typography";

export const StyledArenaButton = styled.button<ArenaButtonProps>`
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) =>
    props.background
      ? props.disabled
        ? `rgba(${hexToRgb(props.background)}, 0.7)` // Change opacity of the background when disabled
        : props.background
      : colors.primary[300]};
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${fonts.mulish};
  border-radius: 200px;
  box-shadow: ${(props) => `0px 9px 17.6px ${colors.greys[1000]}`};
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  &:hover {
    opacity: ${(props) =>
      props.disabled ? "1" : "0.8"}; // Ensure hover keeps opacity
  }
`;

// Helper function to convert hex to RGB
const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};
