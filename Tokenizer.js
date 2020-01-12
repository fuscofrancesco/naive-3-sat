const { isConst, isOp, isLit } = require('./util');

class Tokenizer {
  constructor() {
    this.tokens = [];
  }

  /*
   * Builds a tokenization for the input expression.
   * It builds an array of objects of the form:
   *
   *  {type: <type>, value:<value>}
   *
   *      type in {LIT, NUM, OP, LPAREN, RPAREN, EOF};
   *      value the actual value of the token.
   *
   * @param { string } str - the input expression string.
   * @returns { array } the list of token obejcts.
   *
   */
  tokenize(str) {
    str = str.trim();
    var s = '';
    for (var index = 0; index < str.length; index++) {
      s += str[index];
      if (isConst(s.trim())) {
        this.tokens.push({ type: 'NUM', value: s.trim() });
        s = '';
      }
      if (isLit(s.trim())) {
        this.tokens.push({ type: 'LIT', value: s.trim() });
        s = '';
      }
      if (s.trim() === '(' || s.trim() === ')') {
        s.trim() === '(' ? this.tokens.push({ type: 'LPAREN' }) : this.tokens.push({ type: 'RPAREN' });
        s = '';
      }
      if (isOp(s.trim())) {
        this.tokens.push({ type: 'OP', value: s.trim() });
        s = '';
      }
      if (index === (str.length - 1)) {
        this.tokens.push({ type: 'EOF' });
        s = '';
      }
    }
    return this.tokens;
  }
}

exports.Tokenizer = Tokenizer;
