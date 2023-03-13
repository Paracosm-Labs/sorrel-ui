



const OffcanvasTransfer = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTransfer" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Transfer</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">

    <div class="mt-3">
      <p className="text-left">Select Account</p>
        <select class="form-select form-select-sm" aria-label="Select Account">
          <option selected>My Wallet</option>
          <option value="2">Primary Account</option>
          <option value="3">Travel Account</option>
          <option value="4">Groceries & Food Account</option>
        </select>

        <select class="mt-3 form-select form-select-sm" aria-label="Select Currency">
          <option selected>gTTD $4,400.88</option>
          <option value="2">gTTD $4,400.88</option>
          <option value="3">gTTD $4,400.88</option>
          <option value="4">gGEL $44,000.88</option>
          <option value="5">gEUR $4,000.88</option>
          <option value="6">gGBP $444.88</option>
        </select>
    </div>

    <div class="row mt-5">
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

      </div>
    </div>

    <div class="row mt-5">
    <div class="col">
        <p className="text-left">Enter Destination</p>
        <select class="form-select form-select-sm" aria-label="Select Account">
          <option selected>Custom Address</option>
          <option value="2">Primary Account</option>
          <option value="3">Travel Account</option>
          <option value="4">Groceries & Food Account</option>
        </select>
        <div className="input-group mb-1 mt-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="$"
            />
            <label for="floatingInputGroup1">TRC20 Address</label>
          </div>
        </div>
  	</div>
    </div>

    <div class="row mt-5">
    <div class="col text-center">
      <button class="btn btn-outline-info">Send</button>
    </div>

  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasTransfer;
