import {
  HeaderContainer,
  HeaderNavigationContainer,
  Logo,
  NavigationBtnsContainer,
} from "../styles/HeaderStyle";

import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import GenericButton from "../genericCmps/button/GenericButton";
import { ButtonSizeEnum, ButtonTypeEnum } from "../enums/ButtonEnum";

interface HeaderProps {
  setSelectedCtg: (ctg: number) => void;
  selectedCtg: number;
  signOut?: () => void; // Make signOut optional
}

const Header = ({ setSelectedCtg, selectedCtg, signOut }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderNavigationContainer>
        <Link to="/">
          <Logo src={logo} alt="pokemon" />
        </Link>
        <NavigationBtnsContainer>
          <GenericButton
            type={ButtonTypeEnum.Tertiary}
            size={ButtonSizeEnum.Small}
            label="All Pokemons"
            fontSize="1.4rem"
            onClick={() => setSelectedCtg(0)}
            selected={selectedCtg === 0}
            fontWeight={selectedCtg === 0 ? "700" : "400"}
          />
          <GenericButton
            type={ButtonTypeEnum.Tertiary}
            size={ButtonSizeEnum.Small}
            label="My Pokemons"
            fontSize="1.4rem"
            onClick={() => setSelectedCtg(1)}
            selected={selectedCtg === 1}
            fontWeight={selectedCtg === 1 ? "700" : "400"}
          />
        </NavigationBtnsContainer>
      </HeaderNavigationContainer>

      {/* Start a Fight Button */}
      <Link to="/fight-arena">
        <GenericButton
          type={ButtonTypeEnum.Primary}
          size={ButtonSizeEnum.Medium}
          label="Start a Fight"
          fontSize="1.4rem"
          fontWeight="400"
          onClick={() => {}}
        />
      </Link>

      {/* Sign Out Button */}
      {signOut && (
        <GenericButton
          type={ButtonTypeEnum.Secondary} // Choose the type according to your style preferences
          size={ButtonSizeEnum.Medium}
          label="Sign Out"
          fontSize="1.4rem"
          fontWeight="400"
          onClick={signOut} // Use the signOut prop
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
