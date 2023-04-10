import React, { useEffect, useState } from 'react';
import { readDepositoryGStableBalance } from '../publishers/depository';
import { readWalletGStableBalance } from '../publishers/wallet';

const CurrencyDeposit = ({currency, walletData, depositoryData}) => {
    let depositoryBalance = readDepositoryGStableBalance(depositoryData,currency);
    let walletBalance = readWalletGStableBalance(walletData, currency);
    const [isAnimated, setIsAnimated] = useState(false);

    //function to handle the logic of making the value animate then back to normal.
    const handleValueAnimate = () => {
      // set the value to animation
      setIsAnimated(true);
      
      // after 1 second, set the value back to normal
      setTimeout(() => {
        setIsAnimated(false);
      }, 1500);
    }

    useEffect(() => {
      if (depositoryBalance !== 0) {
        handleValueAnimate();
      }
    }, [depositoryBalance]);



    if(depositoryBalance == 0 && walletBalance == 0 ){
        return <></>
    }

    return (<div className="card m-3 col-md-3 p-0" id={currency.label}>
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
                <h4 className="card-title"><span className={isAnimated ? 'vibrate-1' : '' }>{depositoryBalance}</span></h4>
            </div>
        </div>
    </div>
    <div className="card-footer" style={{fontSize : ".9rem"}}>
    Wallet: {walletBalance} {currency.label}
  </div>
</div>)
}

export default CurrencyDeposit;