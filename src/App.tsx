import { Authenticator, Image, View } from "@aws-amplify/ui-react";
import { StyledAuthenticator } from "./styles/AuthStyles";
import pokemonLogo from "./assets/imgs/logo.png";
import AppStateManager from "./cmps/AppStateManager";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { defaultStorage } from "aws-amplify/utils";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";

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
    <StyledAuthenticator>
      <Authenticator components={components}>
        {({ signOut }) => (
          <main>
            <AppStateManager signOut={signOut} />
          </main>
        )}
      </Authenticator>
    </StyledAuthenticator>
  );
}

export default App;
