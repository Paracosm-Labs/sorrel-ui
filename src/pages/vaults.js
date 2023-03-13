import WalletConnect from '../components/walletconnect';
import VaultItem from '../components/vaultitem';
import OffcanvasVaultCreate from "../components/offcanvas-vaultcreate";


const Vaults = () => {
  return (
    <>

    <div class="d-flex bg-info pb-8">
      <div class="container vaults content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Vaults</h1>
              <p>Earn stablecoins by staking your digital assets over fixed periods.</p>
            </div>
            <div class="col">
              <WalletConnect></WalletConnect>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-center d-lg-none">
              <h1>Vaults</h1>
              <p>Earn stablecoins by staking your digital assets over fixed periods.</p>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div className="col text-center">
              <button class="btn btn-outline-secondary d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasVaultCreate" aria-controls="offcanvasVaultCreate"><i class="fa-solid fa-plus"></i>&nbsp;Create Vault</button>
            </div>
          <div class="col"></div>
          </div>


      </div>
    </div>





    <div class="container vaults content">
      <div class="row mt-n4">
        <div class="col"></div>
        <div class="col-md-8">



              <div class="row p-3">
                <div class="col">

                  <div class="accordion" id="accordionExample">
                    <VaultItem></VaultItem>


                  </div>


                </div>
                <div class="row p-3">
                <div class="col">


                </div>
                </div>
                <div class="col">


                </div>
              </div>


            </div>

        <div class="col"></div>
      </div>
    </div>

<OffcanvasVaultCreate></OffcanvasVaultCreate>


    </>

  );
};

export default Vaults;
