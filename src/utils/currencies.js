import gStableContract from "../contracts/gStableContract";


import usddImg from "../img/usdd.png";
import usdtImg from "../img/usdt.png";
import usdcImg from "../img/usdc.png";
import tusdImg from "../img/tusd.png";

import ttddImg from "../img/gttd.png";
import xcddImg from "../img/gxcd.png";
import bbddImg from "../img/gbbd.png";
import jmddImg from "../img/gjmd.png";
import awgdImg from "../img/gawg.png";
import dopImg from "../img/gdop.png";
import bsdImg from "../img/gbsd.png";
import kydImg from "../img/gkyd.png";
import cupImg from "../img/gcup.png";
import htgImg from "../img/ghtg.png";
import eurImg from "../img/geur.png";
import gbpImg from "../img/ggbp.png";
import cnhImg from "../img/gcnh.png";
import hkdImg from "../img/ghkd.png";
import sgdImg from "../img/gsgd.png";

class Currency {
  id = 0;
  key = null;
  label = null;
  text = null;
  icon = null;
  symbol = null;
  gStableAddress = null;
  gStableContract_ = null;
  constructor(
    _id,
    _key,
    _label,
    _text,
    _icon,
    _symbol,
    _gStableAddress,
  ) {
    this.id = _id;
    this.key = _key;
    this.label = _label;
    this.text = _text;
    this.icon = _icon;
    this.symbol = _symbol;
    this.gStableAddress = _gStableAddress;
  }
  gStableContract = async () => {
    if (!this.gStableContract_) {
      console.log("initializing gStableContract");
      const contract_ = new gStableContract(this.gStableAddress);
      this.gStableContract_ = await contract_.init();
    }
    return this.gStableContract_;
  };
}

