import { TransferComptrollerAddress } from "../utils/contractAddress";
import SmartContractBase from "./smartContractBase";

class TransferComptroller extends SmartContractBase {
  constructor() {
    super(TransferComptrollerAddress);
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

  getTransactions = async () => {
    try {
      this.check();
      const allTrxs  = await this.contract.userTrxMapping.call(window.tronWeb.defaultAddress.base58, 1);
      return allTrxs;
    } catch (error) {
      console.error(error);
    }

  };
}

export default TransferComptroller;
