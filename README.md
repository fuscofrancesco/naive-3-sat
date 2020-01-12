# 3-SAT - Naive Solver

This repo provides a naive solver for the [3-Sat problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability).

The naive solution is based on the following steps:

1. generate all possible [interpretations](https://en.wikipedia.org/wiki/Interpretation_(logic)) of the expression
2. check if any of the interpretations makes the expression satisfiable

The expression parser, the abstract synthax tree builder and the evaluator are widely inspired by [this repo](https://github.com/philipszdavido/expr_parser_js).

## Usage

You will need [node JS](https://nodejs.org/en/) installed.

To formulate the expression, you can use:

- the variables: 'a', 'b' and 'c';
- the operations: '&' (and), '|' (or), and '!' (not);
- the parenthesis: '(', ')'

### Option 1: clone this repo

You can clone this repo then run:
```sh
node .
>.sat (!a & b) | (c & !c)

        Expression (!a & b) | (c & !c) is satifiable.
        A possible assignment is: {"a":0,"b":1,"c":1}
        Its interpretations is: "(!0 & 1) | (1 & !1)"
```

### Option 2: use npm

1. Install the library:
```sh
npm install naive-3-sat
```
2. Create a file named index.js containing the below line:
```javascript
const nt = require('naive-3-sat');
```
3. Simply run:
```sh
node .
```


