



const Addons = () => {
  return (

    <>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Recurring Payments
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              Addon description and whatever
            <div class="row mt-5">
              <div class="col"></div>
              <div class="col">
                <button class="btn btn-outline-info btn-lg">
                  Activate
                </button>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>



    </>

  );
};

export default Addons;
