import { DepositoryContractAddress } from "../utils/contractAddress";
import SmartContractBase from "./smartContractBase";

class DepositoryContract extends SmartContractBase {
  currency = null;
  constructor(depositoryAddress) {
    super(depositoryAddress);
  }
  init = async () => {
    try {
      if (!this.contract) {
        this.contract = await window.tronWeb.contract().at(this.address);
      }
      return this;
    } catch (error) {
      console.error(error);
    }
    return null;
  };
  deposit = async (currencyId, _val) => {
    this.check();
    if (!_val) throw new Error(`Number : ${_val}`);

    console.log("deposit", this.web3.utils.toWei(String(_val), "ether"));

    try {
      let result  = await this.contract
        .deposit(
          currencyId,
          this.web3.utils.toWei(String(_val), "ether")
        )
        .send({
          feeLimit: 100_000_000,
          callValue: 0,
          shouldPollResponse: false,
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  };

  withdraw = async (currencyId, _val) => {
    this.check();
    if (!_val) throw new Error(`Number : ${_val}`);

    console.log("withdraw", this.web3.utils.toWei(String(_val), "ether"));

    try {
      let result  = await this.contract
        .withdraw(currencyId, this.web3.utils.toWei(String(_val), "ether"))
        .send({
          feeLimit: 100_000_000,
          callValue: 0,
          shouldPollResponse: false,
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  };

  transfer = async (currencyId, _val, toAddress) => {
    this.check();
    if (!_val) throw new Error(`Number : ${_val}`);

    console.log("transfer", this.web3.utils.toWei(String(_val), "ether"));

    try {
      let result  = await this.contract
        .transfer(
          currencyId,
          this.web3.utils.toWei(String(_val), "ether"),
          toAddress
        )
        .send({
          feeLimit: 100_000_000,
          callValue: 0,
          shouldPollResponse: false,
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  };

  balanceOf = async (currencyId, hodlerAddress) => {
    this.check();
    const balHex = await this.contract
      .gStableBalanceMap(currencyId, hodlerAddress)
      .call();
    const balance = this.web3.utils.fromWei(String(balHex), "ether");
    return  balance;
  };

}

const depositoryContract_ = new DepositoryContract(DepositoryContractAddress);

let depositoryContractInitialized = null;

export const depositoryContract = async () => {
  if (!depositoryContractInitialized) {
    console.log("initializing Depository contract");
    depositoryContractInitialized = await depositoryContract_.init();
  }
  return depositoryContractInitialized;
};
