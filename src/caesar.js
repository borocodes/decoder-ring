// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  //helper function for caesar cipher
 function _caesarHelper(array) {
   //map input array and convert to unicode
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      //return unicode value if it falls within the unicode alphabet range (97-122)
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // if shift is out of bounds, return false
    // if decoding, shift is inverted
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }

    //split and pass string into helper function to get unicode values
    let splitArray = input.split("");
    let convertedToUnicode = _caesarHelper(splitArray);

    // applies shift only to valid unicode numbers
    let shiftNums = convertedToUnicode.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop through and handle wrap around cases - ex: a shifted by -1 = z and z shifted by 1 = a
     //code only executes if a the value is a (unicode) number
    let loopShiftedNums = shiftNums.map((unicodeNum) => {
      if (typeof unicodeNum === "number") {
        if (unicodeNum < 97) {
          return unicodeNum + 26;
        }
        if (unicodeNum > 122) {
          return unicodeNum - 26;
        }
      }
      return unicodeNum;
    });

    //converts unicode back into a string for the resulting output. 
    let finalizedCode = loopShiftedNums.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return finalizedCode.join("");
  }
  
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
