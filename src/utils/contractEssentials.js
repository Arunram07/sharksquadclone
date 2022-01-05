import Web3 from "web3";
import { abi } from "./abi.js";

const address = "0x6e4ad295b8c73c3015eafeac64140cc0e86fafec";

const web3 = new Web3(window?.ethereum);

const contract = new web3.eth.Contract(abi, address);

export async function getRemainingSupply() {
  const total = await contract.methods.TOTAL_MAX_QTY().call();
  const minted = await contract.methods.totalSupply().call();
  return Number(total) - Number(minted);
}

export async function getPublicSaleLimit() {
  return await contract.methods.PUBLIC_SALES_MAX_QTY_PER_TRANSACTION().call();
}

export async function getPresaleLimit() {
  return await contract.methods.PRESALES_MAX_QTY_PER_MINTER().call();
}

export async function getMode() {
  const isPresalesActivated = await contract.methods.isPresalesActivated().call();
  const isPublicSalesActivated = await contract.methods.isPublicSalesActivated().call();

  if (isPresalesActivated) {
    return "PRESALE";
  }

  if (isPublicSalesActivated) {
    return "PUBLICSALE";
  }
}

export async function getPriceForPresale() {
  return await contract.methods.PRESALES_PRICE().call();
}

export async function getPriceForPublicsale() {
  return await contract.methods.PUBLIC_SALES_PRICE().call();
}

const getPrice = async () => {
  const mode = await getMode();

  if (mode === "PRESALE") {
    return Number(Web3.utils.fromWei(await getPriceForPresale()));
  }

  if (mode === "PUBLICSALE") {
    return Number(Web3.utils.fromWei(await getPriceForPublicsale()));
  }
};

const getQuantityLimit = async () => {
  const mode = await getMode();

  if (mode === "PRESALE") {
    return Number(await getPresaleLimit());
  }

  if (mode === "PUBLICSALE") {
    return Number(await getPublicSaleLimit());
  }
};

export const getInitialState = async () => {
  try {
    return {
      quantityLimit: await getQuantityLimit(),
      price: await getPrice(),
      remainingSupply: await getRemainingSupply(),
    };
  } catch (error) {
    console.log(error);
  }
};

export async function mint(_quantity) {
  const isPresalesActivated = await contract.methods.isPresalesActivated.call();
  const isPublicSalesActivated = await contract.methods.isPublicSalesActivated.call();

  if (isPresalesActivated) {
    const price = await getPriceForPresale();
    return await contract.methods.presalesMint(_quantity, _quantity).send({
      from: window.ethereum.selectedAddress,
      value: price,
    });
  }

  if (isPublicSalesActivated) {
    const price = await getPriceForPublicsale();
    return await contract.methods
      .publicSalesMint(_quantity)
      .send({ from: window.ethereum.selectedAddress, value: price });
  }
}
