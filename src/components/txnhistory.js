import React, { useEffect, useState } from 'react';
import transactionPublisher from '../publishers/txns';
import TxnHistoryItem from './txnhistoryitem';


const TxnHistory = () => {
    const [trxs, setTrxs] = useState([]);
    useEffect(() => {
        transactionPublisher.attach(updateTrxs);
        return () => {
            transactionPublisher.detach(updateTrxs);
            console.log("Unmounting TxnHistory");
        };
    }, []);

    const updateTrxs = (trxs) => {
        if(trxs && Array.isArray(trxs)){
            setTrxs(trxs);
        } else {
            console.error(`trxs ${trxs}`);
        }

    } 
  return (
    <>
        <div className="row mt-5 transaction-history">
            <h4 className="text-sorrel-green">Transfers</h4>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>gStable</th>
                            <th>Amount</th>
                            <th>Initiated</th>
                            <th>Executed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trxs.map((trx,index) => <TxnHistoryItem key={index} tx={trx}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default TxnHistory;
