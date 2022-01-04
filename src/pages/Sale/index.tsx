import React from "react";

import "./Sale.scss";
import Header from "../../components/Header/Header";

const Sale: React.FC = () => {
  return (
    <>
      <Header />
      <div className="sale-page-wrapper">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-grid">
              <div className="card-image">
                <p>unrevealed</p>
                <div></div>
              </div>
              <div>
                <div className="line">
                  <h3>FEELING LUCKY?</h3>
                </div>
                <div className="line">
                  <p>0 of 7,777</p>
                  <p>SOS Genesis NFT Available</p>
                </div>
                <div className="line flex-between">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <div>
                  <div className="flex-between">
                    <p>Total</p>
                    <p>0.06 ETH</p>
                  </div>
                  <button>Sold out</button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h2>NEXT UP!</h2>
              <h3>PIXEL SHARKS FREE MINT</h3>
              <p>
                SOS Meta ID (Pixel Shark) can be minted for FREE after the daily reveal inThe Vault
              </p>
              <h3>VX SHARKS FREE MINT</h3>
              <p>
                SOS VX (3D Version) can be minted for FREE in Q1 2022 if you hold you Genesis Shark
                & SOS Meta ID.
              </p>
            </div>
          </div>
          <div className="card-footer">
            <p>Should you need any help, reach us via Discord and contact SOS Crew</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
