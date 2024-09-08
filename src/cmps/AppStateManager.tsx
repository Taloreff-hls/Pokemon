import { useState } from "react";
import Header from "./Header";
import PokemonContent from "./PokemonContent";
import GlobalStyle from "../assets/globalStyles/GlobalStyle";

const AppStateManager = () => {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header setSelectedCtg={setSelectedCtg} selectedCtg={selectedCtg} />
      <PokemonContent selectedCtg={selectedCtg} />
    </>
  );
};

export default AppStateManager;
