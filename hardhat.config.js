require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:8545",
      account: [
        "0x4a39ba5336c390f4dacc6d96303738ef6882c2d871d432a09f421dcea71b78b1",
      ],
    },
  },
};
