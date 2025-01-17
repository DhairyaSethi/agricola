import { Signer } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { Lend__factory, USDCToken__factory } from "../typechain";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    let accounts: Signer[];

    accounts = await hre.ethers.getSigners();

    console.log(await accounts[0].getAddress());

    const lendFactory = (await hre.ethers.getContractFactory(
        "NFTToken",
        accounts[0]
    )) as Lend__factory;

    const lendContract = await lendFactory.deploy();

    console.log(
        `The address the Contract WILL have once mined: ${nftTokenContract.address}`
    );

    console.log(
        `The transaction that was sent to the network to deploy the Contract: ${nftTokenContract.deployTransaction.hash}`
    );

    console.log(
        "The contract is NOT deployed yet; we must wait until it is mined..."
    );

    await nftTokenContract.deployed();

    console.log("Minted...");
};
export default func;
