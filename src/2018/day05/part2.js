const string = require('../../util/string');

const collapse = input => string.replaceAll(
  input,
  /(Aa|Bb|Cc|Dd|Ee|Ff|Gg|Hh|Ii|Jj|Kk|Ll|Mm|Nn|Oo|Pp|Qq|Rr|Ss|Tt|Uu|Vv|Ww|Xx|Yy|Zz|aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ)/g,
  ''
).length;

module.exports = input => {
  let shortest = input.length;
  for (let x = 'A'.charCodeAt(0); x <= 'Z'.charCodeAt(0); x++) {
    shortest = Math.min(shortest, collapse(input.replace(new RegExp(String.fromCharCode(x), 'gi'), '')));
  }
  return shortest;
}