import { useWeb3React } from "@web3-react/core";
import React from "react";

import "./Header.scss";

const Header: React.FC = () => {
  const { account } = useWeb3React();
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo">Logo</div>
        <div className="address">
          {account && `${account?.slice(0, 6)}...${account?.slice(account?.length - 6)}`}
        </div>
      </div>
    </header>
  );
};

export default Header;
