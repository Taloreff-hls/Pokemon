import {
  HeaderContainer,
  HeaderNavigationContainer,
  Logo,
  NavigationBtnsContainer,
} from "../styles/HeaderStyle";

import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import GenericButton from "../genericCmps/button/GenericButton";

interface HeaderProps {
  setSelectedCtg: (ctg: number) => void;
  selectedCtg: number;
}

const Header = ({ setSelectedCtg, selectedCtg }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderNavigationContainer>
        <Link to="/">
          <Logo src={logo} alt="pokemon" />
        </Link>
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

      <Link to="/fight-arena">
        <GenericButton
          type="primary"
          size="large"
          label="Start a Fight"
          fontSize="1.6rem"
          fontWeight="400"
          onClick={() => {}}
        />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
