import styled from "styled-components";
import fonts from "../assets/constants/fonts";
import typography from "../assets/constants/typography";

interface TypographyProps {
  weight?: number;
  fontType?: keyof typeof typography;
  color?: string;
}

const Typography = styled.p<TypographyProps>`
  font-family: ${fonts.mulish};
  font-weight: ${(props) => props.weight || 400}; // Default to Regular
  font-size: ${(props) =>
    props.fontType ? typography[props.fontType].fontSize : "14px"};
  line-height: ${(props) =>
    props.fontType ? typography[props.fontType].lineHeight : "22px"};
  color: ${(props) => props.color || "#000"};
`;

export default Typography;
