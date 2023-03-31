import React  from 'react';
import WalletCard from '../components/walletCard';
import CardsImg from "../img/cards-mockup-alpha.png";

const Cards = () => {
  return (
    <>
    <div class="d-flex bg-sorrel pb-8">
        <div class="container content">
            <div class="row mt-3">
              <div class="col d-none d-lg-block">
                <h1>Cards</h1>
                <p>Get you Sorrel NFC Card</p>
              </div>
              <div class="col text-center d-lg-none pb-8">
                <h1>Cards</h1>
                <p>Get you Sorrel NFC Wallet Card</p>
              </div>
            </div>

        </div>
    </div>


    <div class="container cards content">
      <div class="row mt-n10">
        <div class="col"></div>
        <div class="col-md-8 text-center">
                <img
                  src={CardsImg}
                  alt="Sorrel Wallet NFC Card"
                  width="550"
                  class="sorrel-card"
                />
        </div>
        <div class="col"></div>
      </div>
      <div class="row mt-1">
        <div class="col"></div>
        <div class="col-md-8">



              <div class="row p-3">
                <div class="col">

                  <div class="accordion" id="accordionCards">
                    <WalletCard></WalletCard>


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


    </>


  );
};

export default Cards;
