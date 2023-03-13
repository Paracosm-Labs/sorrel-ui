import USDDImg from "../img/usdd.png";
import BTCImg from "../img/btc.png";
import TRXImg from "../img/trx.png";
import BNBImg from "../img/bnb.png";
import ETHImg from "../img/eth.png";



const VaultItem = () => {
  return (

    <>

        <div class="row mt-5">
          <div class="col text-center d-lg-none">
          </div>
        </div>

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
            <div class="container row mx-1 pt-3">
              <div class="col-md-4 col-sm-12">
                <img
                  src={BTCImg}
                  alt="gStable"
                  width="32"
                  height="32"
                  class="flex-shrink-0"
                />
                <div class="currency-name">
                  <b>BTC</b>
                  <p class="small">Bitcoin</p>
                </div>
              </div>
              <div class="col text-center apr-info">
                <b class="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div class="col text-center">
                <b class="d-lg-none">My Deposit</b>
                <h6>21.369 BTC</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              Vault harvests yields from the goStables protocol and automatically deposits it to your Primary account on the 1st of every month. Deposits are locked for a minimum of 3 months.
            </div>
          </div>
          <div class="row mt-3">

            <div class="col"></div>
            <div class="col-md-6">
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
                <p className="small pb-3">Balance: 3.033369 BTC</p>
            </div>
            <div class="col"></div>
          </div>

            <div class="row mt-1 mb-3 text-center">
              <div class="col"></div>
              <div class="col">
                <button class="btn btn-outline-info" type="button">Deposit</button>
              
              </div>
              <div class="col">
                <button class="btn btn-outline-secondary disabled" type="button">Withdraw</button>
              </div>
              <div class="col">
              
              </div>            
            </div>
            <p className="small mt-5 mb-3 text-center">Deposit Locked till XXXXX.</p>
          </div>
        </div>
      </div>

      <div class="accordion-item vault-item mt-3">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <div class="container row mx-1 pt-3">
              <div class="col-md-4 col-sm-12">
                <img
                  src={TRXImg}
                  alt="gStable"
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
                <h6>408,006 TRX</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item vault-item mt-3">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <div class="container row mx-1 pt-3">
              <div class="col-md-4 col-sm-12">
                <img
                  src={BNBImg}
                  alt="gStable"
                  width="32"
                  height="32"
                  class="flex-shrink-0"
                />
                <div class="currency-name">
                  <b>BNB</b>
                  <p class="small">Binance Coin</p>
                </div>
              </div>
              <div class="col text-center apr-info">
                <b class="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div class="col text-center">
                <b class="d-lg-none">My Deposit</b>
                <h6>8,006 BNB</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
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
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button">Deposit</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>



    </>

  );
};

export default VaultItem;
