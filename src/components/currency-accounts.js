import React, { useEffect, useState } from 'react';
import depositoryPublisher from '../publishers/depository';
import walletPublisher from '../publishers/wallet';
import { getCurrencies } from '../utils/currencies';
import CurrencyDeposit from './currencyDeposit';


const CurrencyAccounts = () => {
    const [walletData, setWalletData] = useState({});
    const [depositoryData, setDepositoryData] = useState({gStableBalances : []});

    useEffect(() => {
        connectWallet();
        return () => {
            console.log("Unmounting CurrencyAccounts");
        }
    }, []);

    const connectWallet = async () => {
        walletPublisher.attach(setWalletData);
        depositoryPublisher.attach(setDepositoryData);
    }

    return (<>
        <div class="row d-flex justify-content-center">
            {
                getCurrencies().map(currency => <CurrencyDeposit key={currency.id} currency={currency} walletData={walletData} depositoryData={depositoryData} />)
            }
        </div>
    </>)
}

export default CurrencyAccounts;