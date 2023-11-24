const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let ax = Number(a);
  let bx = Number(b);

  if (Number.isNaN(ax) || Number.isNaN(bx))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  ax = Math.round(ax);
  bx = Math.round(bx);

  switch (type) {
    case SUM:
      return ax + bx;
    case SUBTRACT:
      return ax - bx;
    case DIVIDE:
      if (bx === 0) return 'ERROR';
      const quotient = ax / bx;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
