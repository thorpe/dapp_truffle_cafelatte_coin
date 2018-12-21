require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

const providerFactory = network => new HDWalletProvider(
  process.env.MNEMONICS || '',                                  // Mnemonic of the deployer
  `https://${network}.infura.io/${process.env.INFURA_API_KEY}`  // Provider URL => web3.HttpProvider
);


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: providerFactory('ropsten'),
      network_id: 3,
      gas: 4700000,
      gasPrice: 50000000000 // 50 Gwei
    },
  }
};
