import React, { useCallback, useEffect } from "react";

import "./Sale.scss";
import Header from "../../components/Header/Header";
import { getMode, getPrice, getPriceForPresale } from "../../utils/contractEssentials";

const Sale: React.FC = () => {
  const handleGetPrice = useCallback(async () => {
    const price = await getPriceForPresale();
    console.log(price);
  }, []);

  useEffect(() => {
    handleGetPrice();
  }, [handleGetPrice]);

  return (
    <>
      <Header />
      <div className="sale-page-wrapper">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-grid">
              <div className="block-image">
                <p>unrevealed</p>
                <div></div>
              </div>
              <div className="block-content">
                <div className="line">
                  <h3 className="mb-20">FEELING LUCKY?</h3>
                  <button className="primary">
                    Mint after 12PM UTC will be recieved the day after
                  </button>
                </div>
                <div className="line">
                  <p className="primary">
                    <b>0</b> of <b>7,777</b>
                  </p>
                  <p className="primary">SOS Genesis NFT Available</p>
                </div>
                <div className="line flex-between">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <div>
                  <div className="flex-between mb-20">
                    <p className="primary">Total</p>
                    <p className="primary">
                      <b>0.06</b> ETH
                    </p>
                  </div>
                  <button className="primary">Sold out</button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="mb-20">NEXT UP!</h3>
              <h4 className="mb-10">PIXEL SHARKS FREE MINT</h4>
              <p className="primary mb-20">
                SOS Meta ID (Pixel Shark) can be minted for FREE after the daily reveal inThe Vault
              </p>
              <h4 className="mb-10">VX SHARKS FREE MINT</h4>
              <p className="primary">
                SOS VX (3D Version) can be minted for FREE in Q1 2022 if you hold you Genesis Shark
                & SOS Meta ID.
              </p>
            </div>
          </div>
          <div className="card-footer mt-30">
            <p className="secondary">
              Should you need any help, reach us via Discord and contact SOS Crew
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
