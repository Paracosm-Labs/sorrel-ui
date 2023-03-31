import React  from 'react';
import { addonsData } from "../components/addonsData";
import AddonItem from '../components/addons';


const Addons = () => {
  return (
    <>
    <div class="d-flex bg-sorrel pb-8">
      <div class="container content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Addons</h1>
              <p>Stake your gStables to crowdfund addons that improve your Sorrel experience.</p>
            </div>
            <div class="col text-center d-lg-none">
              <h1>Addons</h1>
              <p>Stake your gStables to crowdfund addons that improve your Sorrel experience.</p>
            </div>
          </div>

      </div>
    </div>

    <div class="container addons content mb-5">
      <div class="row mt-n2">
        <div class="col"></div>
        <div class="col-md-8">
            {addonsData.map((item, key) => (
              <AddonItem key={key} item={item} />
            ))}
        </div>
        <div class="col"></div>
      </div>
    </div>





    </>

  );
};

export default Addons;
