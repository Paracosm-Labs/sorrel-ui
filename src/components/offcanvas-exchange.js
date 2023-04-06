import React, { useState }  from 'react';
import { getCurrencies, getCurrency } from '../utils/currencies';
import Select from "react-select";
import SwapGStableFactory from "../utils/swapGStableFactory";
import {usddContract} from "../contracts/usdContract";
import {SwapUSDDContractAddress} from "../utils/contractAddress";

const OffcanvasExchange = () => {
  const [gStableAmount, setGStableAmount] = useState(0);
  const [trxId, setTrxId] = useState("");

// Select Currency Dropdown related
  const options = getCurrencies().map(currency => {
    return {value : currency.key, label : currency.label}
  });


  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedDest, setSelectedDest] = useState(null);

  const handleChangeSource = (selectedOption) => {
    setSelectedSource(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const handleChangeDestination = (selectedOption) => {
    setSelectedDest(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const updateAmount = (e) => {
    console.log("DepositValue : ", e.target.value);
    setGStableAmount(e.target.value);
  };

  const clear = () => {
    setGStableAmount(0);
    setTrxId("");
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
  }

  const exchange = async () => {
    try {
      if(!selectedSource || !selectedDest){
        return;
      }
      let usd = await usddContract();
      await usd.approve(SwapUSDDContractAddress, 1000);
      console.log("approved");
      let swapGStableContract = await SwapGStableFactory.getSwapGStable();
      let currencySource = getCurrency(selectedSource.value);
      let currencyDest = getCurrency(selectedDest.value);
      console.log(`Exchanging ${gStableAmount} in ${selectedSource.label} (${selectedSource.value}) to ${selectedDest.label} (${selectedDest.value})`);
      let trxId = await swapGStableContract.swap(currencySource.id, gStableAmount, currencyDest.id);
      setTrxId(trxId);
      document.querySelectorAll('input').forEach(input => {
          input.value = '';
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExchange" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">
      <i className="fa-solid fa-repeat" data-toggle="tooltip" title="Convert your gStables to another easily"></i>&nbsp;&nbsp;Convert&nbsp;&nbsp;
      <i className="fa-solid fa-bolt fa-beat" data-toggle="tooltip" title="Enjoy Energy Free transactions when available!"></i>
    </h5>
    <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={clear}></button>
  </div>
  <div className="offcanvas-body mx-3">
  <div className="mt-3">
      <p className="text-left">Source</p>
      <Select options={options} onChange={handleChangeSource} autoFocus={true}/>
  </div>
    <div className="row mt-3">
      <div className="col">
        <div className="input-group mb-1" key={1}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Enter Amount"
              onChange={updateAmount}
            />
            <label htmlFor="floatingInputGroup1">Enter Amount</label>
          </div>
        </div>
      </div>  
    </div>
    <div className="row mt-3">
      <div className="col">
        <p className="text-left">Destination</p>
        <Select options={options} onChange={handleChangeDestination} autoFocus={true} />
      </div>
    </div>
    <div className="row mt-3 text-center">
      <div className="col"><b>Rate</b>: 1 USDD ≈ 6.7859 gTTD</div>
    </div>
    <div className="row text-center">
      <div className="col"><b>Fee 0.4%</b>: ≈ 0.80</div>
    </div>
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col justify-content-middle">
      	<button className="btn btn-outline-info" onClick={exchange}>Convert</button>
    	</div>
      <div className="col"></div>
  	</div>
    <div id="alertExchangeMsg">{trxId? <div className="mt-4 alert sorrel-success" role="alert"><a onClick={clear} href={`https://nile.tronscan.org/#/transaction/${trxId}`} target="_blank"  rel="noreferrer">Transaction Successful!<br/><span className="small">View Tronscan</span></a></div> : <></>}</div>
  </div>
</div>
</>
  );
};

export default OffcanvasExchange;
