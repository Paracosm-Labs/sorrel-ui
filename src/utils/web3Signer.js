import Web3 from "web3";

class Web3Signer {
  web3 = null;
  constructor() {
    this.web3 = new Web3();
  }

  sign = async (trx) => {
    try {
        if (window.tronLink.ready) {
            const tronweb = window.tronLink.tronWeb;
            try {
              const message =  this.web3.utils.toHex(JSON.stringify(trx)); //"0x1e"; // any hex string
              const signedString = await tronweb.trx.sign(message);
              console.log(signedString);
              return signedString;
            } catch (e) {
                console.error(e);
            }
          }
    } catch (error) {
        console.error(error);
    }
    return null;
  };
  
}

export default Web3Signer;