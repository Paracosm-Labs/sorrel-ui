import WalletConnect from '../components/walletconnect';
import HomeCarousel from '../components/homecarousel';

const Home = () => {
  return (
    <>
    <div class="d-flex bg-info pb-8">
        <div class="container content">
            <div class="row mt-3">
              <div class="col d-none d-lg-block">
                <h1>Getting Started</h1>
                <p>What can you do with Sorrel?</p>
              </div>
              <div class="col">
                <WalletConnect></WalletConnect>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col text-center d-lg-none pb-8">
                <h1>Getting Started</h1>
                <p>What can you do with Sorrel?</p>
              </div>
            </div>

        </div>
    </div>


    <div class="container home content mt-n4">
      <HomeCarousel></HomeCarousel>

            <div class="row mt-3 mx-5 text-center">
              <div class="col"></div>
              <div class="col-8">


              </div>
              <div class="col"></div>
            </div>

    </div>

    </>


  );
};

export default Home;
