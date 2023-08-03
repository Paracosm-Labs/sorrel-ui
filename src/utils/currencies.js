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

import cadImg from "../img/gcad.png";
import audImg from "../img/gaud.png";
import aedImg from "../img/gaed.png";
import ghsImg from "../img/gghs.png";
import copImg from "../img/gcop.png";
import zarImg from "../img/gzar.png";
import ngnImg from "../img/gngn.png";
import kesImg from "../img/gkes.png";
import inrImg from "../img/ginr.png";
import rubImg from "../img/grub.png";
import uahImg from "../img/guah.png";
import gelImg from "../img/ggel.png";

import thbImg from "../img/gthb.png";
import idrImg from "../img/gidr.png";
import jpyImg from "../img/gjpy.png";
import chfImg from "../img/gchf.png";
import krwImg from "../img/gkrw.png";
import tryImg from "../img/gtry.png";
import ilsImg from "../img/gils.png";
import brlImg from "../img/gbrl.png";
import nprImg from "../img/gnpr.png";
import omrImg from "../img/gomr.png";
import myrImg from "../img/gmyr.png";

class Currency {
  id = 0;
  key = null;
  label = null;
  text = null;
  icon = null;
  symbol = null;
  gStableAddress = null;
  gStableContract_ = null;
  isStableCoin = false;
  constructor(
    _id,
    _key,
    _label,
    _text,
    _icon,
    _symbol,
    _gStableAddress,
    _isStableCoin = false,
  ) {
    this.id = _id;
    this.key = _key;
    this.label = _label;
    this.text = _text;
    this.icon = _icon;
    this.symbol = _symbol;
    this.gStableAddress = _gStableAddress;
    this.isStableCoin = _isStableCoin;
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
    true,
  ),
  // USDT: new Currency(
  //   1002,
  //   "USDT",
  //   "USDT",
  //   "Tether USD",
  //   usdtImg,
  //   "$" /*Currency Symbol*/,
  //   "TMWEUK2VzCKb8J1KqzYSyenWgj9MfrhZjm" /*USDTStableAddress Nile*/,
  //   true,
  // ),
  // USDC: new Currency(
  //   1003,
  //   "USDC",
  //   "USDC",
  //   "Circle USD",
  //   usdcImg,
  //   "$" /*Currency Symbol*/,
  //   "----" /*USDCStableAddress Nile*/,
  // ),
  // TUSD: new Currency(
  //   1004,
  //   "TUSD",
  //   "TUSD",
  //   "True USD",
  //   tusdImg,
  //   "$" /*Currency Symbol*/,
  //   "----" /*TUSDStableAddress Nile*/,
  // ),
  TTD: new Currency(
    1,
    "TTD",
    "gTTD",
    "Trinidad & Tobago Dollar",
    ttddImg,
    "TT$" /*Currency Symbol*/,
    "TBC1xDuFb6xQ9wpyBRD1rpFVh3KBvy9JiN" /*gStableAddress Nile*/,
  ),
  XCD: new Currency(
    2,
    "XCD",
    "gXCD",
    "Eastern Caribbean Dollar",
    xcddImg,
    "EC$" /*Currency Symbol*/,
    "TBP4eU4t6FbaqtAqp82wd4JWJJpZ8dMcFX" /*gStableAddress Nile*/,
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
  // CNH: new Currency(
  //   13,
  //   "CNH",
  //   "gCNH",
  //   "Chinese Offshore Yuan",
  //   cnhImg,
  //   "¥" /*Currency Symbol*/,
  //   "TPhaYXi9Vsiy8mHB3XmVhdw81oK3mTh22j" /*gStableAddress Nile*/,
  // ),
  // HKD: new Currency(
  //   14,
  //   "HKD",
  //   "gHKD",
  //   "Hong Kong Dollar",
  //   hkdImg,
  //   "HK$" /*Currency Symbol*/,
  //   "TMtFngpiqqMbD3bBr4Q52H5ode8htZYUVx" /*gStableAddress Nile*/,
  // ),
//   SGD: new Currency(
//     15,
//     "SGD",
//     "gSGD",
//     "Singaporean Dollar",
//     sgdImg,
//     "SG$" /*Currency Symbol*/,
//     "TCgmFarW3w4ggbYcnShnSTfA1xF7YWmuxB" /*gStableAddress Nile*/,
//   ),
//   THB: new Currency(
//     16,
//     "THB",
//     "gTHB",
//     "Thai Baht",
//     thbImg,
//     "฿" /*Currency Symbol*/,
//     "TB6FLKkJCzWrLoXUf59DXqrx2yJeFyybuZ" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   IDR: new Currency(
//     17,
//     "IDR",
//     "gIDR",
//     "Indonesian Rupee",
//     idrImg,
//     "Rp$" /*Currency Symbol*/,
//     "TZDGv8KXKkuWyW42y1R5LowCDRNS73PNYY" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   INR: new Currency(
//     18,
//     "INR",
//     "gINR",
//     "Indian Rupee",
//     inrImg,
//     "₹" /*Currency Symbol*/,
//     "TNEkYuizmQmtRebkoVh6X3b7ABMGXxuSbA" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   CAD: new Currency(
//     19,
//     "CAD",
//     "gCAD",
//     "Canadian Dollar",
//     cadImg,
//     "CA$" /*Currency Symbol*/,
//     "TSxJPmq2E3x8dkjKH3WXHiP98LsL8Q8WtJ" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   AUD: new Currency(
//     20,
//     "AUD",
//     "gAUD",
//     "Australian Dollar",
//     audImg,
//     "A$" /*Currency Symbol*/,
//     "TSZNuSom4zZoqysjyRJS5KfuycSPYhrrqG" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   JPY: new Currency(
//     21,
//     "JPY",
//     "gJPY",
//     "Japanese Yen",
//     jpyImg,
//     "¥" /*Currency Symbol*/,
//     "TF94kdQRB7iAtKBDHKZB722zGw4x5BkWqp" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   CHF: new Currency(
//     23,
//     "CHF",
//     "gCHF",
//     "Swiss Franc",
//     chfImg,
//     "₣" /*Currency Symbol*/,
//     "THDmfApaF51W2Kc88hPF9WohBV5PkuRDC2" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   KRW: new Currency(
//     24,
//     "KRW",
//     "gKRW",
//     "South Korean Won",
//     krwImg,
//     "₩" /*Currency Symbol*/,
//     "TLf8Ff4Qu1jMTt9SmA6W4XiraqSgtstBwU" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   TRY: new Currency(
//     26,
//     "TRY",
//     "gTRY",
//     "Turkish Lira",
//     tryImg,
//     "₺" /*Currency Symbol*/,
//     "TLj7Vi5jXTqczEwDPXF91qs7bz5a4M9EcF" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   ILS: new Currency(
//     27,
//     "ILS",
//     "gILS",
//     "Israeli Shekel",
//     ilsImg,
//     "₪" /*Currency Symbol*/,
//     "THqsYnbi1aTRrscQfht3LUN1RU1kPtMHGT" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   ZAR: new Currency(
//     30,
//     "ZAR",
//     "gZAR",
//     "South African Rand",
//     zarImg,
//     "R" /*Currency Symbol*/,
//     "TY2h18u8w7MDYZPJTqqzWbZx64YYqSY71y" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   NGN: new Currency(
//     31,
//     "NGN",
//     "gNGN",
//     "Nigerian Naira",
//     ngnImg,
//     "₦" /*Currency Symbol*/,
//     "TSPYHAkk1dGSrzbePavZpAz61EnUtYTFYn" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   KES: new Currency(
//     32,
//     "KES",
//     "gKES",
//     "Kenyan Shilling",
//     kesImg,
//     "KSh" /*Currency Symbol*/,
//     "TFtHWkmp6snaJk6AuEsUATLUdGjFdfhcBu" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   RUB: new Currency(
//     33,
//     "RUB",
//     "gRUB",
//     "Russian Ruble",
//     rubImg,
//     "₽" /*Currency Symbol*/,
//     "TUbfqwY9hoiNaeQufPfvz5FXD7w2jGLzQX" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   UAH: new Currency(
//     34,
//     "UAH",
//     "gUAH",
//     "Ukranian Hyrvnia",
//     uahImg,
//     "₴" /*Currency Symbol*/,
//     "TLmBGyZjkghA4CwM7qjKUpS6PyHmeSU3hb" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   GEL: new Currency(
//     35,
//     "GEL",
//     "gGEL",
//     "Georgian Lari",
//     gelImg,
//     "₾" /*Currency Symbol*/,
//     "TRJLh5ihgREmvMyScQQyW75F4zvUAsWSWD" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   AED: new Currency(
//     40,
//     "AED",
//     "gAED",
//     "UAE Dirham",
//     aedImg,
//     "د.إ" /*Currency Symbol*/,
//     "TM9hBrFdzRUai5gfm1LvQqMAckNoNmYvAf" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   GHS: new Currency(
//     41,
//     "GHS",
//     "gGHS",
//     "Ghanaian Cedi",
//     ghsImg,
//     "GH₵" /*Currency Symbol*/,
//     "TNYsoACVMVWwSPpj358HAu8EBEc5quzW3W" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   COP: new Currency(
//     44,
//     "COP",
//     "gCOP",
//     "Colombian Peso",
//     copImg,
//     "$" /*Currency Symbol*/,
//     "TXnWSBPDgdb1DY4AviLYzBs6He69kyzTrd" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   BRL: new Currency(
//     45,
//     "BRL",
//     "gBRL",
//     "Brazillian Real",
//     brlImg,
//     "R$" /*Currency Symbol*/,
//     "TXx98qV2e7cQ2KFVavjjkHSChi9yrr7CJL" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   NPR: new Currency(
//     46,
//     "NPR",
//     "gNPR",
//     "Nepali Rupee",
//     nprImg,
//     "रू" /*Currency Symbol*/,
//     "TZ5Ro1dwnf1zqPDSnYkUK9Gk6BAu9aZoB5" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   OMR: new Currency(
//     47,
//     "OMR",
//     "gOMR",
//     "Omani Rial",
//     omrImg,
//     "ر.ع." /*Currency Symbol*/,
//     "TGobH9QMavFP8MJcGoNXBMAADQVgBE5Zuz" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   MYR: new Currency(
//     48,
//     "MYR",
//     "gMYR",
//     "Malaysian Ringgit",
//     myrImg,
//     "RM" /*Currency Symbol*/,
//     "TF6Ep8972xWmZc2qHXAnJjvxiLY8vnxHPb" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),

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
