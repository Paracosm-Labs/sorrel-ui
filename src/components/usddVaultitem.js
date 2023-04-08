import USDDImg from "../img/usdd.png";
import TRXImg from "../img/trx.png";
import React  from 'react';

const USDDVaultItem = () => {
  return (

    <>
        <div className="card-header d-none d-lg-block">
          <div className="row mt-4 mx-3 pt-3 pe-4 text-white">
            <div className="col text-center">
              Asset
            </div>
            <div className="col text-center">
              APR
            </div>
            <div className="col text-center">
              My Deposit
            </div>

          </div>
        </div>


      <div className="accordion-item vault-item mt-3">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <div className="container row mx-1 pt-3">
              <div className="col-md-4 col-sm-12">
                <img
                  src={USDDImg}
                  alt="gStable"
                  width="32"
                  height="32"
                  className="flex-shrink-0"
                />
                <div className="currency-name">
                  <b>USDD</b>
                  <p className="small">Decentralized USD</p>
                </div>
              </div>
              <div className="col text-center apr-info">
                <b className="d-lg-none">APR</b>
                <h6>3.69%</h6>
              </div>

              <div className="col text-center">
                <b className="d-lg-none">My Deposit</b>
                <h6>$48,006.98</h6>
              </div>
            </div>
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionVaults">
          <div className="accordion-body">
          <div className="row">
            <div className="col border-bottom pb-3 border-width-2">
              Support goStables Protocol by adding USDD to this vault to help increase the Protocol's over-collateralization and stability. Vault yields are automatically credited to your Sorrel account on the 1st of every month. Deposits are locked for a minimum of 7 days.
            </div>
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
                    <label htmlFor="floatingInputGroup1">$</label>
                  </div>
                </div>
                <p className="small">Balance: $30333.69</p>
              </div>
              <div className="col"></div>
          </div>


            <div className="row mt-5">
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
              Deposit Locked till XXXXX.
            </p>            
          </div>
        </div>
      </div>



    </>

  );
};

export default USDDVaultItem;
