require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY =
  "https://goerli.infura.io/v3/a9827dc8b1834ce2af8fb4988e074a07";
const GOERLI_PRIVATE_KEY =
  "52bee26900c3fbd19bc1af7616c0292825ea349e3ab49fb6b6262da561003e00";

module.exports = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: `${INFURA_API_KEY}`, // infuraaa goerli API key
      accounts: [`${GOERLI_PRIVATE_KEY}`], //goerli private key of that address from you deploy it
    },
  },

  etherscan: {
    apiKey: "PSSCAPBUHR7U6DU7V8B2886WPVMTGEC7EY", //etherscan APIKey
  },
};
