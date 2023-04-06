import Web3 from "web3";
import TransferComptroller from "../contracts/transferComptroller";

class Web3Signer {
  web3 = null;
  constructor() {
    this.web3 = new Web3();
  }

  sign = async (tx) => {
    try {
        if (window.tronLink.ready) {
            const tronWeb = window.tronLink.tronWeb;
            try {
              let tc = new TransferComptroller();
              await tc.init();

              let from  = tronWeb.address.fromHex(tx.from);
              let to  = tronWeb.address.fromHex(tx.to);              

              const txHash = await tc.getTxHash(from, to, tx.gStableId, this.web3.utils.toWei(String(tx.value)), tx.nonce); 
              const trxFromContract2 = await tc.getTx(txHash);
              console.log(trxFromContract2);
              console.log(txHash);
              

              const signedStr = await tronWeb.trx.signMessageV2(txHash);
              console.log(signedStr);

              return {txHash, signedStr};

            } catch (e) {
                console.error(e);
            }
          }
    } catch (error) {
        console.error(error);
    }
    return null;
  };

  sign2 = async (tx) => {
    //Implement as per below; have a separate Verifier Contract which might call TC in the future
    //https://stackoverflow.com/questions/62247259/validate-tron-address-using-solidity-ecrecover
    // try {
    //     if (window.tronLink.ready) {
    //         const tronWeb = window.tronLink.tronWeb;
    //         const ethers = tronWeb.utils.ethersUtils;
    //         try {
    //           debugger;

    //           let contract = await tronWeb.contract().at(contract_address);
    //           let signingKey = new ethers.SigningKey(tronWeb.defaultPrivateKey);
              
    //           let message = "This is some message";
    //           let messageBytes = ethers.toUtf8Bytes(message);
    //           let messageDigest = ethers.keccak256(messageBytes);
              
    //           let signature = signingKey.signDigest(messageDigest);
    //           let hexAddress = await contract.recoverAddr(messageDigest, signature.v, signature.r, signature.s).call();


    //           // return {txHash, signedStr};
    //           return null;
    //         } catch (e) {
    //             console.error(e);
    //         }
    //       }
    // } catch (error) {
    //     console.error(error);
    // }
    return null;
  };
  
}

export default Web3Signer;

/*



*/

// Import web3 library and set provider for the network you want to use
// const Web3 = require('web3');
// const web3 = new Web3('https://mainnet.infura.io/v3/<YOUR_PROJECT_ID>');

// // Set the contract address and ABI
// const contractAddress = '0x1234567890123456789012345678901234567890';
// const contractABI = [...]; // the ABI for the TransferComptroller2 contract

// // Set the private key for the account you will be using to interact with the contract
// const privateKey = '<YOUR_PRIVATE_KEY>';

// // Set the gas price and gas limit
// const gasPrice = web3.utils.toWei('50', 'gwei');
// const gasLimit = 300000;

// // Create an instance of the contract object
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to initiate a new transaction
// async function initiateTransaction(from, to, value) {
//   // Generate the transaction hash
//   const nonce = await web3.eth.getTransactionCount(from);
//   const txHash = web3.utils.keccak256(web3.eth.abi.encodeParameters(['address', 'address', 'uint256', 'uint256'], [from, to, value, nonce]));
  
//   // Sign the transaction hash with the private key
//   const signedTx = await web3.eth.accounts.sign(txHash, privateKey);
  
//   // Send the transaction to the contract
//   const result = await contract.methods.initiateTransaction(from, to, value).send({
//     from: from,
//     gasPrice: gasPrice,
//     gasLimit: gasLimit,
//     value: 0,
//     data: '',
//     nonce: nonce,
//     chainId: 1,
//     v: web3.utils.hexToNumber(signedTx.v),
//     r: signedTx.r,
//     s: signedTx.s
//   });

//   return result;
// }

// Function to execute a transaction
// async function executeTransaction(txHash) {
//   // Generate the signature for the transaction
//   const nonce = await web3.eth.getTransactionCount(from);
//   const tx = await contract.methods.hashTxMapping(txHash).call();
//   const messageHash = web3.utils.keccak256(web3.eth.abi.encodeParameters(['address', 'address', 'uint256', 'bytes32', 'uint256', 'uint256'], [tx.from, tx.to, tx.value, tx.txHash, tx.initiatedTime, tx.executedTime]));
//   const signedTx = await web3.eth.accounts.sign(messageHash, privateKey);

//   // Send the transaction to the contract
//   const result = await contract.methods.executeTransaction(txHash, signedTx.signature).send({
//     from: tx.from,
//     gasPrice: gasPrice,
//     gasLimit: gasLimit,
//     value: 0,
//     data: '',
//     nonce: nonce,
//     chainId: 1
//   });

//   return result;
// }
