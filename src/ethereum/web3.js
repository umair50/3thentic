import Web3 from "web3";

let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are on the browser and metamask has injected web3 into the browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/e08a3d36c62e4aa695026190ab6c24d7"
  );
  web3 = new Web3(provider);
}

export default web3;
