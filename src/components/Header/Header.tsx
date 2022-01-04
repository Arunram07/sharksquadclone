import { useWeb3React } from "@web3-react/core";
import React from "react";

import "./Header.scss";

const Header: React.FC = () => {
  const { account } = useWeb3React();
  return (
    <header className="header-container">
      <div className="header">
        <div>Logo</div>
        <p>{account && `${account?.slice(0, 6)}...${account?.slice(account?.length - 6)}`}</p>
      </div>
    </header>
  );
};

export default Header;
