class Binary {
  constructor(left, operator, right) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  visit(visitor) {
    return visitor.visitBinary(this);
  }
}

class Literal {
  constructor(value) {
    this.value = value;
  }

  visit(visitor) {
    return visitor.visitLiteral(this);
  }
}

class Constant {
  constructor(value) {
    this.value = value;
  }

  visit(visitor) {
    return visitor.visitConstant(this);
  }
}

class Grouping {
  constructor(expr) {
    this.expr = expr;
  }

  visit(visitor) {
    return visitor.visitGrouping(this);
  }
}

class Unary {
  constructor(operator, right) {
    this.right = right;
    this.operator = operator;
  }

  visit(visitor) {
    return visitor.visitUnary(this);
  }
}

module.exports = {
  Binary: Binary,
  Literal: Literal,
  Grouping: Grouping,
  Unary: Unary,
  Constant: Constant
};
