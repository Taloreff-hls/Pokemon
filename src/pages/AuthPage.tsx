import React, { useState } from "react";
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
import { signUp, signIn, signOut } from "aws-amplify/auth";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); // State to toggle between login and sign-up
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            // Add phone_number if necessary
          },
        },
      });
      console.log("Sign up successful:", response);
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("Sign-up failed, please try again.");
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await signIn({ username: email, password });
      console.log("Sign in successful:", response);
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Login failed, please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (isLoginMode) {
      // Sign in
      handleSignIn();
    } else {
      // Ensure passwords match before sign-up
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }
      // Sign up
      handleSignUp();
    }
  };

  return (
    <AuthContainer>
      <LeftSection>
        <Logo src="../assets/imgs/logo.png" alt="Logo" />
      </LeftSection>
      <RightSection>
        <LoginForm onSubmit={handleSubmit}>
          <Typography
            type={TypographyType.HeadingXl}
            color={colors.greys[200]}
            fontWeight={700}
            marginBottom={SPACING[7]}
          >
            {isLoginMode ? "Login" : "Create an Account"}
          </Typography>

          {/* Display Error Message */}
          {errorMessage && (
            <Typography
              type={TypographyType.Body}
              color={colors.red[100]} // Assuming you have an error color
              fontFamily={fonts.roboto}
              marginBottom={SPACING[3]}
            >
              {errorMessage}
            </Typography>
          )}

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
          {!isLoginMode && (
            <>
              <Typography
                type={TypographyType.Body}
                color={colors.neutrals[400]}
                fontFamily={fonts.roboto}
                marginBottom={SPACING[1]}
              >
                Confirm Password
              </Typography>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}

          {/* Submit Button */}
          <GenericButton
            label={isLoginMode ? "Login" : "Create Account"}
            type={ButtonTypeEnum.Primary}
            size={ButtonSizeEnum.Small}
            fontSize={SPACING[5]}
            fontWeight="400"
          />

          {/* Toggle Between Login and Signup */}
          {isLoginMode ? (
            <>
              <ForgotPassword href="#">Forgot password?</ForgotPassword>
              <Typography
                type={TypographyType.Body}
                color={colors.neutrals[400]}
                fontFamily={fonts.roboto}
              >
                Don’t have an account?{" "}
                <a href="#" onClick={() => setIsLoginMode(false)}>
                  Create one
                </a>
              </Typography>
            </>
          ) : (
            <Typography
              type={TypographyType.Body}
              color={colors.neutrals[400]}
              fontFamily={fonts.roboto}
            >
              Already have an account?{" "}
              <a href="#" onClick={() => setIsLoginMode(true)}>
                Login here
              </a>
            </Typography>
          )}
        </LoginForm>
      </RightSection>
    </AuthContainer>
  );
};

export default AuthPage;
