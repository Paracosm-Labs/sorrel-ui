import React, { useState }  from 'react';
import { getCurrencies, getCurrency } from '../utils/currencies';
import Select from "react-select";
import { depositoryContract } from '../contracts/depositoryContract';
import { DepositoryContractAddress } from '../utils/contractAddress';
import { useEffect } from 'react';
import axios from 'axios';
import serverURL from '../utils/server';
import Web3Signer from '../utils/web3Signer';

const OffcanvasTransfer = () => {
  const [gStableAmount, setGStableAmount] = useState(0);
  const [toAddress, setToAddress] = useState("");
  const [trxId, setTrxId] = useState("");

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
    setTrxId("");
    setToAddress("");
  }

  const send = async () => {
    debugger;
    try {
      if (window.tronWeb.ready && selected) {
        let currency = getCurrency(selected.value);
        console.log(`Sending ${gStableAmount} in ${selected.label} (${selected.value}) to ${toAddress}`);

        axios.post(`${serverURL}/txn/init`,{
          from : window.tronWeb.defaultAddress.base58,
          to: toAddress,
          gStableId: currency.id,
          value: gStableAmount,
        })
        .then(async(response) => {
          console.log(response);

          let tx = {from : response.data.from, to : response.data.to, gStableId : response.data.gStableId, value : response.data.value, nonce : response.data.nonce};

          let signer = new Web3Signer();
          let sig = await signer.sign(tx);
          if(sig){
            axios.post(`${serverURL}/txn/execute`,{...tx, sig})
            .then(async(response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            }); 
          }
        })
        .catch((error) => {
          console.log(error);
        });        
      }
      
      // let dc = await depositoryContract();
      // let currency = getCurrency(selected.value);
      // console.log(`Sending ${gStableAmount} in ${selected.label} (${selected.value}) to ${toAddress}`);
      // let trxId = await dc.transfer(currency.id, gStableAmount, toAddress);
      // setTrxId(trxId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTransfer" aria-labelledby="offcanvasRightLabel" onHide={clear}>
        <div class="offcanvas-header bg-info">
          <h5 id="offcanvasRightLabel">
            <i class="fa-solid fa-arrow-right-from-bracket" data-toggle="tooltip" title="Transfer assets between Sorrel Members"></i>&nbsp;&nbsp;Transfer&nbsp;&nbsp;
            <i class="fa-solid fa-bolt" data-toggle="tooltip" title="Enjoy Energy Free!"></i>
          </h5>
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
          <div id="alertTransferMsg">{trxId? <div className="mt-4 alert sorrel-success" role="alert"><a href={`https://nile.tronscan.org/#/transaction/${trxId}`} target="_blank"  rel="noreferrer" >Transaction Successful! <br/><span className="small">View Tronscan</span></a></div> : <></>}</div>
        </div>
      </div>
      </>
  );
};

export default OffcanvasTransfer;
