import {
  HeaderContainer,
  HeaderNavigationContainer,
  Logo,
  NavigationBtnsContainer,
} from "../styles/HeaderStyle";

import logo from "../assets/imgs/logo.png";
import GenericButton from "../genericCmps/button/GenericButton";
import { useState } from "react";

const Header = () => {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <HeaderContainer>
      <HeaderNavigationContainer>
        <Logo src={logo} alt="pokemon" />
        <NavigationBtnsContainer>
          <GenericButton
            type="tertiary"
            size="small"
            label="All Pokemons"
            fontSize="1.4rem"
            onClick={() => setSelectedCtg(0)}
            selected={selectedCtg === 0}
            fontWeight={selectedCtg === 0 ? "700" : "400"}
          />
          <GenericButton
            type="tertiary"
            size="small"
            label="My Pokemons"
            fontSize="1.4rem"
            onClick={() => setSelectedCtg(1)}
            selected={selectedCtg === 1}
            fontWeight={selectedCtg === 1 ? "700" : "400"}
          />
        </NavigationBtnsContainer>
      </HeaderNavigationContainer>
      <GenericButton
        type="primary"
        size="large"
        label="Start a Fight"
        fontSize="1.6rem"
        fontWeight="400"
        onClick={() => console.log("starting a fight...")}
      />
    </HeaderContainer>
  );
};

export default Header;
