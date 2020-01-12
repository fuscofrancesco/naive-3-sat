const { NaiveSat } = require('./NaiveSat');
const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });

replServer.defineCommand('sat', {
  help: 'try typing: .sat <expr>, where <expr> is an expression for which to calculate satisfibility, ex. ((!a & b) | (b | c)) & (c & !a)',
  action(expr) {
    this.clearBufferedCommand();
    const naiveSat = new NaiveSat(expr);
    if(naiveSat.isSat) {
      console.log(`
        Expression ${expr} is satifiable.
        A possible assignment is: ${JSON.stringify(naiveSat.satAssignment)}
        Its interpretations is: ${JSON.stringify(naiveSat.satInterpretation)}
      `);
    } else console.log(`  Expression ${expr} is not satifiable.`);
    this.displayPrompt();
  }
});

replServer.on('exit', () => {
  console.log('exiting program...');
  process.exit();
});
