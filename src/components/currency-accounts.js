import React from 'react';
import gTTDImg from "../img/gttd.png";
import USDDImg from "../img/usdd.png";
import gEURImg from "../img/geur.png";
import gGBPImg from "../img/ggbp.png";
import gGELImg from "../img/ggel.png";


const CurrencyAccounts = () => {
    return (<>
        <div className="row currency-accounts">
            <div className="card m-3 col-md-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={gTTDImg}
                            width="32"
                            height="32"
                            className="flex-shrink-0" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="card-title">gTTD</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Sorrel: 3000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Wallet: 1000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">APY: <span className="text-success">3.69%</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-3 col-md-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={gEURImg} 
                            width="32"
                            height="32"
                            className="flex-shrink-0" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="card-title">gEUR</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Sorrel: 3000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Wallet: 1000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">APY: <span className="text-success">3.69%</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-3 col-md-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={gGBPImg}                 
                            width="32"
                            height="32"
                            className="flex-shrink-0" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="card-title">gGBP</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Sorrel: 3000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Wallet: 1000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">APY: <span className="text-success">3.69%</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-3 col-md-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={USDDImg} 
                            width="32"
                            height="32"
                            className="flex-shrink-0" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="card-title">USDD</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Sorrel: 3000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Wallet: 1000.00</h6>
                            <h6 className="card-subtitle mb-2 text-muted">APY: <span className="text-success">3.69%</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card m-3 col-md-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="card-title">View All</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CurrencyAccounts;