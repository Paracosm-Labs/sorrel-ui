import React  from 'react';



const OffcanvasBridge = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasVaultDeposit" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Bridge</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">


    <div class="row mt-3">
      <div class="col">
      <p class="text-left">Enter Amount</p>
          <div class="input-group mb-1 mt-3">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGroup1"
                placeholder="Value"
              />
              <label for="floatingInputGroup1">$</label>
            </div>
          </div>
          <p class="small pb-3">Balance: 3,000,000.89</p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col text-center">
      	<button class="btn btn-outline-info">Deposit</button>
    	</div>
  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasBridge;