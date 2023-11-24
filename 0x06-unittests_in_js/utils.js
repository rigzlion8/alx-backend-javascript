const Utils = {
  isNegZero(n) {
    const num = Number(n);
    return num === 0 && 1 / num === -Infinity;
  },
  calculateNumber(type, a, b = 0) {
    let ax = Number(a);
    let bx = Number(b);

    if (Number.isNaN(ax) || Number.isNaN(bx))
      throw TypeError('Parameters must be numbers or able to coerce to number');

    ax = Math.round(ax);
    bx = Math.round(bx);

    let quotient;

    switch (type) {
      case 'SUM':
        return ax + bx;
      case 'SUBTRACT':
        return ax - bx;
      case 'DIVIDE':
        if (bx === 0) return 'ERROR';
        quotient = ax / bx;
        return this.isNegZero(quotient) ? 0 : quotient;
      default:
        throw Error(
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
        );
    }
  }
};

module.exports = Utils;
