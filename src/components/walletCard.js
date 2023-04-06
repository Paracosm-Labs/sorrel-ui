import CardsImg from "../img/cards-mockup-alpha.png";
import React  from 'react';

const WalletCard = () => {
  return (

    <>

      <div className="accordion-item wallet-card mt-3">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <div className="container row">
              <div className="col-12 text-center">
                <h4>Pre Order Now</h4>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionCards">
          <div className="accordion-body">
          <div className="row">
            <div className="col border-bottom pb-3 border-width-2">
              To Pre Order your Sorrel Wallet Card Alpha, you must stake $30 USDD value in gStables for 6 months. 
            </div>
          </div>
          <div className="row mt-3 text-center">

            <div className="col"></div>
            <div className="col-md-6">
              <p className="text-left">Select the gStable you wish to stake</p>
                <select className="mt-3 mb-1 form-select form-select-sm" aria-label="Select Currency">
                  <option selected>gTTD</option>
                  <option value="2">gXCD</option>
                  <option value="3">gBBD</option>
                  <option value="4">gJMD</option>
                  <option value="5">gDOP</option>
                </select>
            </div>

            <div className="col"></div>

          </div>

          <div className="row mb-4 mt-3">
              <div className="col"></div>

              <div className="col-md-6">
                <p className="text-left">Enter Your Full Name</p>
                  <div className="input-group mb-1 mt-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder=""
                      />
                      <label for="floatingInputGroup1">Full Name</label>
                    </div>
                  </div>
              </div>
              <div className="col"></div>
          </div>

          <div className="row mb-4 mt-3">
              <div className="col"></div>

              <div className="col-md-6">
                <p className="text-left">Enter Your Shipping Address</p>
                  <div className="input-group mb-1 mt-3">
                    <div className="form-floating">
                      <input
                        type="text-area"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder=""
                      />
                      <label for="floatingInputGroup1">Address</label>
                    </div>
                  </div>
              </div>
              <div className="col"></div>
          </div>

            <div className="row mt-1 mb-3 text-center">
              <div className="col"></div>
              <div className="col">
                <button className="btn btn-outline-info" type="button">Order Now</button>           
              </div>
              <div className="col"></div>            
            </div>
          </div>
        </div>
      </div>


      <div className="accordion-item wallet-card mt-3">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <div className="container row">
              <div className="col-12 text-center">
                <h4>Activate Card</h4>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionCards">
          <div className="accordion-body">
          <div className="row">
            <div className="col border-bottom pb-3 border-width-2">
              Please ensure you are viewing this page on an NFC enabled device such as an Android smartphone. Card Activation is done in 4 steps: <br/><br/>
                <ul>
                  <li>Enter the Activation code recieved with your card.</li>
                  <li>Click the Activate button.</li>
                  <li>Place your Sorrel Card to your phone near its NFC reader.</li>
                  <li>Wait for the message confirming a successful activation. (Usually within 2 - 5 seconds)</li>
                </ul>
            </div>
          </div>

          <div className="row mt-3 text-center">

            <div className="col"></div>
            <div className="col-md-6">
            </div>

            <div className="col"></div>

          </div>

          <div className="row mb-4 mt-3">
              <div className="col"></div>

              <div className="col-md-6">
                <p className="text-left">Enter Activation Code</p>
                <div className="input-group mb-1 mt-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGroup1"
                      placeholder=""
                    />
                    <label for="floatingInputGroup1">Your Code</label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
          </div>


            <div className="row mt-5 text-center">
              <div className="col"></div>
              <div className="col">
              <button className="btn btn-outline-info" type="button">Activate</button>
              </div>
              <div className="col"></div>
            </div>
            
           
          </div>
        </div>
      </div>



    </>

  );
};

export default WalletCard;