const CurrencyList = {
  USDD: new Currency(
    1001,
    "USDD",
    "USDD",
    "Decentralized USD",
    usddImg,
     "$" /*Currency Symbol*/,
    "THJ6CYd8TyNzHFrdLTYQ1iAAZDrf5sEsZU" /*USDDStableAddress Nile*/,
  ),
  USDT: new Currency(
    1002,
    "USDT",
    "USDT",
    "Tether USD",
    usdtImg,
    "$" /*Currency Symbol*/,
    "TMWEUK2VzCKb8J1KqzYSyenWgj9MfrhZjm" /*USDTStableAddress Nile*/,
  ),
  // USDC: new Currency(
  //   1003,
  //   "USDC",
  //   "USDC",
  //   "Circle USD",
  //   usdcImg,
  //   "$" /*Currency Symbol*/,
  //   "----" /*gStableAddress Nile*/,
  // ),
  // TUSD: new Currency(
  //   1004,
  //   "TUSD",
  //   "TUSD",
  //   "True USD",
  //   tusdImg,
  //   "$" /*Currency Symbol*/,
  //   "----" /*gStableAddress Nile*/,
  // ),
  TTD: new Currency(
    1,
    "TTD",
    "gTTD",
    "Trinidad & Tobago Dollar",
    ttddImg,
    "TT$" /*Currency Symbol*/,
    "TEhTXahLuKVgnBX1yWVmLaykLGeEZ8yq9K" /*gStableAddress Nile*/,
  ),
  XCD: new Currency(
    2,
    "XCD",
    "gXCD",
    "Eastern Caribbean Dollar",
    xcddImg,
    "EC$" /*Currency Symbol*/,
    "TXTirC6WWYs7csuqUQuiQvKzrkSgZgU7x3" /*gStableAddress Nile*/,
  ),
  // BBD: new Currency(
  //   3,
  //   "BBD",
  //   "gBBD",
  //   "Barbadian Dollar",
  //   bbddImg,
  //   "BB$" /*Currency Symbol*/,
  //   "TNpqgkKcaKa7vZH5GC4nxSL6FMjMfdCRSn" /*gStableAddress Nile*/,
  // ),
  // JMD: new Currency(
  //   4,
  //   "JMD",
  //   "gJMD",
  //   "Jamaican Dollar",
  //   jmddImg,
  //   "JM$" /*Currency Symbol*/,
  //   "TBeTCPQFXjgVk1xKpFw5b24MsgCkvLdBnk" /*gStableAddress Nile*/,
  // ),
  // AWG: new Currency(
  //   5,
  //   "AWG",
  //   "gAWG",
  //   "Aruban Florin",
  //   awgdImg,
  //   "ƒ" /*Currency Symbol*/,
  //   "TQT5dFRmWCR2mJNpSrypVUfq4Rar4WSe8Y" /*gStableAddress Nile*/,
  // ),
  // BSD: new Currency(
  //   6,
  //   "BSD",
  //   "gBSD",
  //   "Bahamian Dollar",
  //   bsdImg,
  //   "B$" /*Currency Symbol*/,
  //   "TTQTdMtxiastmhKU8CkgWomYzwhBEfnNuX" /*gStableAddress Nile*/,
  // ),
  // KYD: new Currency(
  //   7,
  //   "KYD",
  //   "gKYD",
  //   "Cayman Islands Dollar",
  //   kydImg,
  //   "CI$" /*Currency Symbol*/,
  //   "TTWSqDo9g5K86G5xQVLhBEzWwgy8tgURHQ" /*gStableAddress Nile*/,
  // ),
  // DOP: new Currency(
  //   8,
  //   "DOP",
  //   "gDOP",
  //   "Dominican Peso",
  //   dopImg,
  //   "₱" /*Currency Symbol*/,
  //   "TUpoXcrgPMMzvvzGdbtWwzcdU39D27ab8w" /*gStableAddress Nile*/,
  // ),
  // CUP: new Currency(
  //   9,
  //   "CUP",
  //   "gCUP",
  //   "Cuban Peso",
  //   cupImg,
  //   "₱" /*Currency Symbol*/,
  //   "TUMPPfnX5jnKvJbh8CtDAeUKTUXSv9Bhkx" /*gStableAddress Nile*/,
  // ),
  // HTG: new Currency(
  //   10,
  //   "HTG",
  //   "gHTG",
  //   "Haitian Gourde",
  //   htgImg,
  //   "G₵" /*Currency Symbol*/,
  //   "THyUafLhw1w4bJzSvH2BDGA4ph5iRaqeyV" /*gStableAddress Nile*/,
  // ),
  // EUR: new Currency(
  //   11,
  //   "EUR",
  //   "gEUR",
  //   "Euro",
  //   eurImg,
  //   "€" /*Currency Symbol*/,
  //   "TNLtM7F696Qjcc7Lj5krBqCAoXNzS2enQH" /*gStableAddress Nile*/,
  // ),
  // GBP: new Currency(
  //   12,
  //   "GBP",
  //   "gGBP",
  //   "British Pound",
  //   gbpImg,
  //   "£" /*Currency Symbol*/,
  //   "TVnCkaJUjrek5H2xcVq9azLMVBLiyUAnvx" /*gStableAddress Nile*/,
  // ),
  CNH: new Currency(
    13,
    "CNH",
    "gCNH",
    "Chinese Offshore Yuan",
    cnhImg,
    "¥" /*Currency Symbol*/,
    "TPhaYXi9Vsiy8mHB3XmVhdw81oK3mTh22j" /*gStableAddress Nile*/,
  ),
  HKD: new Currency(
    14,
    "HKD",
    "gHKD",
    "Hong Kong Dollar",
    hkdImg,
    "HK$" /*Currency Symbol*/,
    "TMtFngpiqqMbD3bBr4Q52H5ode8htZYUVx" /*gStableAddress Nile*/,
  ),
  // SGD: new Currency(
  //   15,
  //   "SGD",
  //   "gSGD",
  //   "Singaporean Dollar",
  //   sgdImg,
  //   "SG$" /*Currency Symbol*/,
  //   "TCgmFarW3w4ggbYcnShnSTfA1xF7YWmuxB" /*gStableAddress Nile*/,
  // ),

};

export const getCurrencies = () => {
  return Object.values(CurrencyList);
};

export const getCurrency = (currKey) => {
  return CurrencyList[currKey];
};

export const getCurrencyById = (id) => {
  let list = getCurrencies().filter(curr => curr.id == id);
  if(list.length > 0){
    return list[0];
  }
  return null;
};
