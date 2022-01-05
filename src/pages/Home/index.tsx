import { useWeb3React } from "@web3-react/core";
import React from "react";
import { Injected, switchNetwork, walletConnect } from "../../utils/connector";

import "./Home.scss";

interface HomeProps {
  validNetwork: boolean;
}

const Home: React.FC<HomeProps> = ({ validNetwork }) => {
  const { activate, active } = useWeb3React();

  return (
    <div className="home">
      <div className="connect-modal">
        <h2>CONNECT WALLET</h2>
        <p className="primary mt-15" style={{ fontSize: 18 }}>
          Connect your wallet to continue.
        </p>
        <div>
          <button
            className="primary"
            onClick={!active ? () => activate(Injected) : () => switchNetwork()}
          >
            {!active ? "Metamask" : "Switch Network to Mainnet "}
          </button>
          {/* <button className="primary" onClick={() => activate(walletConnect)}>
            WalletConnect
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
