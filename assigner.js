/*
 * Executes the given assignment to the input expression.
 *
 * @param { string } - str the input string expression.
 * @param { Object } - assignment the assignment to apply in the form {a: 0, b:0, c:1 }.
 *
 * @returns { string } - the expression string with assignment executed.
 *
 */
const assign = (str, assignment) => {
  const charArray = str.split('');
  const res = [];
  charArray.forEach(char => {
    if(typeof assignment[char] !== 'undefined') {
      res.push(assignment[char]);
    } else res.push(char);
  });
  return res.join('');
};

exports.assign = assign;
