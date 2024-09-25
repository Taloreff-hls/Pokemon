import styled from "styled-components";
import bgYellow from "../assets/imgs/bg_yellow.png";
import colors from "../assets/constants/colors";
import { SPACING } from "../assets/constants/spacings";
import fonts from "../assets/constants/fonts";

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSection = styled.div`
  flex: 1;
  background-color: ${colors.blue[100]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSection = styled.div`
  flex: 2;
  background: url(${bgYellow}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: ${SPACING[7]};
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 28%;
  aspect-ratio: 1 / 1;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: ${SPACING[7]};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0052cc;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: #0041b3;
  }
`;

export const ForgotPassword = styled.a`
  margin-top: ${SPACING[7]};
  color: ${colors.primary[300]};
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  font-family: ${fonts.roboto};
  &:hover {
    text-decoration: underline;
  }
`;
