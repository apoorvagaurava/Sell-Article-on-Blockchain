const HDWalletProvider = require("truffle-hdwallet-provider");
//require('./.env');
module.exports = {
   networks: {
        ropsten: {
      provider: () => new HDWalletProvider("strike leg sausage teach public furnace grape brave crowd help check border","https://ropsten.infura.io/v3/b315d6c071bf47c1af70b4910897056c"),
      gas: 4500000,
      gasPrice: 25000000000,
      network_id: 3
    }
   }
}
