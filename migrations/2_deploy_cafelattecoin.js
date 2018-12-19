var CafelatteCoin = artifacts.require("./CafelatteCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(CafelatteCoin);
};
