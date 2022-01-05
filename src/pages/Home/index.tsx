import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Injected, switchNetwork, walletConnect } from "../../utils/connector";

import "./Home.scss";
import { ReactComponent as Loader } from "../../assets/images/loader.svg";

interface HomeProps {
  validNetwork: boolean;
}

const Home: React.FC<HomeProps> = ({ validNetwork }) => {
  const [loading, setLoading] = useState(true);
  const { activate, active } = useWeb3React();

  const handleConnect = async () => {
    setLoading(true);
    if (!active) {
      await activate(Injected);
      setLoading(false);
      return;
    }

    await switchNetwork();
    setLoading(false);
    return;
  };

  return (
    <div className="home">
      <div className="connect-modal">
        <h2>CONNECT WALLET</h2>
        <p className="primary mt-15" style={{ fontSize: 18 }}>
          Connect your wallet to continue.
        </p>
        <div>
          <button className="primary" disabled={loading} onClick={() => handleConnect()}>
            {loading ? (
              <div className="loader" style={{ width: 12, height: 12, margin: "0 auto" }}>
                <Loader />
              </div>
            ) : !active ? (
              "Metamask"
            ) : (
              "Switch Network to Mainnet "
            )}
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
