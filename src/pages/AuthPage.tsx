import React, { useState } from "react";

import logo from "../assets/imgs/logo.png";
import {
  AuthContainer,
  ForgotPassword,
  LeftSection,
  LoginForm,
  RightSection,
  Logo,
  Input,
} from "../styles/AuthForm";
import Typography from "../styles/Typography";
import { TypographyType } from "../enums/TypographyEnum";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";
import GenericButton from "../genericCmps/button/GenericButton";
import { ButtonSizeEnum, ButtonTypeEnum } from "../enums/ButtonEnum";
import { SPACING } from "../assets/constants/spacings";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // AWS Cognito logic will be added later
    console.log("Login clicked");
  };

  return (
    <AuthContainer>
      <LeftSection>
        <Logo src={logo} alt="Logo" />
      </LeftSection>
      <RightSection>
        <LoginForm onSubmit={handleLogin}>
          <Typography
            type={TypographyType.HeadingXl}
            color={colors.greys[200]}
            fontWeight={700}
            marginBottom={SPACING[7]}
          >
            Login
          </Typography>
          <Typography
            type={TypographyType.Body}
            color={colors.neutrals[400]}
            fontFamily={fonts.roboto}
            marginBottom={SPACING[1]}
          >
            Email
          </Typography>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Typography
            type={TypographyType.Body}
            color={colors.neutrals[400]}
            fontFamily={fonts.roboto}
            marginBottom={SPACING[1]}
          >
            Password
          </Typography>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <GenericButton
            label="Login"
            type={ButtonTypeEnum.Primary}
            size={ButtonSizeEnum.Small}
            fontSize={SPACING[5]}
            fontWeight="400"
          />
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </LoginForm>
      </RightSection>
    </AuthContainer>
  );
};

export default AuthPage;
