import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import { useState } from "react";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

const queryClient = new QueryClient();

function AppStateManager({ signOut, user }: WithAuthenticatorProps) {
  const [selectedCtg, setSelectedCtg] = useState(0);

  if (user) {
    return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header
            setSelectedCtg={setSelectedCtg}
            selectedCtg={selectedCtg}
            signOut={signOut}
          />
          <Routes>
            <Route
              path="/"
              element={<PokemonContent selectedCtg={selectedCtg} user={user} />}
            />
            <Route
              path="/fight-arena"
              element={<FightArenaPage user={user} />}
            />
            <Route path="/login" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    );
  }
}

export default AppStateManager;
