import TxnHistory from "../components/txnhistory";



const OffcanvasTxnHistory = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTxnHistory" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Transaction History</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">
    <div class="row">
      <div class="col">
          <h5 class="text-center text-white">Primary Account - gTTD</h5>
          <h3 class="text-center text-white">$44,326.88</h3>
      </div>
    </div>


    <div class="card mt-3">
      <div class="card-header bg-secondary">

        <div class="row justify-contents-around">
          <div class="col">
            Action
          </div>
          <div class="col">
            Amount
          </div>
        </div>
      </div>
        <div class="card-body">

            <TxnHistory></TxnHistory>
            <TxnHistory></TxnHistory>


      </div>
    </div>

    <div class="row mt-3">
      <p class="text-center">View more on Tronscan</p>
      <div class="col text-center">
      	<button class="btn btn-outline-info">Close</button>
    	</div>
  	</div>
  </div>
</div>

</>
  );
};

export default OffcanvasTxnHistory;
