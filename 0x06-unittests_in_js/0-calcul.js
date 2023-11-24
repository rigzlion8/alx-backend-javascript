const calculateNumber = (a, b=0) => {
  const ax = Number(a);
  const bx = Number(b);

  return Math.round(ax) + Math.round(bx);
};
module.exports = calculateNumber;
