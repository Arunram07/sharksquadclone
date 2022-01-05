import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEagerConnect } from "./hooks/useEagerConnect";

import { Home, Sale } from "./pages";
import { NETWORK } from "./utils/connector";

const App: React.FC = () => {
  const { chainId } = useWeb3React();
  const [validNetwork, setValidNetwork] = useState(false);
  useEagerConnect();

  useEffect(() => {
    if (chainId) {
      if (chainId === NETWORK) setValidNetwork(true);
      else setValidNetwork(false);
    }
  }, [chainId]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={!validNetwork ? <Home validNetwork={validNetwork} /> : <Navigate to="/sale" />}
        />
        <Route path="/sale" element={validNetwork ? <Sale /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
