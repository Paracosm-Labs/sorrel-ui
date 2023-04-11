import Web3 from "web3";
import { useEffect, useState } from "react";
import React  from 'react';
import walletPublisher from '../publishers/wallet';
import { DepositoryContractAddress, DepositoryOwnerAddress } from "../utils/contractAddress";

const ResourceDelegator = () => {
  const [display, setDisplay] = useState(true);
  const [trxValue, setTRXValue] = useState(0);
  const [trxBalance, setTRXBalance] = useState(0);
  const [trxMyDeposits, setTRXMyDeposits] = useState(0);
  const [showLock, setShowLock] = useState(false);
  
  let web3 = new Web3();

  useEffect(() => {
    walletPublisher.attach(updateWalletData);
      return () => {
          console.log("Unmounting Resource Delegator");
          walletPublisher.detach(updateWalletData);
      }
  }, []);


  const updateWalletData = async (walletData) => {
      let trxBalance = await window.tronWeb.trx.getAccount(window.tronWeb.defaultAddress.base58);
      setTRXBalance(window.tronWeb.fromSun(trxBalance.balance));
  }

    const clear = () => {
      setTRXValue("");
    }


    const updateTRXValue = (e) => {
      console.log("DepositTRXValue : ", e.target.value);
      setTRXValue(e.target.value);
    };

  const deposit = async () => {
    debugger;
    let transaction  = await window.tronWeb.transactionBuilder.delegateResource(window.tronWeb.toSun(trxValue), DepositoryOwnerAddress, "ENERGY", window.tronWeb.defaultAddress.base58, true);
    const signedtxn = await window.tronWeb.trx.sign(transaction);
    const receipt = await window.tronWeb.trx.sendRawTransaction(signedtxn);
    console.log(receipt.txid);
     setShowLock(true);
  };

  const withdraw = async () => {
     setShowLock(false);
     setTRXBalance(trxBalance + trxValue);
     setTRXMyDeposits(trxMyDeposits - trxValue);
     clear();
  };


  const callVault = async () => {
    display ? await deposit() : await withdraw();
  };
  const active = "active";
  return (
    <>
    <div className="card">
      <div className="card-body">
    <div className="row">
        <div className="col"></div>
          <div className="col-md-10">
            <div className="row mb-4 mt-5">
                <div className="col"></div>
                <div className="col-md-8">
                  <p className="small">Balance: <b>{display ? <span>{trxBalance}</span> : <span>{trxMyDeposits}</span>} TRX</b></p>
                    <div className="input-group mb-2 mt-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputGroup1"
                          placeholder=""
                          onChange={updateTRXValue}
                          value={trxValue}
                        />
                        <label htmlFor="floatingInputGroup1">Enter Amount</label>
                      </div>
                    </div>
                    {display ? <>
                    <div className="row">
                      <div className="col text-center">
                        <button type="button" className="btn btn-outline-light btn-sm mr-2 w-100" onClick={() => setTRXValue(trxBalance * 0.25)}>25%</button>
                      </div>
                      <div className="col text-center">
                        <button type="button" className="btn btn-outline-light btn-sm mr-2 w-100" onClick={() => setTRXValue(trxBalance * 0.50)}>50%</button>
                      </div>
                      <div className="col text-center">
                        <button type="button" className="btn btn-outline-light btn-sm w-100" onClick={() => setTRXValue(trxBalance * 0.75)}>75%</button>
                      </div>
                      <div className="col text-center">
                        <button type="button" className="btn btn-outline-light btn-sm w-100" onClick={() => setTRXValue(trxBalance * 0.95)}>95%</button>
                      </div>
                    </div>
                      </> :
                      <></>
                    }
                    <button
                      className={`mt-5 btn w-100 ${display ? "btn-outline-info" : "btn-outline-vault-withdraw"}`}
                      type="button"
                      id="button-deposit"
                      onClick={callVault}
                    >
                      {display ? "Deposit" : "Withdraw"}
                    </button>
                </div>
                <div className="col"></div>
            </div>
          </div>
          <div className="col"></div>
      </div>
      </div>
    </div>
  </>
  );
};


export default ResourceDelegator;
