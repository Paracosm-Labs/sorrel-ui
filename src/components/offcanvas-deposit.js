import React, { useState }  from 'react';
import { getCurrencies, getCurrency } from '../utils/currencies';
import Select from "react-select";
import { depositoryContract } from '../contracts/depositoryContract';
import { DepositoryContractAddress } from '../utils/contractAddress';

const OffcanvasDeposit = () => {
  const [gStableAmount, setGStableAmount] = useState(0);
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

  const clear = () => {
    setGStableAmount(0);
    setTrxId("");
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
  }

  const deposit = async () => {
    try {
      let dc = await depositoryContract();
      let currency = getCurrency(selected.value);
      let gStableContract = await currency.gStableContract();
      await gStableContract.approve(DepositoryContractAddress, gStableAmount * 2);
      console.log(`Depositing ${gStableAmount} in ${selected.label} (${selected.value})`);
      let trxId = await dc.deposit(currency.id, gStableAmount);
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
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDeposit" aria-labelledby="offcanvasRightLabel" onHide={clear}>
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">
      <i class="fa-solid fa-cloud-arrow-down" data-toggle="tooltip" title="Deposit assets to your Sorrel Account"></i>
      &nbsp;&nbsp;Deposit
    </h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={clear}></button>
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
      <div class="col text-center">
      	<button class="btn btn-outline-info" onClick={deposit}>Deposit</button>
    	</div>
  	</div>
    <div id="alertDepositMsg">{trxId? <div className="mt-4 alert sorrel-success" role="alert"><a onClick={clear} href={`https://nile.tronscan.org/#/transaction/${trxId}`} target="_blank"  rel="noreferrer" >Transaction Successful!<br/><span className="small">View Tronscan</span></a></div> : <></>}</div>
  </div>
</div>

</>
  );
};

export default OffcanvasDeposit;
