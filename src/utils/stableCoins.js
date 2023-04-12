export const USDDAddress = "THJ6CYd8TyNzHFrdLTYQ1iAAZDrf5sEsZU";
export const USDTAddress = "TMWEUK2VzCKb8J1KqzYSyenWgj9MfrhZjm";

export const StableCoinType = {
  USDD: { type: "USDD", value: 1, label: "USDD", icon: "usdd.png" },
  USDT: { type: "USDT", value: 2, label: "USDT", icon: "usdt.png" },
};

export const getStableCoinValues = () => {
  return Object.values(StableCoinType);
};

export const getStableCoin = (stableCoinType) => {
  return StableCoinType[stableCoinType];
};
