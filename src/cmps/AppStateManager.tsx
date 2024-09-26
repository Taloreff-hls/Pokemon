import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "../assets/globalStyles/GlobalStyle";
import Header from "../cmps/Header";
import PokemonContent from "../pages/PokemonContent";
import FightArenaPage from "../pages/FightArenaPage";
import AuthPage from "../pages/AuthPage";
import { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import config from "../amplifyconfiguration.json";

// Configure Amplify
Amplify.configure(config);

const queryClient = new QueryClient();

function AppStateManager({ signOut, user }: WithAuthenticatorProps) {
  const [selectedCtg, setSelectedCtg] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            {/* Redirect all other routes to /login */}
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Header
          setSelectedCtg={setSelectedCtg}
          selectedCtg={selectedCtg}
          signOut={signOut}
        />
        <Routes>
          {/* Authenticated routes */}
          <Route
            path="/"
            element={<PokemonContent selectedCtg={selectedCtg} />}
          />
          <Route path="/fight-arena" element={<FightArenaPage />} />
          {/* Redirect /login to home if authenticated */}
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default withAuthenticator(AppStateManager);
