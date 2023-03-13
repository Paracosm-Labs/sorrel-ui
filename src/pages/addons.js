import WalletConnect from '../components/walletconnect';
import AddonItem from '../components/addon';

const Addons = () => {
  return (

    <>
    <div class="d-flex bg-info pb-8">
      <div class="container content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Addons</h1>
              <p>Discover community addons that improve your Sorrel experience.</p>
            </div>
            <div class="col">
              <WalletConnect></WalletConnect>
            </div>
          </div>

      </div>
    </div>

    <div class="container addons content">
      <div class="row mt-n4">
        <div class="col"></div>
        <div class="col-md-6">
          <div class="card bg-secondary p-3">
            <div class="card-body">
              <div class="row text-center">
                <div class="col">

                  <div class="accordion" id="accordionExample">
                    <AddonItem></AddonItem>


                  </div>


                </div>
                <div class="row p-3">
                <div class="col">

                </div>
                </div>
                <div class="col">


                </div>
              </div>

                  <div class="row text-center mt-5">
                    <div class="col">



                    </div>
                  </div>

            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>





    </>

  );
};

export default Addons;
