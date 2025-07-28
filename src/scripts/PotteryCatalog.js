let potteryToSell = [];

export const toSellOrNotToSell = (potteryObject) => {
  if (potteryObject.weight >= 6 && potteryObject.cracked !== true) {
    potteryObject.price = 40;
  } else {
    potteryObject.price = 20;
  }

  potteryToSell.push(potteryObject);

  return potteryObject;
};

export const usePottery = () => {
  return structuredClone(potteryToSell);
};
