import React from 'react';
import { readDepositoryGStableBalance } from '../publishers/depository';
import { readWalletGStableBalance } from '../publishers/wallet';

const CurrencyDeposit = ({currency, walletData, depositoryData}) => {
    let depositoryBalance = readDepositoryGStableBalance(depositoryData,currency);
    let walletBalance = readWalletGStableBalance(walletData, currency);
    if(depositoryBalance == 0 && walletBalance == 0 ){
        return <></>
    }
    return (<div className="card m-3 col-md-3 p-0">
    <div className="card-body">
        <div className="row">
            <div className="col-md-3">
                <img src={currency.icon}
                width="42"
                height="42"
                className="flex-shrink-0" />
            </div>
            <div className="col-md-9">
                <h5 className="card-title">{currency.label}</h5>
                <h1 className="card-title">{depositoryBalance}</h1>
            </div>
        </div>
    </div>
    <div class="card-footer text-muted" style={{fontSize : ".9rem"}}>
    Wallet: {walletBalance} {currency.label}
  </div>
</div>)
}

export default CurrencyDeposit;