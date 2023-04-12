import React, { useEffect, useState } from 'react';
import { getCurrencyById } from '../utils/currencies';
import { getDate } from '../utils/date';
import Web3Signer from '../utils/web3Signer';
import axios from 'axios';
import serverURL from '../utils/server';
import ConvertComptroller from '../contracts/convertComptroller';


const ConvertHistoryItem = ({tx}) => {
  let hodler  = window.tronLink.tronWeb.address.fromHex(tx.hodler);
    const confirm = async () => {
        let signer = new Web3Signer();
        let sig = await signer.signConvert(tx);
        if(sig){
          axios.post(`${serverURL}/exc/execute`,{hodler, fromId : tx.fromId, fromTokens : tx.fromTokens, toId: tx.toId, nonce : tx.nonce, txHash : sig.txHash, sig : sig.signedStr})
          .then(async(response) => {
            console.log(response);
          })``
          .catch((error) => {
            console.log(error);
          }); 
        }
    } 

    const cancel = async () => {
      debugger;
      let cc = new ConvertComptroller();
      await cc.init();
      await cc.cancel(hodler, tx.fromId, tx.fromTokens, tx.toId, tx.nonce);
    } 

    const getStatusJSX = (tx) => {
      switch (tx.status) {
        case 1: {
          let returnJSX = (<>
          <button type="button" className="btn btn-convert-confirm btn-sm" style={{fontSize : ".8rem"}} onClick={confirm}>Confirm</button>
            <button type="button" className="btn btn-convert-cancel btn-sm" style={{fontSize : ".8rem"}}  onClick={cancel}>Cancel</button>
            </>)
            return returnJSX;
           }
         case 2:
          return (<><span className='text-sorrel-normal'>Cancelled</span></>)
          case 33:
            return (<><span className='text-danger'>Not enough balance!</span></>)
        default:
          return (<><span className='text-sorrel-green'>{getDate(tx.executedTime)}</span></>)
      }
    }

    return (<tr style={{fontSize : ".9rem"}}>
                <td>Convert <img src={getCurrencyById(tx.fromId).icon}
                width="22"
                height="22"
                className="flex-shrink-0 mx-2" /> {tx.fromTokens} <span className='mx-1'>to</span>
                <img src={getCurrencyById(tx.toId).icon}
                width="22"
                height="22"
                className="flex-shrink-0 mx-2" /> 
                </td>                
                <td>{getDate(tx.initiatedTime)}</td>
                <td>{getStatusJSX(tx)}</td>
            </tr>)
};

export default ConvertHistoryItem;
