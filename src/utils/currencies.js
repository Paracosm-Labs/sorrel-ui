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

class Currency {
  id = 0;
  key = null;
  label = null;
  text = null;
  icon = null;
  gStableAddress = null;
  gStableContract_ = null;
  constructor(
    _id,
    _key,
    _label,
    _text,
    _icon,
    _gStableAddress,
  ) {
    this.id = _id;
    this.key = _key;
    this.label = _label;
    this.text = _text;
    this.icon = _icon;
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
    "THJ6CYd8TyNzHFrdLTYQ1iAAZDrf5sEsZU" /*gStableAddress*/,
  ),
  // USDT: new Currency(
  //   1002,
  //   "USDT",
  //   "USDT",
  //   "Tether USD",
  //   usdtImg,
  //   "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj" /*gStableAddress*/,
  // ),
  // USDC: new Currency(
  //   1003,
  //   "USDC",
  //   "USDC",
  //   "Circle USD",
  //   usdcImg,
  //   "THJ6CYd8TyNzHFrdLTYQ1iAAZDrf5sEsZU" /*gStableAddress*/,
  // ),
  // TUSD: new Currency(
  //   1004,
  //   "TUSD",
  //   "TUSD",
  //   "True USD",
  //   tusdImg,
  //   "THJ6CYd8TyNzHFrdLTYQ1iAAZDrf5sEsZU" /*gStableAddress*/,
  // ),
  TTDD: new Currency(
    1,
    "TTDD",
    "gTTD",
    "Trinidad & Tobago Dollar",
    ttddImg,
    "TK95YwrjoB1Ui7jwjAPfjHiw2HuSm7ebS4" /*gStableAddress*/,
  ),
  XCD: new Currency(
    2,
    "XCD",
    "gXCD",
    "Eastern Caribbean Dollar",
    xcddImg,
    "TXTirC6WWYs7csuqUQuiQvKzrkSgZgU7x3" /*gStableAddress*/,
  ),
  BBD: new Currency(
    3,
    "BBD",
    "gBBD",
    "Barbadian Dollar",
    bbddImg,
    "TWXi48ddESfk6wFjNXK4XwW1yvRMPSSnSB" /*gStableAddress*/,
  ),
  // JMD: new Currency(
  //   4,
  //   "JMD",
  //   "gJMD",
  //   "Jamaican Dollar",
  //   jmddImg,
  //   "THVTLRiwWTUUeYMz1nSxdb1BVbUWmEzy3c" /*gStableAddress*/,
  // ),
  // AWG: new Currency(
  //   5,
  //   "AWG",
  //   "gAWG",
  //   "Aruban Florin",
  //   awgdImg,
  //   "TP7RNcfoSkmTSA5ZSdKeXfUnBb1KoU51VY" /*gStableAddress*/,
  // ),
  // BSD: new Currency(
  //   6,
  //   "BSD",
  //   "gBSD",
  //   "Bahamian Dollar",
  //   bsdImg,
  //   "TRN9LBmG1N3Vue1eidkn1s3bBFyAAabyC9" /*gStableAddress*/,
  // ),
  // KYD: new Currency(
  //   7,
  //   "KYD",
  //   "gKYD",
  //   "Cayman Islands Dollar",
  //   kydImg,
  //   "TRpvxootqXTB5omn919BGFEiiAqBjGPqzt" /*gStableAddress*/,
  // ),
  // DOP: new Currency(
  //   8,
  //   "DOP",
  //   "gDOP",
  //   "Dominican Peso",
  //   dopImg,
  //   "TQkp7SKM6UEYNJmQQfC7YeYYUdsnkq9Xb5" /*gStableAddress*/,
  // ),
  // CUP: new Currency(
  //   9,
  //   "CUP",
  //   "gCUP",
  //   "Cuban Peso",
  //   cupImg,
  //   "TNsZegdPzUWKbBQ52o7ruF5gGe5NqyALCQ" /*gStableAddress*/,
  // ),
  // HTG: new Currency(
  //   10,
  //   "HTG",
  //   "gHTG",
  //   "Haitian Gourde",
  //   htgImg,
  //   "TMuABgZr5rStDa639CKaxEoNc1sVEgEoKF" /*gStableAddress*/,
  // ),
  // EUR: new Currency(
  //   11,
  //   "EUR",
  //   "gEUR",
  //   "Euro",
  //   eurImg,
  //   "TBWqK2pQXxRxmei95Xo6hA35YNzkdGuynR" /*gStableAddress*/,
  // ),
  // GBP: new Currency(
  //   12,
  //   "GBP",
  //   "gGBP",
  //   "British Pound",
  //   gbpImg,
  //   "TJBhh6JPtBoDWPQqdRXzR27SEJooBvfJ7r" /*gStableAddress*/,
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
