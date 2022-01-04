import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEagerConnect } from "./hooks/useEagerConnect";

import { Home, Sale } from "./pages";

const App: React.FC = () => {
  const { active } = useWeb3React();
  useEagerConnect();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={!active ? <Home /> : <Navigate to="/sale" />} />
        <Route path="/sale" element={active ? <Sale /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
