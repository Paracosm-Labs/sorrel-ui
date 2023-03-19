import React from 'react';
// import CurrencyAcc from "../components/currencyaccalt";
import CurrencyAcc from "../components/currency-accounts";
import TransactionHistory from "../components/txnhistory";
import OffcanvasAddAccount from "../components/offcanvas-addaccount";
import OffcanvasExchange from "../components/offcanvas-exchange";
import OffcanvasDeposit from "../components/offcanvas-deposit";
import OffcanvasWithdraw from "../components/offcanvas-withdraw";
import OffcanvasTransfer from "../components/offcanvas-transfer";
import WalletConnect from '../components/walletconnect';

const Depository = () => {
  return (
    <>
      <div class="d-flex bg-sorrel pb-8">
        <div class="container accounts-info content">
          <div class="row mt-3">
            <div class="col d-none d-lg-block">
              <h1>Depository</h1>
              <p>Easily manage your digital currencies.</p>
            </div>
            <div class="col text-center d-lg-none">
              <h1>Depository</h1>
              <p>Easily manage your digital currencies.</p>
            </div>
          </div>

          <div class="row mt-3 mx-3">
            <div class="col-sm bal-card text-center">
              <h3>Balance</h3>
              <h3>$2,461,669.30</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container accounts content">
        <div class="row mt-3 mx-3">
          <div class="col md-6 xs-12 justify-content-start">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDeposit">
              <i class="fa-solid fa-cloud-arrow-down"></i>&nbsp;
              Deposit
            </button>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithdraw">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;
              Withdraw
            </button>
          </div>

          <div class="col md-6 xs-12">
            <span class=" float-end">
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExchange" aria-controls="offcanvasExchange">
                <i class="fa-solid fa-repeat"></i>&nbsp;
                Exchange
              </button>
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTransfer" aria-controls="offcanvasTransfer">
                <i class="fa-solid fa-repeat"></i>&nbsp;
                Transfer
              </button>
            </span>
          </div>
        </div>
        <div class="row mt-3 mx-3">
          <CurrencyAcc></CurrencyAcc>
        </div>
        <div class="row mt-3 mx-3">
          <TransactionHistory></TransactionHistory>
        </div>
      </div>
      <OffcanvasAddAccount></OffcanvasAddAccount>
      <OffcanvasExchange></OffcanvasExchange>
      <OffcanvasDeposit></OffcanvasDeposit>
      <OffcanvasWithdraw></OffcanvasWithdraw>
      <OffcanvasTransfer></OffcanvasTransfer>
    </>
  );
};

export default Depository;
