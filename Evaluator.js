const { Visitor } = require('./Visitor');

class Evaluator {
  constructor(asts) {
    this.asts = asts;
    this.visitor = new Visitor();
  }

  /*
   * Recursively visits the evaluation tree and computes the result of the evaluation.
   *
   */
  evaluate() {
    return this.visitor.visitExpressions(this.asts);
  }
}

exports.Evaluator = Evaluator;
