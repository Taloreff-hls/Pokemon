import { Authenticator, Image, View } from "@aws-amplify/ui-react";
import { StyledAuthenticator } from "./styles/AuthStyles";
import pokemonLogo from "./assets/imgs/logo.png";
import AppStateManager from "./cmps/AppStateManager";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { defaultStorage } from "aws-amplify/utils";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import GlobalStyle from "./assets/globalStyles/GlobalStyle";

cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);

Amplify.configure(config);

const components = {
  Header() {
    return (
      <View className="pokemon-logo">
        <Image src={pokemonLogo} alt="Login Background" />
      </View>
    );
  },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledAuthenticator>
        <Authenticator components={components}>
          {({ signOut, user }) => (
            <main>
              <AppStateManager signOut={signOut} user={user} />
            </main>
          )}
        </Authenticator>
      </StyledAuthenticator>
    </>
  );
}

export default App;
