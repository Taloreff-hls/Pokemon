import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles/GlobalStyle";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import { useState } from "react";

const queryClient = new QueryClient();

function AppStateManager() {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Header setSelectedCtg={setSelectedCtg} selectedCtg={selectedCtg} />
        <Routes>
          <Route
            path="/"
            element={<PokemonContent selectedCtg={selectedCtg} />}
          />
          <Route path="/fight-arena" element={<FightArenaPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default AppStateManager;
