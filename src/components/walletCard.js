import CardsImg from "../img/cards-mockup-alpha.png";
import React  from 'react';

const WalletCard = () => {
  return (

    <>

      <div class="accordion-item wallet-card mt-3">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <div class="container row">
              <div class="col-12 text-center">
                <h4>Pre-Order Now</h4>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionCards">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              To Pre-Order your Sorrel NFC Wallet Card - Alpha Edition, you must maintain a minimum balance of $30 USD value in any stablecoin in your Sorrel Account for 60 days. <br/><br/>Functional mechanics will be applied post mainnet launch of Sorrel.
            </div>
          </div>

          <div class="row mb-4 mt-3">
              <div class="col"></div>

              <div class="col-md-6">
                <p class="text-left">Enter Your Full Name</p>
                  <div class="input-group mb-1 mt-3">
                    <div class="form-floating">
                      <input disabled
                        type="text"
                        class="form-control"
                        id="floatingInputGroup1"
                        placeholder=""
                      />
                      <label for="floatingInputGroup1">Full Name</label>
                    </div>
                  </div>
              </div>
              <div class="col"></div>
          </div>

          <div class="row mb-4 mt-3">
              <div class="col"></div>

              <div class="col-md-6">
                <p class="text-left">Enter Your Full Shipping Address</p>
                  <div class="input-group mb-1 mt-3">
                    <div class="form-floating address">
                      <input disabled
                        type="text-area"
                        class="form-control"
                        id="floatingInputGroup1"
                        placeholder=""
                      />
                      <label for="floatingInputGroup1">Address</label>
                    </div>
                  </div>
              </div>
              <div class="col"></div>
          </div>

            <div class="row mt-1 mb-3 text-center">
              <div class="col"></div>
              <div class="col">
                <button class="btn btn-outline-info disabled" type="button">Pre-Order Now</button>           
              </div>
              <div class="col"></div>            
            </div>
          </div>
        </div>
      </div>


      <div class="accordion-item wallet-card mt-3">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <div class="container row">
              <div class="col-12 text-center">
                <h4>Activate Card</h4>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionCards">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              Please ensure you are viewing this page on an NFC enabled device such as an Android smartphone.<br/>Once you recieve your card, activation is done in 3 steps: <br/><br/>
                <ul>
                  <li>Click the Activate button.</li>
                  <li>Place your Sorrel Card to your phone near its NFC reader.</li>
                  <li>Wait for the message confirming a successful activation. (Usually within 2 - 5 seconds)</li>
                </ul>
            </div>
          </div>

          <div class="row mt-3 text-center">

            <div class="col"></div>
            <div class="col-md-6">
            </div>

            <div class="col"></div>

          </div>


            <div class="row mt-5 text-center">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info disabled" type="button">Activate<br/>Coming Soon</button>
              </div>
              <div class="col"></div>
            </div>
            
           
          </div>
        </div>
      </div>



    </>

  );
};

export default WalletCard;
