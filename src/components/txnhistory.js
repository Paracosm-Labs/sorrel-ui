import React, { useEffect, useState } from 'react';
import TransferComptroller from "../contracts/transferComptroller";


const TxnHistory = () => {
    const [trxs, setTrxs] = useState([]);
    useEffect(() => {
        readTxns();
        return () => {
          console.log("Unmounting TxnHistory");
        };
    }, []);

    const readTxns = async () => {
        let trxs = [];
        let tc = new TransferComptroller();
        await tc.init();
        debugger;
        trxs = await tc.getTransactions();
    }


  return (
    <>
        <div class="row mt-5 transaction-history">
            <h2 class="text-sorrel-green">Transaction History</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transaction</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trxs.map((trx,index) => {
                            return (<tr key={index}>
                                <td>{trx.from}</td>
                                <td>{trx.from}</td>
                                <td>{trx.from}</td>
                                <td>{trx.from}</td>
                                <td>{trx.from}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default TxnHistory;
