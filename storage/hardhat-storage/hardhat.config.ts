import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const { PRIVATE_KEY, ETHERSCAN_API, SEPOLIA_RPC_URL, RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    // sepolia: {
    //   url: SEPOLIA_RPC_URL,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
    testnet: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
export default config;
