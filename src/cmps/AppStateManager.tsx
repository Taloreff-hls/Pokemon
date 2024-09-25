import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles/GlobalStyle";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import AuthPage from "../pages/AuthPage";
import { useState } from "react";

const queryClient = new QueryClient();

function AppStateManager() {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route
            path="/*"
            element={
              <>
                <Header
                  setSelectedCtg={setSelectedCtg}
                  selectedCtg={selectedCtg}
                />
                <ContentRoutes selectedCtg={selectedCtg} />
              </>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

function ContentRoutes({ selectedCtg }: { selectedCtg: number }) {
  return (
    <Routes>
      <Route path="/" element={<PokemonContent selectedCtg={selectedCtg} />} />
      <Route path="/fight-arena" element={<FightArenaPage />} />
    </Routes>
  );
}

export default AppStateManager;
