function calculateNumber(type, a, b) {
  const ax = Math.round(a);
  const bx = Math.round(b);

  if (type === 'SUBTRACT') {
    return ax - bx;
  }

  if (type === 'DIVIDE') {
    if (bx === 0) {
      return 'Error';
    }
    return ax / bx;
  }

  return ax + bx;
}

module.exports = calculateNumber;
