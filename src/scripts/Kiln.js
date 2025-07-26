export const firePottery = (potteryObject, temperature) => {
  potteryObject.fired = true;

  temperature > 2200
    ? (potteryObject.cracked = true)
    : (potteryObject.cracked = false);

  return potteryObject;
};
