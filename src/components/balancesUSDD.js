import React, { useEffect, useState } from 'react';
import depositoryPublisher from '../publishers/depository';
import walletPublisher from '../publishers/wallet';
import { getCurrency } from '../utils/currencies';
import { formatM, formatUSD } from '../utils/currencyFormatter';
import SwapUSDDFactory from "../utils/swapUSDDFactory";

const BalanceCardUSDD = () => {
    const [walletData, setWalletData] = useState({gStableBalances : []});
    const [depositoryData, setDepositoryData] = useState({gStableBalances : []});
    const [depositoryBalanceUSD, setDepositoryBalanceUSD] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);


    useEffect(() => {
        connectWallet();
        return () => {
            console.log("Unmounting BalanceCardUSDD");
            walletPublisher.detach(setWalletData);
            depositoryPublisher.detach(updateDepositoryData);
        }
    }, []);

    const connectWallet = async () => {
        walletPublisher.attach(setWalletData);
        depositoryPublisher.attach(updateDepositoryData);
    }

    const updateDepositoryData = (data)=> {
      setDepositoryData(data);
      read(data);
    }

    const read = async (data) => {
        let depositoryBalanceUSD = 0; 
      try {
        let swapContract = await SwapUSDDFactory.getSwapUSDD();
        for(let i = 0; i < data.gStableBalances.length; i++){
            let currency = getCurrency(data.gStableBalances[i].currencyKey);
            let conversionRatio = await swapContract.getConversion(currency.id);
            if(conversionRatio > 0){
              depositoryBalanceUSD += data.gStableBalances[i].balance/conversionRatio;
            }
        }
        setDepositoryBalanceUSD(formatUSD(depositoryBalanceUSD));
      } catch (error) {
        console.error(error);
      }
    };


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
      if (depositoryBalanceUSD !== 0) {
        handleValueAnimate();
      }
    }, [depositoryBalanceUSD]);


    return(
    <div className="col-sm text-center">
        <h3>Sorrel Balance</h3>
        <h2 className={isAnimated ? 'vibrate-sorrel-balance' : '' }>{depositoryBalanceUSD}</h2>
    </div>
    )
}

export default BalanceCardUSDD;