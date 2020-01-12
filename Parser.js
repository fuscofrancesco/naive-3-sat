const { Tokenizer } = require('./Tokenizer');
const { Binary, Literal, Grouping, Constant, Unary } = require('./ast');

class Parser {
  constructor() {
    this.index = 0;
    this.tokens = null;
    this.expr = [];
  }

  advance() {
    this.index++;
  }

  peep() {
    return this.tokens[this.index + 1];
  }

  current() {
    return this.tokens[this.index];
  }

  /*
   * Builds up the evaluation tree staring from expression string.
   *
   * The resulting tree has a recursive structure of the form:
   * 
   *    + expression class <- either binary, unary, literal, constant, grouping
   *    |
   *    +-- operator|value <- either &, |, ! in case of operator or the actual value in case of constant or literal
   *    +-- left <- left operand (which itself can be an expression)
   *    +-- rigth <- rigth operand (which itself can be an expression)
   *
   */
  parse(str) {
    const tokenizer = new Tokenizer();
    this.tokens = tokenizer.tokenize(str);
    while(this.current().type !== 'EOF') {
      const expr = this.and();
      if (expr)
        this.expr.push(expr);
    }
    return this.expr;
  }

  and() {
    const left = this.or();
    if(this.current().value === '&') {
      this.advance();
      return new Binary(left, 'AND', this.or());
    }
    return left;
  }

  or() {
    const left = this.primary();
    if(this.current().value === '|') {
      this.advance();
      return new Binary(left, 'OR', this.primary());
    }
    return left;
  }

  primary() {
    if(this.current().value === '!' && this.peep().type === 'NUM') {
      this.advance();
      const atom = new Unary('NOT', new Constant(this.current().value));
      this.advance();
      return atom;
    }

    if(this.current().value === '!' && this.peep().type === 'LIT') {
      this.advance();
      const atom = new Unary('NOT', new Literal(this.current().value));
      this.advance();
      return atom;
    }

    if(this.current().value === '!' && this.peep().type === 'LPAREN') {
      this.advance();
      this.advance();
      const expr = this.and();
      const atom = new Unary('NOT', new Grouping(expr));
      this.advance();
      return atom;
    }

    const curr = this.current()
    this.advance()
    if(curr.type === 'NUM')
      return new Constant(curr.value);
    if(curr.type === 'LIT')
      return new Literal(curr.value);
    if(curr.type === 'LPAREN') {
      const expr = this.and();
      this.advance();
      return new Grouping(expr);
    }
  }
}

exports.Parser = Parser;
