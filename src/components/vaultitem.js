import USDDImg from "../img/usdd.png";
import TRXImg from "../img/trx.png";
import React  from 'react';

const VaultItem = () => {
  return (

    <>
        <div class="card-header d-none d-lg-block">
          <div class="row mt-4 mx-3 pt-3 pe-4 text-white">
            <div class="col text-center">
              Asset
            </div>
            <div class="col text-center">
              APR
            </div>
            <div class="col text-center">
              My Deposit
            </div>

          </div>
        </div>

      <div class="accordion-item vault-item mt-3">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <div class="container row mx-1 pt-2">
              <div class="col-md-4 col-sm-12">
                <img
                  src={TRXImg}
                  alt="TRX"
                  width="32"
                  height="32"
                  class="flex-shrink-0"
                />
                <div class="currency-name">
                  <b>TRX</b>
                  <p class="small">Tron</p>
                </div>
              </div>
              <div class="col text-center apr-info">
                <b class="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div class="col text-center">
                <b class="d-lg-none">My Deposit</b>
                <h6>213690.588</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              Support Sorrel Banq by adding TRX into this vault to facilitate energy free transactions for Sorrel members. Vault yields are automatically credited to your Sorrel account every week. Deposits are locked for a minimum of 7 days. Build with gSIP-01 in mind for access to future shared credit facility.
            </div>
          </div>
          <div class="row mt-3 text-center">

            <div class="col"></div>
            <div class="col-md-6">
              <p class="text-left">Select the gStable you wish to earn</p>
                <select class="mt-3 mb-1 form-select form-select-sm" aria-label="Select Currency">
                  <option selected>gTTD</option>
                  <option value="2">gXCD</option>
                  <option value="3">gBBD</option>
                  <option value="4">gJMD</option>
                  <option value="5">gDOP</option>
                </select>
            </div>

            <div class="col"></div>

          </div>

          <div class="row mb-4 mt-3">
              <div class="col"></div>

              <div class="col-md-6">
                <p class="text-left">Enter Amount</p>
                  <div class="input-group mb-1 mt-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGroup1"
                        placeholder="$"
                      />
                      <label for="floatingInputGroup1">TRX</label>
                    </div>
                  </div>
                  <p class="small">Balance: 30333.69 TRX</p>
              </div>
              <div class="col"></div>
          </div>

            <div class="row mt-1 mb-3 text-center">
              <div class="col"></div>
              <div class="col">
                <button class="btn btn-outline-info" type="button">Deposit</button>
              
              </div>
              <div class="col">
                <button class="btn btn-outline-vault-withdraw" type="button">Withdraw</button>
              </div>
              <div class="col"></div>            
            </div>

            <p class="small mt-5 mb-3 text-center">
              <i class="fa-solid fa-lock"></i><br/>
              Deposit Locked till XXXXX.</p>
          </div>
        </div>
      </div>


      <div class="accordion-item vault-item mt-3">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <div class="container row mx-1 pt-3">
              <div class="col-md-4 col-sm-12">
                <img
                  src={USDDImg}
                  alt="gStable"
                  width="32"
                  height="32"
                  class="flex-shrink-0"
                />
                <div class="currency-name">
                  <b>USDD</b>
                  <p class="small">Decentralized US Dollar</p>
                </div>
              </div>
              <div class="col text-center apr-info">
                <b class="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div class="col text-center">
                <b class="d-lg-none">My Deposit</b>
                <h6>$48,006.98</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              Support goStables Protocol by adding USDD to this vault to help increase the Protocol's over-collateralization and stability. Vault yields are automatically credited to your Sorrel account on the 1st of every month. Deposits are locked for a minimum of 7 days.
            </div>
          </div>

          <div class="row mt-3 text-center">

            <div class="col"></div>
            <div class="col-md-6">

              <p class="text-left">Select the gStable you wish to earn</p>
                <select class="mt-3 mb-1 form-select form-select-sm" aria-label="Select Currency">
                  <option selected>gTTD</option>
                  <option value="2">gXCD</option>
                  <option value="3">gBBD</option>
                  <option value="4">gJMD</option>
                  <option value="5">gDOP</option>
                </select>
            </div>

            <div class="col"></div>

          </div>

          <div class="row mb-4 mt-3">
              <div class="col"></div>

              <div class="col-md-6">
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
                <p class="small">Balance: $30333.69</p>
              </div>
              <div class="col"></div>
          </div>


            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button">Deposit</button>
              </div>
              <div class="col">
                <button class="btn btn-outline-vault-withdraw" type="button">Withdraw</button>
              </div>
              <div class="col"></div>
            </div>
            
            <p class="small mt-5 mb-3 text-center">
              <i class="fa-solid fa-lock"></i><br/>
              Deposit Locked till XXXXX.
            </p>            
          </div>
        </div>
      </div>



    </>

  );
};

export default VaultItem;
