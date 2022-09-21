// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    // run check for alphabet rules and constraints
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (Array.from(new Set(alphabet)).length !== 26) return false;
    // begin creation of arrays and objects 
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    input = input.toLowerCase();
    let encodeObj = {};
    let decodeObj = {};
    let result = "";
    // begin the encoding process
    standardAlphabet.split("").forEach((letter, index) => {
      encodeObj[letter] = alphabet[index];
      decodeObj[alphabet[index]] = letter;
    });
    // else begin the decoding process
    if (!encode) encodeObj = decodeObj;
    input.split("").forEach((input) => {
      result += input === " " ? " " : encodeObj[input];
    });
    return result;
  }

  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
