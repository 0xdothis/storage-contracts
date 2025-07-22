import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const { PRIVATE_KEY, ETHERSCAN_API, SEPOLIA_RPC_URL, CORE_RPC_URL } =
  process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  networks: {
    // sepolia: {
    //   url: SEPOLIA_RPC_URL,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
    testnet: {
      url: CORE_RPC_URL,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
export default config;
