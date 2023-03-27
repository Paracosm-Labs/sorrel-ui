import React from 'react';
import { readDepositoryGStableBalance } from '../publishers/depository';
import { readWalletGStableBalance } from '../publishers/wallet';

const CurrencyDeposit = ({currency, walletData, depositoryData}) => {
    let depositoryBalance = readDepositoryGStableBalance(depositoryData,currency);
    let walletBalance = readWalletGStableBalance(walletData, currency);
    if(depositoryBalance == 0 && walletBalance == 0 ){
        return <></>
    }
    return (<div class="card m-3 col-md-3">
    <div class="card-body">
        <div class="row">
            <div class="col-md-3">
                <img src={currency.icon}
                width="42"
                height="42"
                class="flex-shrink-0" />
            </div>
            <div class="col-md-9">
                <h5 class="card-title">{currency.label}</h5>
                <h6 class="card-subtitle mb-2">Sorrel: {depositoryBalance}</h6>
                <h6 class="card-subtitle mb-2">Wallet: {walletBalance}</h6>
            </div>
        </div>
    </div>
</div>)
}

export default CurrencyDeposit;