import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 2, 3, 5, 47, 96],
});

export const NETWORK = 3;

export const switchNetwork = async (chainId = NETWORK) => {
  const { ethereum } = window as any;
  try {
    await ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: Web3?.utils.toHex(chainId) }],
    });
  } catch (err) {
    console.log(err);
  }
};
