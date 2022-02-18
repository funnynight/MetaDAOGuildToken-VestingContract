// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

const CHAIN_ID = "cchain"

const addresses = {
  JoeRouter02: {
    "cchain": "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
    "test": ""
  },
  JoePair: {
    "cchain": "0x454e67025631c065d3cfad6d71e6892f74487a15",
    "test": ""
  },
  AnysawpV5ERC20: {
    "cchain": "0x130966628846bfd36ff31a822705796e8cb8c18d",
    "test" : ""
  }
}

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", owner.address);

  console.log("Account balance: ", (await owner.getBalance()).toString());

  const guildTokenFactory = await ethers.getContractFactory("MetaDAOGuildToken");
  // owner: 0x8a772E522571C8d30ad4aE8c8efeAf9B1a58A680
  const guildTokenContract = await guildTokenFactory.deploy(
    owner.address, 
    ethers.utils.parseEther("1000000000")
  );
  await guildTokenContract.deployed()
  console.log("MetaDAOGuildTokenContract deployed to: ", guildTokenContract.address)
  console.log("totalSupply=", ethers.utils.parseEther("1000000000"))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/**
MetaDaoGuildToken(MDGT): 0xFD1630aD07dcA6b3ecAb6F3b2420439423FA481F

Testnet:
MetaDaoGuildToken: 0x1583B8dF27691Ae825631cf40F6B017b152a4BfE

Mainnet:
MetaDaoGuildToken: 0xb7d5058c28291c40CD02F799Fb711560AE92C102
MetaDAOGuild: 0x0e7ED20898C6aD276100F0c370D1474992817180
MetaDAOGuildToken: 0xdc200aDBAa9adB5F8dD79b796c612EDBbD4EB371
*/