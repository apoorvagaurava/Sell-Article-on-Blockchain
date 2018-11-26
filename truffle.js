const HDWalletProvider = require("truffle-hdwallet-provider");
//require('./.env');
module.exports = {
   networks: {
     development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4700000
        },
     ropsten: {
      provider: () =>new HDWalletProvider("Paste Your Mnemonic here", "Infura Node Endpoint for Ropsten"),
     gas: 4500000,
     gasPrice: 25000000000,
     network_id: 3
   }
   }
}
