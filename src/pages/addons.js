import React  from 'react';
import AddonItem from '../components/addons';


const Addons = () => {
  return (
    <>
    <div class="d-flex bg-sorrel pb-8">
      <div class="container content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Addons</h1>
              <p>Discover community addons that improve your Sorrel experience.</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col text-center d-lg-none">
              <h1>Addons</h1>
              <p>Discover community addons that improve your Sorrel experience.</p>
            </div>
          </div>
      </div>
    </div>

    <div class="container addons content">
      <div class="row mt-n4">
        <div class="col"></div>
        <div class="col-md-8">
            <AddonItem></AddonItem>
            <AddonItem></AddonItem>
            <AddonItem></AddonItem>
            <AddonItem></AddonItem>
        </div>
        <div class="col"></div>
      </div>
    </div>





    </>

  );
};

export default Addons;
