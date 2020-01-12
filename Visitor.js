class Visitor {
  visitBinary(ctx) {
    const type = ctx.operator;
    switch (type) {
      case 'AND':
        return Number(ctx.left.visit(this) && ctx.right.visit(this));
      case 'OR':
        return Number(ctx.left.visit(this) || ctx.right.visit(this));
    }
  }

  visitUnary(ctx) {
    const type = ctx.operator
    switch (type) {
      case 'NOT':
        return Number(!(ctx.right.visit(this)));
    }
  }

  visitLiteral(ctx) {
    return ctx.value;
  }

  visitConstant(ctx) {
    return Number(ctx.value);
  }

  visitGrouping(expr) {
    const e = expr.expr;
    return e.visit(this);
  }

  visitExpressions(expressions) {
    for (const expr of expressions) {
      return expr.visit(this);
    }
  }
}

exports.Visitor = Visitor;
