import WalletConnect from '../components/walletconnect';

const Bridge = () => {
  return (

    <>
    <div class="d-flex bg-info pb-8">
      <div class="container content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Bridge</h1>
              <p>Convert your stablecoins into the real world</p>
            </div>
            <div class="col">
              <WalletConnect></WalletConnect>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-center d-lg-none">
              <h1>Bridge</h1>
              <p>Convert your stablecoins into the real world</p>
            </div>
          </div>
      </div>



    </div>



    <div class="container bridge content">
        <div class="row mt-5">
          <div class="col text-center d-lg-none">
          </div>
        </div>
      <div class="row mt-n4">
        <div class="col"></div>
        <div class="col-md-6">
          <div class="card bg-secondary p-3">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4>Source</h4>

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

                  <div className="input-group mb-1 mt-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="Value in USDD"
                      />
                      <label for="floatingInputGroup1">Enter Amount</label>
                    </div>
                    <span className="input-group-text">
                      <i class="fa-solid fa-dollar"></i>
                    </span>
                  </div>



                </div>
                <div class="row p-3 text-center">
                <div class="col">
                  <button class="btn btn-outline-info mt-5">
                    <i class="fa-solid fa-repeat"></i>
                  </button>
                </div>
                </div>
                <div class="col mt-3">
                  <h4>Destination</h4>

                  <select class="form-select mt-3" aria-label="Select Method">
                    <option selected>Available Methods</option>
                    <option value="1">Western Union</option>
                    <option value="2">Moneygram</option>
                    <option value="3">RIA</option>
                    <option value="4">Bank Transfer</option>
                    <option value="4">SWIFT</option>
                    <option value="4">Worldremit</option>
                    <option value="4">Remitly</option>
                    <option value="4">SEPA</option>
                    <option value="5">IBAN</option>
                    <option value="6">ACH</option>
                    <option value="7">Visa</option>
                    <option value="8">Mastercard</option>
                    <option value="8">Paywise</option>
                    <option value="9">Alipay</option>
                    <option value="10">Google Pay</option>
                  </select>

                </div>
              </div>

                  <div class="row text-center mt-5">
                    <div class="col">

                      <button class="btn btn-outline-info btn-lg">
                        Next Step
                      </button>

                    </div>
                  </div>

            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>





    </>

  );
};

export default Bridge;
