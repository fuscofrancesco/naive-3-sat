const operators = ['&', '|', '!'];

const isOp = (v) => {
  for (var i = 0; i < operators.length; i++) {
    if (operators[i] === v) return true;
  }
  return false;
};

const isConst = (v) => {
  return !isNaN(parseInt(v)) && (parseInt(v) === 0 || parseInt(v) === 1);
};

const isLit = (v) => {
  return /[abc]{1}/g.test(v);
}

module.exports = {
  isOp: isOp,
  isLit: isLit,
  isConst: isConst
};
