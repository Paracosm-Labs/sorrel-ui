



const OffcanvasAddAccount = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddAccount" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">New Savings Account</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">

    <div class="row mt-3">
	    <div class="col">
	    <p className="text-left">Enter Account Name</p>
          <div className="input-group mb-1 mt-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder=""
              />
              <label for="floatingInputGroup1">eg. Travel Fund</label>
            </div>
          </div>
          <div class="mt-5">
	          <p className="text-left">Select Currency</p>
	          <select class="form-select" aria-label="Select Currency">
	            <option selected>gTTD</option>
	            <option value="2">gGEL</option>
	            <option value="3">gEUR</option>
	            <option value="4">gGBP</option>
	            <option value="5">USDD</option>
	          </select>
          </div>
	    </div>
    </div>

    <div class="row mt-5">
	    <div class="col text-center">
	    	<button class="btn btn-outline-info">Create Account</button>
	  	</div>

  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasAddAccount;
