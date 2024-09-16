import styled from "styled-components";
import fonts from "../assets/constants/fonts";
import typography from "../assets/constants/typography";
import colors from "../assets/constants/colors";
import { TypographyType } from "../enums/TypographyEnum";

interface TypographyProps {
  fontWeight?: number;
  margin?: string;
  marginRight?: string;
  marginBottom?: string;
  type?: TypographyType;
  color?: string;
  aligntext?: string;
}

const Typography = styled.p<TypographyProps>`
  font-family: ${fonts.mulish};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) =>
    props.type ? typography[props.type].fontSize : "14px"};
  line-height: ${(props) =>
    props.type ? typography[props.type].lineHeight : "22px"};
  color: ${(props) => props.color || colors.neutrals.white};
  margin: ${(props) => props.margin || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  text-align: ${(props) => props.aligntext || "left"};
`;

export default Typography;
