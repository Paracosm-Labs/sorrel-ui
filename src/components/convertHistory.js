import React, { useEffect, useState } from 'react';
import convertPublisher from '../publishers/convert';
import ConvertHistoryItem from './convertHistoryItem';


const ConvertHistory = () => {
    const [trxs, setTrxs] = useState([]);
    useEffect(() => {
        convertPublisher.attach(updateTrxs);
        return () => {
            convertPublisher.detach(updateTrxs);
            console.log("Unmounting ConvertHistory");
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
        <div className="row mt-2 transaction-history">
            <h4 className="text-sorrel-green">Conversions</h4>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {trxs.map((trx,index) => <ConvertHistoryItem key={index} tx={trx}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default ConvertHistory;
