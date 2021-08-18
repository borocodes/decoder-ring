// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //out of bounds error handling
    if (!alphabet || alphabet.length !== 26) return false;

    //alphabet variables.
    //One for the real alphabet, and another for the substitute alphabet
    let trueAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let subAlphabet = alphabet.toLowerCase().split("");
    let lowerCaseInput = input.toLowerCase().split("");

    //handle unique characters
    let uniqueAlphabet = new Set();
    for (let i = 0; i < alphabet.length; i++) {
      uniqueAlphabet.add(alphabet[i]);
    }
    if (uniqueAlphabet.size != 26) return false;

    //when encoding...
    const encodedMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = trueAlphabet.indexOf(char);
        const encodedChar = subAlphabet[charIndex];
        result.push(encodedChar);
      };
      lowerCaseInput.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };
    
    //when decoding
    const decodedMessage = () => {
      let result2 = [];
      const decode = (char) => {
        const charIndex2 = subAlphabet.indexOf(char);
        const decodedChar = trueAlphabet[charIndex2];
        result2.push(decodedChar);
      };
      lowerCaseInput.forEach((char) => {
        char === " " ? result2.push(" ") : decode(char);
      });
      return result2.join("");
    };

    return encode ? encodedMessage() : decodedMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
