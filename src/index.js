module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  const closingBrackets = bracketsConfig.map(([, closeBracket]) => closeBracket);
  const correctBracketsPairs = bracketsConfig.map(([openBracket, closeBracket]) => `${openBracket}${closeBracket}`);
  const stack = [];

  for (const bracket of str) {
    const stackLast = stack[stack.length - 1];
    const currentPairs = `${stackLast}${bracket}`;
    if (closingBrackets.includes(bracket) && correctBracketsPairs.includes(currentPairs)) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
}


// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));