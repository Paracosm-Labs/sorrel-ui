import ResourceDelegator from "../components/resourceDelegator";
import React  from 'react';


const Delegator = ()  => {
  return (
    <>

    <div className="d-flex bg-sorrel pb-8">
      <div className="container vaults content">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>Vaults</h1>
              
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

                    <div className="card-header d-none d-lg-block">
                      <div className="row mt-4 mx-3 pt-3 pe-4 text-white">
                        <div className="col text-center">
                          Asset
                        </div>
                        <div className="col text-center">
                          
                        </div>
                        <div className="col text-center">
                          My Deposit
                        </div>
                      </div>
                    </div>

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
