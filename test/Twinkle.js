const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", async function () {
  it("Deployment Should Assign the 1st 5 NFTs of the token to the owner", async function () {
    //! Case 1

    //A Signer in ethers is an abstraction of an Ethereum Account,
    //which can be used to sign messages and transactions and send
    //signed transactions to the Ethereum Network to execute state changing operations.

    const [owner, otherAccounts] = await ethers.getSigners(); //

    //To deploy a Contract, additional information is needed that is not available on a Contract object itself.
    //Mainly, the bytecode (more specifically the initcode) of a contract is required.

    const Twinkle = await ethers.getContractFactory("Twinkle"); //get detail of contract

    const TwinkleToken = await Twinkle.deploy(); // deploy the contract

    const ownerBalance = await TwinkleToken.balanceOf(owner.address); // get balance of owner

    console.log("address of owner is :", owner.address);
    console.log("address of othercontracts is :", otherAccounts.address);
    console.log("balance of Owner is :", ownerBalance);

    expect(ownerBalance).to.equal(5); //expect is basically where test case check
  });

  it("Should set the right Owner", async function () {
    //!Case 2

    //!Test 2 to check is contract set Right Owner

    const [owner, otherAccounts] = await ethers.getSigners();
    //To deploy a Contract, additional information is needed that is not available on a Contract object itself.
    //Mainly, the bytecode (more specifically the initcode) of a contract is required.

    const Twinkle = await ethers.getContractFactory("Twinkle"); //get detail of contract

    const TwinkleToken = await Twinkle.deploy(); // deploy the contract

    expect(await TwinkleToken.getOwner()).to.equal(owner.address); //check is contract make the right owner
  });

  it("Should mint tokens", async function () {
    //!case 3
    //!Test 3 to check is transferring works or not

    [Owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const Twinkle = await ethers.getContractFactory("Twinkle"); //get detail of contract
    const TwinkleToken = await Twinkle.deploy();

    await TwinkleToken.mint(addr2.address, 3);
    const addr2Balance = await TwinkleToken.balanceOf(addr2.address);
    expect(addr2Balance).to.equal(3);
  });

  it("check the Owner of particular ID", async function () {
    //!Test 4 to check after transfering particular id is assign to its owner

    [Owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const Twinkle = await ethers.getContractFactory("Twinkle"); //get detail of contract
    const TwinkleToken = await Twinkle.deploy();

    await TwinkleToken.mint(addr2.address, 3);
    const addr2Balance = await TwinkleToken.balanceOf(addr2.address);
    expect(addr2Balance).to.equal(3);

    const randomAddress = await TwinkleToken.ownerOf(6);
    expect(randomAddress).to.equal(addr2.address);
  });
  it("check total supply which is minted after deployment", async function () {
    //!Case 5

    //!check total supply

    const [owner, otherAccounts] = await ethers.getSigners();
    //To deploy a Contract, additional information is needed that is not available on a Contract object itself.
    //Mainly, the bytecode (more specifically the initcode) of a contract is required.

    const Twinkle = await ethers.getContractFactory("Twinkle"); //get detail of contract

    const TwinkleToken = await Twinkle.deploy(); // deploy the contract

    expect(await TwinkleToken.get_totalSupply()).to.equal(5); //check is contract make the right owner
  });
});
