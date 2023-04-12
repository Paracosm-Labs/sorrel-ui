import ResourceDelegator from "../components/resourceDelegator";
import React  from 'react';


const Delegator = ()  => {
  return (
    <>

    <div className="d-flex bg-sorrel pb-8">
      <div className="container vaults content">

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
