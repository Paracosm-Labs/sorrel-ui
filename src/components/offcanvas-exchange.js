import React, { useState }  from 'react';
import { getCurrencies, getCurrency } from '../utils/currencies';
import Select from "react-select";
import SwapGStableFactory from "../utils/swapGStableFactory";
import {usddContract} from "../contracts/usdContract";
import {SwapUSDDContractAddress} from "../utils/contractAddress";



const OffcanvasExchange = () => {
  const [gStableAmount, setGStableAmount] = useState(0);
  const [trxId, setTrxId] = useState("");
  const alertDiv = document.getElementById('alertExchangeMsg');

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


  const showHideExchangeAlert = () => {
    alertDiv.style.display = 'none';
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
      alertDiv.style.display = 'block';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExchange" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Exchange</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={showHideExchangeAlert}></button>
  </div>
  <div class="offcanvas-body mx-3">
  <div class="mt-3">
      <p class="text-left">Source</p>
      <Select options={options} onChange={handleChangeSource} autoFocus={true} />
  </div>
    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-1" key={1}>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Enter Amount"
              onChange={updateAmount}
            />
            <label for="floatingInputGroup1">Enter Amount</label>
          </div>
        </div>
      </div>  
    </div>
    <div class="row mt-3">
      <div class="col">
        <p class="text-left">Destination</p>
        <Select options={options} onChange={handleChangeDestination} autoFocus={true} />
      </div>
    </div>
    <div class="row mt-3 text-center">
      <div class="col"><b>Rate</b>: 1 USDD ≈ 6.7598 gTTD</div>
    </div>
    <div class="row text-center">
      <div class="col"><b>Fee 0.4%</b>: ≈ 0.80</div>
    </div>
    <div class="row mt-5">
      <div class="col"></div>
      <div class="col justify-content-middle">
      	<button class="btn btn-outline-info" onClick={exchange}>Exchange</button>
    	</div>
      <div class="col"></div>
  	</div>
    <div id="alertExchangeMsg">{trxId? <div className="mt-4 alert sorrel-success" role="alert"><a onClick={showHideExchangeAlert} href={`https://nile.tronscan.org/#/transaction/${trxId}`} target="_blank">Transaction<br/><span className="small">View Tronscan</span></a></div> : <></>}</div>
  </div>
</div>
</>
  );
};

export default OffcanvasExchange;
