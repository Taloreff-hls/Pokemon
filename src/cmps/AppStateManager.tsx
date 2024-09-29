import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import GlobalStyle from "../assets/globalStyles/GlobalStyle";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import { useState } from "react";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

const queryClient = new QueryClient();

function AppStateManager({ signOut }: WithAuthenticatorProps) {
  const [selectedCtg, setSelectedCtg] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <GlobalStyle /> */}
        <Header
          setSelectedCtg={setSelectedCtg}
          selectedCtg={selectedCtg}
          signOut={signOut}
        />
        <Routes>
          <Route
            path="/"
            element={<PokemonContent selectedCtg={selectedCtg} />}
          />
          <Route path="/fight-arena" element={<FightArenaPage />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default AppStateManager;
