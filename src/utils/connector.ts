import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 2, 3, 5, 47, 96, 80001],
});

export const walletConnect = new WalletConnectConnector({
  rpc: { 1: "https://rpc-mumbai.maticvigil.com/" },
  qrcode: true,
});

export const NETWORK = 80001;
const { ethereum } = window as any;

const addChainRequest = () => {
  return ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: Web3.utils.toHex(NETWORK),
        chainName: "Matic Mumbai",
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
      },
    ],
  });
};

const swicthRequest = () => {
  return ethereum?.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: Web3?.utils.toHex(NETWORK) }],
  });
};

export const switchNetwork = async () => {
  if (ethereum) {
    try {
      await swicthRequest();
    } catch (err: any) {
      console.log(err);
      if (err.code === 4902) {
        try {
          await addChainRequest();
          await swicthRequest();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
