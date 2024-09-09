import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles/GlobalStyle";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon";

function AppStateManager() {
  const [selectedCtg, setSelectedCtg] = useState(0);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/src/data/pokemon.json");
    const data = await response.json();
    setPokemonData(data);
  };

  const nonNullData = pokemonData.filter((pokemon) => pokemon.base);
  const userPokemons = nonNullData.filter((pokemon) => pokemon.belongsToUser);

  return (
    <Router>
      <GlobalStyle />
      <Header setSelectedCtg={setSelectedCtg} selectedCtg={selectedCtg} />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonContent
              selectedCtg={selectedCtg}
              pokemonData={nonNullData}
            />
          }
        />
        <Route
          path="/fight-arena"
          element={
            <FightArenaPage
              userPokemons={userPokemons}
              allPokemons={nonNullData}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default AppStateManager;
