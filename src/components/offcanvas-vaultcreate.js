import React  from 'react';



const OffcanvasVaultCreate = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasVaultCreate" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Create Vault</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">


    <div class="row mt-3">
      <div class="col">
      <p class="text-left">Enter Vault Name</p>
          <div class="input-group mb-1 mt-3">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGroup1"
                placeholder="eg. Pizza Fund"
              />
              <label for="floatingInputGroup1">eg. Pizza Fund</label>
            </div>
          </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
      <p class="text-left">Enter Amount</p>
          <div class="input-group mb-1 mt-3">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInputGroup1"
                placeholder="$"
              />
              <label for="floatingInputGroup1">$</label>
            </div>
          </div>
          <p class="small pb-3">Balance: 3,000,000.89</p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col text-center">
      	<button class="btn btn-outline-info">Create</button>
    	</div>
  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasVaultCreate;
