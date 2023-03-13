import CurrencyAcc from "../components/currencyaccalt";
import OffcanvasAddAccount from "../components/offcanvas-addaccount";
import OffcanvasExchange from "../components/offcanvas-exchange";
import OffcanvasDeposit from "../components/offcanvas-deposit";
import OffcanvasTransfer from "../components/offcanvas-transfer";
import WalletConnect from '../components/walletconnect';

const Accounts = () => {
  return (

<>
    <div class="d-flex bg-info pb-8">
    <div class="container accounts-info content">
      <div class="row mt-3">
        <div class="col d-none d-lg-block">
          <h1>Accounts</h1>
          <p>Easily manage your digital currencies.</p>
        </div>
        <div class="col">
          <WalletConnect></WalletConnect>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col text-center d-lg-none">
          <h1>Accounts</h1>
          <p>Easily manage your digital currencies.</p>
        </div>
      </div>
      <div className="row mt-3 mx-3">
        <div className="col-sm bal-card text-center">
          <h3>Balance</h3>
          <h3>$2,461,669.30</h3>
        </div>
        <div className="col-sm info-card text-center">

            <div class="row">
              <div class="col">$136,000</div>
              <div class="col">$3000</div>
            </div>

          <div class="row">
              <div class="col">
                <button class="btn btn-sm btn-primary">
                  Borrow
                </button>
              </div>
              <div class="col">
                <button class="btn btn-sm btn-primary">
                  Repay
                </button>
              </div>
          </div>
          
        </div>
      </div>


    </div>
    </div>

    

    <div className="container accounts content">

      <div className="row mt-3 mx-3">
        <div class="col justify-content-start">

            <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddAccount" aria-controls="offcanvasAddAccount"><i class="fa-solid fa-plus"></i>&nbsp;Add Account</button>

          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExchange" aria-controls="offcanvasExchange">
            <i class="fa-solid fa-repeat"></i>&nbsp;
            Exchange
          </button>
        </div> 
        <div class="col">

        </div>
        <div class="col">
        <span class=" float-end">
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDeposit" aria-controls="offcanvasDeposit">
            <i class="fa-solid fa-cloud-arrow-down"></i>&nbsp;
            Deposit
          </button>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTransfer" aria-controls="offcanvasTransfer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;
            Transfer
          </button>
        </span>
        </div>   
      </div>

      <div className="row mt-3 mx-3">
        <CurrencyAcc></CurrencyAcc>
      </div>

    </div>
    <OffcanvasAddAccount></OffcanvasAddAccount>
    <OffcanvasExchange></OffcanvasExchange>
    <OffcanvasDeposit></OffcanvasDeposit>
    <OffcanvasTransfer></OffcanvasTransfer>
</>
  );
};

export default Accounts;
