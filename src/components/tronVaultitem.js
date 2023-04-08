import { useEffect, useState } from "react";
import React  from 'react';
import TRXImg from "../img/trx.png";

const TRXVaultItem = () => {
  const [display, setDisplay] = useState(true);
  const [trxValue, setTRXValue] = useState();
  const [trxBalance, setTRXBalance] = useState(30333.69);
  const [trxMyDeposits, setTRXMyDeposits] = useState(0);
  const [showLock, setShowLock] = useState(false);
  
  const [trxVaultDetails, setTRXVaultDetails] = useState({
    interval: "",
  });

  const [trxVaultContract, setTRXVaultContract] = useState({});
  useEffect(() => {
    initTRXVaultContract();
    return () => {
      console.log("unmounting TRX Vault");
    };
  }, []);



  const initTRXVaultContract = async () => {

  };

    const clear = () => {
      setTRXValue("");
    }


    const updateTRXValue = (e) => {
      console.log("DepositTRXValue : ", e.target.value);
      setTRXValue(e.target.value);
    };

  const deposit = async () => {
     setShowLock(true);
     setTRXBalance(trxBalance - trxValue);
     setTRXMyDeposits(trxMyDeposits + trxValue);
  };

  const withdraw = async () => {
     setShowLock(false);
     setTRXBalance(trxBalance + trxValue);
     setTRXMyDeposits(trxMyDeposits - trxValue);
  };


  return (

    <>

      <div className="accordion-item vault-item mt-3">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={clear}>
            <div className="container row mx-1 pt-2">
              <div className="col-md-4 col-sm-12">
                <img
                  src={TRXImg}
                  alt="TRX"
                  width="32"
                  height="32"
                  className="flex-shrink-0"
                />
                <div className="currency-name">
                  <b>TRX</b>
                  <p className="small">Tron</p>
                </div>
              </div>
              <div className="col text-center apr-info">
                <b className="d-lg-none">APR</b>
                <h6>---</h6>
              </div>

              <div className="col text-center">
                <b className="d-lg-none">My Deposit</b>
                <h6><b>{trxMyDeposits} TRX</b></h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionVaults">
          <div className="accordion-body">
          <div className="row">
            <div className="col border-bottom pb-3 border-width-2 text-center">
              Support Sorrel Banq by adding TRX into this vault to facilitate energy free transactions for fellow Sorrel members. Earn Vault rewards in a variety of stablecoins which are credited to your Sorrel account monthly.<br/><br/><b>New Deposits are locked for 30 days.</b>
            </div>
          </div>


          <div className="row mb-4 mt-3">
              <div className="col"></div>

              <div className="col-md-6">
                <p className="text-left">Enter Amount</p>
                  <div className="input-group mb-1 mt-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder=""
                        onChange={updateTRXValue}
                        value={trxValue}
                      />
                      <label htmlFor="floatingInputGroup1">TRX</label>
                    </div>
                  </div>
                  <p className="small">Balance: <b>{trxBalance} TRX</b></p>
              </div>
              <div className="col"></div>
          </div>

            <div className="row mt-1 mb-3 text-center">
              <div className="col"></div>
              <div className="col">
                <button className="btn btn-outline-info" type="button" onClick={deposit}>Deposit</button>
              
              </div>
              <div className="col">
                <button className="btn btn-outline-vault-withdraw" type="button" onClick={withdraw}>Withdraw</button>
              </div>
              <div className="col"></div>            
            </div>

            <p className="small mt-5 mb-3 text-center">
                {showLock ? <i className="fa-solid fa-lock"></i> : <i className="fa-solid fa-unlock text-sorrel-green"></i>} <br/>
                {showLock && `Deposit Locked till XXXXX.`}
            </p>

          </div>
        </div>
      </div>


    </>

  );
};


export default TRXVaultItem;
