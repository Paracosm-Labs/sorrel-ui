import OffcanvasTxnHistory from "../components/offcanvas-txnhistory";
import gTTDImg from "../img/gttd.png";
import USDDImg from "../img/usdd.png";
import gEURImg from "../img/geur.png";
import gGBPImg from "../img/ggbp.png";
import gGELImg from "../img/ggel.png";

const currencyAcc = () => {
  return (
    <>
 
 <div class="container justify-content-center">

        <div class="card-header d-none d-lg-block">
          <div class="row mt-4 mx-3 pt-3 pe-4">
            <div class="col text-center">
              Asset
            </div>
            <div class="col text-center">
              APR
            </div>
            <div class="col text-center">
              Savings Balance
            </div>
            <div class="col text-center">
              Wallet Balance
            </div>
            <div class="col text-center">

            </div>
          </div>
        </div>

<div class="accordion accordion-flush mt-3" id="accordionFlushExample">
  <div class="accordion-item currency-acc mt-3">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <div class="container row mx-1 pt-3">
            <div class="col">
              <img
                src={gTTDImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>gTTD</b>
                <p class="small">Trinidad & Tobago Dollar</p>
              </div>
            </div>
            <div class="col text-center apr-info">
              <b class="d-lg-none">APR</b>
              <h6>2.69%</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Savings Balance</b>
              <h6>$444,326.88</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Wallet Balance</b>
              <h6>$48,006.98</h6>
            </div>
            <div class="col text-center">3 Accounts</div>
          </div>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
      <div class="accordion-body owned-accounts">
        <div class="row mt-1 border-2 border-bottom">
          <div class="col text-left">Primary Account</div>
          <div class="col"></div>
          <div class="col text-center">$44,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>
        <div class="row mt-3 border-2 border-bottom">
          <div class="col text-left">Travel Fund Account</div>
          <div class="col"></div>
          <div class="col text-center">$4,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>
        <div class="row mt-3">
          <div class="col text-left">Groceries & Food Account</div>
          <div class="col"></div>
          <div class="col text-center">$326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item currency-acc mt-3">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <div class="container row mx-1 pt-3">
            <div class="col">
              <img
                src={gGELImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>gGEL</b>
                <p class="small">Georgian Lari</p>
              </div>
            </div>
            <div class="col text-center apr-info">
              <b class="d-lg-none">APR</b>
              <h6>2.69%</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Savings Balance</b>
              <h6>$444,326.88</h6>
            </div>

            <div class="col text-center">
              <b class="d-lg-none">Wallet Balance</b>
              <h6>$48,006.98</h6>
            </div>
            <div class="col text-center">1 Account</div>
          </div>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo">
      <div class="accordion-body owned-accounts">

        <div class="row mt-3 border-2 border-bottom">
          <div class="col text-left">Primary Account</div>
          <div class="col"></div>
          <div class="col text-center">$44,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>

      </div>
    </div>
  </div>
  <div class="accordion-item currency-acc mt-3">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          <div class="container row mx-1 pt-3">
            <div class="col">
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
              <h6>2.69%</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Savings Balance</b>
              <h6>$444,326.88</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Wallet Balance</b>
              <h6>$48,006.98</h6>
            </div>
            <div class="col text-center">1 Account</div>
          </div>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree">
      <div class="accordion-body owned-accounts">

        <div class="row mt-3 border-2 border-bottom">
          <div class="col text-left">Primary Account</div>
          <div class="col"></div>
          <div class="col text-center">$44,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>

      </div>
    </div>
  </div>
  <div class="accordion-item currency-acc mt-3">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          <div class="container row mx-1 pt-3">
            <div class="col">
              <img
                src={gEURImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>gEUR</b>
                <p class="small">Euro</p>
              </div>
            </div>
            <div class="col text-center apr-info">
              <b class="d-lg-none">APR</b>
              <h6>2.69%</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Savings Balance</b>
              <h6>$444,326.88</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Wallet Balance</b>
              <h6>$48,006.98</h6>
            </div>
            <div class="col text-center">1 Account</div>
          </div>
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour">
      <div class="accordion-body owned-accounts">

        <div class="row mt-3 border-2 border-bottom">
          <div class="col text-left">Primary Account</div>
          <div class="col"></div>
          <div class="col text-center">$44,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>

      </div>
    </div>
  </div>
  <div class="accordion-item currency-acc mt-3">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          <div class="container row mx-1 pt-3">
            <div class="col">
              <img
                src={gGBPImg}
                alt="gStable"
                width="32"
                height="32"
                class="flex-shrink-0"
              />
              <div class="currency-name">
                <b>gGBP</b>
                <p class="small">British Pound</p>
              </div>
            </div>
            <div class="col text-center apr-info">
              <b class="d-lg-none">APR</b>
              <h6>2.69%</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Savings Balance</b>
              <h6>$444,326.88</h6>
            </div>
            <div class="col text-center">
              <b class="d-lg-none">Wallet Balance</b>
              <h6>$48,006.98</h6>
            </div>
            <div class="col text-center">1 Account</div>
          </div>
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive">
      <div class="accordion-body owned-accounts">

        <div class="row mt-3 border-2 border-bottom">
          <div class="col text-left">Primary Account</div>
          <div class="col"></div>
          <div class="col text-center">$44,326.88</div>
          <div class="col"></div>
          <div class="col"><button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTxnHistory" aria-controls="offcanvasTxnHistory">Transaction History</button></div>
        </div>

      </div>
    </div>
  </div>
</div>
<OffcanvasTxnHistory></OffcanvasTxnHistory>
</div>



    </>


  );
};

export default currencyAcc;
