



const OffcanvasVaultDeposit = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasVaultDeposit" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Vault Deposit</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">


    <div class="row mt-3">
      <div class="col">
      <p className="text-left">Enter Amount</p>
          <div className="input-group mb-1 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="$"
              />
              <label for="floatingInputGroup1">$</label>
            </div>
          </div>
          <p className="small pb-3">Balance: 3,000,000.89</p>
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

export default OffcanvasVaultDeposit;
