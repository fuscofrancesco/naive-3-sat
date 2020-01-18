const { assign } = require('./assigner.js');
const { Parser } = require('./Parser.js');
const { Evaluator } = require('./Evaluator.js');

class NaiveSat {
  constructor(expression) {
    this.expression = expression;
    this.interpretations = [];
    this.satAssignment = {};
    this.satInterpretation = [];
    /* hardcode all possible assignments for three variables */
    this.assignments = [
     {a: 0, b: 0, c: 0},
     {a: 0, b: 0, c: 1},
     {a: 0, b: 1, c: 0},
     {a: 0, b: 1, c: 1},
     {a: 1, b: 0, c: 0},
     {a: 1, b: 0, c: 1},
     {a: 1, b: 1, c: 0},
     {a: 1, b: 1, c: 1}
    ];
    this.isSat = false;
    this.setInterpretations();
    this.checkSat();
  }

  /* Build all possible interpretations by computing all possible variable assignments. */
  setInterpretations() {
    this.assignments.forEach(assignment => {
      this.interpretations.push(assign(this.expression, assignment));
    });
  }

  /* Check satisfiability in naive fashion by evaluating every possible interpretation. */
  checkSat() {
    this.interpretations.forEach((expr, i) => {
      const parser = new Parser();
      const asts = parser.parse(expr);
      const res = new Evaluator(asts).evaluate();
      if(res === 1) {
        this.isSat = true;
        this.satAssignment = this.assignments[i];
        this.satInterpretation = expr;
      }
    });
  }

  /* Print util */
  printSat() {
    if(this.isSat) {
      console.log(`
        Expression ${this.expression} is satifiable.
        A possible assignment is: ${JSON.stringify(this.satAssignment)}
        Its interpretations is: ${JSON.stringify(this.satInterpretation)}
      `);
    } else console.log(`  Expression ${this.expression} is not satifiable.`);
  }
}

exports.NaiveSat = NaiveSat;
