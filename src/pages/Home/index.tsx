import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Injected, switchNetwork } from "../../utils/connector";

import "./Home.scss";

interface HomeProps {
  validNetwork: boolean;
}

const Home: React.FC<HomeProps> = ({ validNetwork }) => {
  const { activate } = useWeb3React();

  return (
    <div className="home">
      <div className="connect-modal">
        <h2>Welcome</h2>
        <p>Connect your wallet to continue.</p>
        <div>
          <button
            className="primary"
            onClick={!validNetwork ? () => switchNetwork() : () => activate(Injected)}
          >
            {!validNetwork ? "Switch Network to Mainnet " : "connet wallet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
