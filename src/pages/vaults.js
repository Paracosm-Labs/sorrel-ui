import VaultItem from '../components/vaultitem';
import OffcanvasVaultCreate from "../components/offcanvas-vaultcreate";
import React  from 'react';


const Vaults = () => {
  return (
    <>

    <div className="d-flex bg-sorrel pb-8">
      <div className="container vaults content">
          <div className="row mt-3">
            <div className="col d-none d-lg-block">
              <h1>Vaults</h1>
              <p>Earn gStables by staking your digital assets to support Sorrel Banq and goStables Protocol.</p>
            </div>
            <div className="col text-center d-lg-none">
              <h1>Vaults</h1>
              <p>Earn gStables by staking your digital assets to support Sorrel Banq and goStables Protocol.</p>
            </div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col text-center d-none">
              <button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultCreate" aria-controls="offcanvasVaultCreate"><i className="fa-solid fa-plus"></i>&nbsp;Create Vault</button>
            </div>
          <div className="col"></div>
          </div>


      </div>
    </div>





    <div className="container vaults content">
      <div className="row mt-n10">
        <div className="col"></div>
        <div className="col-md-8">



              <div className="row p-3">
                <div className="col">

                  <div className="accordion" id="accordionVaults">
                    <VaultItem></VaultItem>


                  </div>


                </div>
                <div className="row p-3">
                <div className="col">


                </div>
                </div>
                <div className="col">


                </div>
              </div>


            </div>

        <div className="col"></div>
      </div>
    </div>

<OffcanvasVaultCreate></OffcanvasVaultCreate>


    </>

  );
};

export default Vaults;
