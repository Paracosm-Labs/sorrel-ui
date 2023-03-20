import React, { useState }  from 'react';
import { getCurrencies, getCurrency } from '../utils/currencies';
import Select from "react-select";
import { depositoryContract } from '../contracts/depositoryContract';
import { DepositoryContractAddress } from '../utils/contractAddress';

const OffcanvasTransfer = () => {
  const [gStableAmount, setGStableAmount] = useState(0);
  const [toAddress, setToAddress] = useState("");
  const [trxId, setTrxId] = useState("");
  const alertDiv = document.getElementById('alertTransferMsg');

// Select Currency Dropdown related
  const options = getCurrencies().map(currency => {
    return {value : currency.key, label : currency.label}
  });


  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const updateAmount = (e) => {
    console.log("DepositValue : ", e.target.value);
    setGStableAmount(e.target.value);
  };

  const updateAddress = (e) => {
    console.log("Send To Address  : ", e.target.value);
    setToAddress(e.target.value);
  };

  const clear = () => {
    setGStableAmount(0);
    setToAddress(0);
    setTrxId("")
  }

  const send = async () => {
    try {
      let dc = await depositoryContract();
      let currency = getCurrency(selected.value);
      console.log(`Sending ${gStableAmount} in ${selected.label} (${selected.value}) to ${toAddress}`);
      let trxId = await dc.transfer(currency.id, gStableAmount, toAddress);
      setTrxId(trxId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTransfer" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header bg-info">
          <h5 id="offcanvasRightLabel">Transfer</h5>
          <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" onClick={clear}></button>
        </div>
        <div class="offcanvas-body mx-3">
        <div class="mt-3">
      <p class="text-left">Select Currency</p>
      <Select options={options} onChange={handleChange} autoFocus={true} />
      </div>
      <div class="row mt-5">
        <div class="col">
        <p class="text-left">Enter Amount</p>
            <div class="input-group mb-1 mt-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputGroup1"
                  onChange={updateAmount}
                />
                <label for="floatingInputGroup1">{selected?selected.label:""}</label>
              </div>
            </div>
        </div>
      </div>
          <div class="row mt-5">
          <div class="col">
              <p class="text-left">Enter Destination</p>
              
              <div class="input-group mb-1 mt-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGroup1"
                    placeholder="$"
                    onChange={updateAddress}
                  />
                  <label for="floatingInputGroup1">Address</label>
                </div>
              </div>
          </div>
          </div>

          <div class="row mt-5">
          <div class="col text-center">
            <button class="btn btn-outline-info" onClick={send}>Send</button>
          </div>
          </div>
          <div id="alertTransferMsg">{trxId? <div className="mt-4 alert sorrel-success" role="alert"><a onClick={showHideTransferAlert} href={`https://nile.tronscan.org/#/transaction/${trxId}`} target="_blank">Transaction Successful! <br/><span className="small">View Tronscan</span></a></div> : <></>}</div>
        </div>
      </div>
      </>
  );
};

export default OffcanvasTransfer;
