import styled from "styled-components";
import fonts from "../assets/constants/fonts";
import typography from "../assets/constants/typography";

interface TypographyProps {
  fontWeight?: number;
  margin?: string;
  type?: keyof typeof typography;
  color?: string;
}

const Typography = styled.p<TypographyProps>`
  font-family: ${fonts.mulish};
  font-weight: ${(props) => props.fontWeight || 400}; // Default to Regular
  font-size: ${(props) =>
    props.type ? typography[props.type].fontSize : "14px"};
  line-height: ${(props) =>
    props.type ? typography[props.type].lineHeight : "22px"};
  color: ${(props) => props.color || "#000"};
  margin: ${(props) => props.margin || "0"};
`;

export default Typography;
