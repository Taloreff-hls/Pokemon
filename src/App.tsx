import GlobalStyle from "./assets/globalStyles/GlobalStyle";
import Header from "./cmps/Header";
import PokemonContent from "./cmps/PokemonContent";
import { useState } from "react";

function App() {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header setSelectedCtg={setSelectedCtg} selectedCtg={selectedCtg} />
      <PokemonContent selectedCtg={selectedCtg} />
    </>
  );
}

export default App;
