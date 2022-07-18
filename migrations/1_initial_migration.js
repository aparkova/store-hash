//const Web3 = require('web3');
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  // const web3 = new Web3(new Web3.providers.HttpProvider('http://137.226.232.71:8545'));

  // web3.eth.personal.unlockAccount("0x8b8f34c6f3c37291cad199b265ed1f37606f1b83","",3600);
  deployer.deploy(Migrations);
};
