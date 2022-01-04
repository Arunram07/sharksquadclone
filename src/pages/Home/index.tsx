import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Injected } from "../../utils/connector";

import "./Home.scss";

const Home: React.FC = () => {
  const { activate } = useWeb3React();

  return (
    <div className="home">
      <div className="connect-modal">
        <h2>Welcome</h2>
        <p>Connect your wallet to continue.</p>
        <div>
          <button onClick={() => activate(Injected)}>Metamask</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
