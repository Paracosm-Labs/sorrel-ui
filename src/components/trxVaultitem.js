import TRXImg from "../img/trx.png";
import React  from 'react';

const TRXVaultItem = () => {
  return (

    <>

      <div className="accordion-item vault-item mt-3">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <div className="container row mx-1 pt-2">
              <div className="col-md-4 col-sm-12">
                <img
                  src={TRXImg}
                  alt="TRX"
                  width="32"
                  height="32"
                  className="flex-shrink-0"
                />
                <div className="currency-name">
                  <b>TRX</b>
                  <p className="small">Tron</p>
                </div>
              </div>
              <div className="col text-center apr-info">
                <b className="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div className="col text-center">
                <b className="d-lg-none">My Deposit</b>
                <h6>213690.588</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionVaults">
          <div className="accordion-body">
          <div className="row">
            <div className="col border-bottom pb-3 border-width-2">
              Support Sorrel Banq by adding TRX into this vault to facilitate energy free transactions for Sorrel members. Vault yields are automatically credited to your Sorrel account every week. Deposits are locked for a minimum of 7 days. Build with gSIP-01 in mind for access to future shared credit facility.
            </div>
          </div>
          <div className="row mt-3 text-center">

            <div className="col"></div>
            <div className="col-md-6">
              <p className="text-left">Select the gStable you wish to earn</p>
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
                <p className="text-left">Enter Amount</p>
                  <div className="input-group mb-1 mt-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        placeholder="$"
                      />
                      <label htmlFor="floatingInputGroup1">TRX</label>
                    </div>
                  </div>
                  <p className="small">Balance: 30333.69 TRX</p>
              </div>
              <div className="col"></div>
          </div>

            <div className="row mt-1 mb-3 text-center">
              <div className="col"></div>
              <div className="col">
                <button className="btn btn-outline-info" type="button">Deposit</button>
              
              </div>
              <div className="col">
                <button className="btn btn-outline-vault-withdraw" type="button">Withdraw</button>
              </div>
              <div className="col"></div>            
            </div>

            <p className="small mt-5 mb-3 text-center">
              <i className="fa-solid fa-lock"></i><br/>
              Deposit Locked till XXXXX.</p>
          </div>
        </div>
      </div>


    </>

  );
};

export default TRXVaultItem;
