import React from 'react';
import CurrencyAccounts from "../components/currency-accounts";
import TransactionHistory from "../components/txnhistory";
import OffcanvasExchange from "../components/offcanvas-exchange";
import OffcanvasDeposit from "../components/offcanvas-deposit";
import OffcanvasWithdraw from "../components/offcanvas-withdraw";
import OffcanvasTransfer from "../components/offcanvas-transfer";
import BalanceCardUSDD from "../components/balancesUSDD";

const Depository = () => {
  return (
    <>
      <div class="d-flex bg-sorrel pb-8">
        <div class="container accounts-info content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Accounts</h1>
              <p>Easily manage your digital currencies.</p>
            </div>
            <div class="col text-center d-lg-none">
              <h1>Accounts</h1>
              <p>Easily manage your digital currencies.</p>
            </div>
          </div>

          <div class="row mt-3 mx-3">
          <BalanceCardUSDD></BalanceCardUSDD>
          </div>
        </div>
      </div>
      <div class="container accounts content">
        <div class="row mt-3 mx-3">
          <div class="col md-6 xs-12 justify-content-start">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDeposit">
              <i class="fa-solid fa-cloud-arrow-down" data-toggle="tooltip" title="Deposit assets to your Sorrel Account"></i>&nbsp;
              Deposit
            </button>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithdraw">
              <i class="fa-solid fa-arrow-up-right-from-square" data-toggle="tooltip" title="Withdraw assets from Sorrel to your Wallet"></i>&nbsp;
              Withdraw
            </button>
          </div>

          <div class="col md-6 xs-12">
            <span class=" float-end">
            
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExchange" aria-controls="offcanvasExchange">
                <i class="fa-solid fa-bolt fa-beat" data-toggle="tooltip" title="Enjoy Energy Free transactions when available!"></i>
                <i class="fa-solid fa-repeat" data-toggle="tooltip" title="Convert your gStables to another easily"></i>&nbsp;
                Convert
              </button>

              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTransfer" aria-controls="offcanvasTransfer">
                <i class="fa-solid fa-bolt fa-beat" data-toggle="tooltip" title="Enjoy Energy Free transactions when available!"></i>
                <i class="fa-solid fa-arrow-right-from-bracket" data-toggle="tooltip" title="Transfer assets between Sorrel Members"></i>&nbsp;
                Transfer
              </button>
            </span>
          </div>
        </div>
        <div class="row mt-3 mx-3">
        <CurrencyAccounts></CurrencyAccounts>
        </div>
        <div class="row mt-3 mx-3 d-none">
          <TransactionHistory></TransactionHistory>
        </div>
      </div>
      <OffcanvasExchange></OffcanvasExchange>
      <OffcanvasDeposit></OffcanvasDeposit>
      <OffcanvasWithdraw></OffcanvasWithdraw>
      <OffcanvasTransfer></OffcanvasTransfer>
    </>
  );
};

export default Depository;
