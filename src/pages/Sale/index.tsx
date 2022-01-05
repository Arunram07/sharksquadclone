import React, { useCallback, useEffect, useState } from "react";

import "./Sale.scss";
import Header from "../../components/Header/Header";
import demo from "../../assets/demo.png";
import { ReactComponent as Loader } from "../../assets/images/loader.svg";
import { getInitialState, mint } from "../../utils/contractEssentials";

const Sale: React.FC = () => {
  const [sellPrice, setSellPrice] = useState<number | undefined>(0);
  const [maxQuantity, setMaxQuantity] = useState<number | undefined>(0);
  const [nftMintCount, setNftMintCount] = useState(1);
  const [supply, setSupply] = useState<number | undefined>(0);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleGetPrice = useCallback(async () => {
    setLoading(true);
    const data = await getInitialState();

    if (data) {
      setSellPrice(data.price);
      setSupply(data.remainingSupply);
      setMaxQuantity(data.quantityLimit);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    handleGetPrice();
  }, [handleGetPrice]);

  const handleMint = async () => {
    setProcessing(true);
    try {
      await mint(nftMintCount);
      await handleGetPrice();
    } catch (error) {
      console.log(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <Header />
      <div className="sale-page-wrapper">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-grid">
              <div className="block-image">
                <button
                  className="secondary"
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                >
                  <b>UNREVEALED</b> TOT NFT
                </button>
                <div className="image-container">
                  <img src={demo} alt="nft" />
                </div>
              </div>
              <div className="block-content">
                <div className="line">
                  <h3 className="mb-20">FEELING LUCKY?</h3>
                  <button className="secondary">
                    Mint after 12PM UTC will be recieved the day after
                  </button>
                </div>
                <div className="line">
                  <p className="primary">
                    <b>{supply}</b> of <b>7,777</b>
                  </p>
                  <p className="primary">SOS Genesis NFT Available</p>
                </div>
                <div className="line flex-between">
                  <button
                    className="count-btn"
                    disabled={nftMintCount === 1 || loading}
                    onClick={() => setNftMintCount((c) => c - 1)}
                  >
                    -
                  </button>
                  <p className="counter">{nftMintCount}</p>
                  <button
                    className="count-btn"
                    disabled={nftMintCount === maxQuantity || loading}
                    onClick={() => setNftMintCount((c) => c + 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <div className="flex-between mb-20">
                    <p className="primary">Total</p>
                    <p className="primary">
                      <b>{!sellPrice ? "-" : sellPrice * nftMintCount}</b> ETH
                    </p>
                  </div>
                  <button
                    className="primary"
                    disabled={loading || processing || nftMintCount === 0}
                    onClick={() => handleMint()}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="mb-20">NEXT UP!</h3>
              <h4 className="mb-10">PIXEL SHARKS FREE MINT</h4>
              <p className="primary mb-20">
                SOS Meta ID (Pixel Shark) can be minted for FREE after the daily
                reveal inThe Vault
              </p>
              <h4 className="mb-10">VX SHARKS FREE MINT</h4>
              <p className="primary">
                SOS VX (3D Version) can be minted for FREE in Q1 2022 if you
                hold you Genesis Shark & SOS Meta ID.
              </p>
            </div>
          </div>
          <div className="card-footer mt-30">
            <p className="secondary">
              Should you need any help, reach us via{" "}
              <a href="/" style={{ color: "inherit" }}>
                Discord
              </a>{" "}
              and contact SOS Crew
            </p>
          </div>
        </div>
      </div>
      {processing && (
        <div className="backdrop">
          <div className="modal">
            <div className="block-loader loader">
              <Loader />
            </div>
            <p>Waiting for Confirmation</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Sale;
