import gTTDImg from "../img/gttd.png";
import USDDImg from "../img/usdd.png";




const OffcanvasExchange = () => {
  return (

    <>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExchange" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header bg-info">
    <h5 id="offcanvasRightLabel">Exchange</h5>
    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mx-3">

    <div class="row mt-3">

      <div class="col">
      <p className="text-left">Source</p>
      <select class="form-select form-select-sm" aria-label="Select Account">
        <option selected>Wallet Balance - gTTD $44,000.88</option>
        <option value="2">Primary - gTTD $4,400.88</option>
        <option value="2">Primary - USDD $4,400.88</option>
        <option value="3">Primary - gGEL $44,000.88</option>
        <option value="4">Primary - gEUR $4,000.88</option>
        <option value="5">Primary - gGBP $444.88</option>
      </select>
      </div>

    </div>
    <div class="row mt-3">
      <div class="col">
        <div className="input-group mb-1" key={1}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Enter Amount"
            />
            <label for="floatingInputGroup1">Enter Amount</label>
          </div>
          <span className="input-group-text">
            <img src={USDDImg}                
              width="32"
              height="32"
              />
          </span>
        </div>

      </div>  
    </div>


    <div class="row mt-5">
        <div class="col text-center">
              <i class="fa-solid fa-repeat"></i>
        </div>
    </div>


    <div class="row mt-3">

      <div class="col">
        <p className="text-left">Destination</p>
        <select class="form-select form-select-sm" aria-label="Select Account">
          <option selected>Primary - gTTD $4,400.88</option>
          <option value="2">Primary - USDD $444,000.88</option>
          <option value="3">Primary - gGEL $44,000.88</option>
          <option value="4">Primary - gEUR $4,000.88</option>
          <option value="5">Primary - gGBP $444.88</option>
        </select>
      </div>

    </div>

    <div class="row mt-3">

      <div class="col">
        <div className="input-group mb-1" key={2}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Value in gTTD"
            />
            <label for="floatingInputGroup1">Value in gTTD</label>
          </div>
          <span className="input-group-text">
            <img src={gTTDImg}                
              width="32"
              height="32"
              />
          </span>
        </div>
      </div>
    </div>


    <div class="row mt-3 text-center">
      <div class="col"><b>Rate</b>: 1 USDD ≈ 6.7598 gTTD</div>
    </div>
    <div class="row text-center">
      <div class="col"><b>Fee 0.4%</b>: ≈ 0.80</div>
    </div>

    <div class="row mt-5">
      <div class="col"></div>
      <div class="col justify-content-middle">
      	<button class="btn btn-outline-info">Exchange</button>
    	</div>
      <div class="col"></div>
  	</div>

  </div>
</div>

</>
  );
};

export default OffcanvasExchange;
