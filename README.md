# 3-SAT - Naive Solver

This repo provides a naive solver for the [3-Sat problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability).

The naive solution is based on the following steps:

1. generate all possible [interpretations](https://en.wikipedia.org/wiki/Interpretation_(logic)) of the expression
2. check if any of the interpretations makes the expression satisfiable

The expression parser, the abstract synthax tree builder and the evaluator are widely inspired by [this repo](https://github.com/philipszdavido/expr_parser_js).

## Usage

To formulate the expression, you can use:

- the variables: 'a', 'b' and 'c';
- the operations: '&' (and), '|' (or), and '!' (not);
- the parenthesis: '(', ')'

### Option 1: online

Using runkit. Simply click [here](https://npm.runkit.com/naive-3-sat) and copy/paste this code:
```javascript
const NaiveSat = require("naive-3-sat");

const expr = '((!a & b) | (b | c)) & (c & !a)';

const naiveSat = new NaiveSat(expr);

naiveSat.printSat();

```

### Option 2: use npm

You will need [node JS](https://nodejs.org/en/) installed.

1. Install the library:
```sh
npm install naive-3-sat
```
2. Run the below command:
```sh
node node_modules/naive-3-sat/index.js
>.sat (!a & b) | (c & !c)

        Expression (!a & b) | (c & !c) is satifiable.
        A possible assignment is: {"a":0,"b":1,"c":1}
        Its interpretations is: "(!0 & 1) | (1 & !1)"
```

### Option 3: clone this repo

You will need [node JS](https://nodejs.org/en/) installed.

You can clone this repo then run:
```sh
node index.js
>.sat (!a & b) | (c & !c)

        Expression (!a & b) | (c & !c) is satifiable.
        A possible assignment is: {"a":0,"b":1,"c":1}
        Its interpretations is: "(!0 & 1) | (1 & !1)"
```
