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
                <h4>Pre Order Now</h4>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionCards">
          <div class="accordion-body">
          <div class="row">
            <div class="col border-bottom pb-3 border-width-2">
              To Pre Order your Sorrel Wallet Card Alpha, you must stake $30 USDD value in gStables for 6 months. 
            </div>
          </div>
          <div class="row mt-3 text-center">

            <div class="col"></div>
            <div class="col-md-6">
              <p class="text-left">Select the gStable you wish to stake</p>
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
                <p class="text-left">Enter Your Full Name</p>
                  <div class="input-group mb-1 mt-3">
                    <div class="form-floating">
                      <input
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
                <p class="text-left">Enter Your Shipping Address</p>
                  <div class="input-group mb-1 mt-3">
                    <div class="form-floating">
                      <input
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
                <button class="btn btn-outline-info" type="button">Order Now</button>           
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
              Please ensure you are viewing this page on an NFC enabled device such as an Android smartphone. Card Activation is done in 4 steps: <br/><br/>
                <ul>
                  <li>Enter the Activation code recieved with your card.</li>
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

          <div class="row mb-4 mt-3">
              <div class="col"></div>

              <div class="col-md-6">
                <p class="text-left">Enter Activation Code</p>
                <div class="input-group mb-1 mt-3">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGroup1"
                      placeholder=""
                    />
                    <label for="floatingInputGroup1">Your Code</label>
                  </div>
                </div>
              </div>
              <div class="col"></div>
          </div>


            <div class="row mt-5 text-center">
              <div class="col"></div>
              <div class="col">
              <button class="btn btn-outline-info" type="button">Activate</button>
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
