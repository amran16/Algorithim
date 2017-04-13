function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    character, bracePosition;

  for(var i = 0; i < string.length; i++) {
    character = string[i];
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(parenthesesAreBalanced("{}[]()"));
console.log(parenthesesAreBalanced("{[}]"));
