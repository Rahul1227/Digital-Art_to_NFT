const { ethers, upgrades } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const MyNFT = await ethers.getContractFactory('MyNFT');

  // Set an appropriate gas price and gas limit for your contract deployment
  const gasPriceGwei = '50'; // Replace with your desired gas price in Gwei
  const gasLimit = 6000000;

  // Use the `overrides` parameter to set the gas price and gas limit for the transaction
  const myNFT = await MyNFT.deploy({
    gasLimit: gasLimit,
    gasPrice: ethers.utils.parseUnits(gasPriceGwei, 'gwei'),
  });

  console.log('Contract deployed to address:', myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0x82ed3F0182408525Fd51F3fF25F64464ac51C8e1
