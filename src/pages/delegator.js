import ResourceDelegator from "../components/resourceDelegator";
import React  from 'react';


const Delegator = ()  => {
  return (
    <>

    <div className="d-flex bg-sorrel pb-8">
      <div className="container vaults content">
          <div className="row mt-3">
            <div className="col d-none d-lg-block">
              <h1>Earn Rewards</h1>
              <p>Earn gStables by staking your digital assets to support Sorrel Banq.</p>
            </div>
            <div className="col text-center d-lg-none">
              <h1>Delegator</h1>
              <p>Earn gStables by staking your digital assets to support Sorrel Banq.</p>
            </div>
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
                    <ResourceDelegator></ResourceDelegator>
                  </div>
                </div>
              </div>
        </div>
        <div className="col"></div>
        
      </div>
    </div>


    </>

  );
};

export default Delegator;
