// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  // tests if the shift parameter satisfies the constraints
  it("should return false when the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.equal(false);
    });
  it("should return false when the shift value is equal to 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(false);
    });
  it("should return false when the shift value is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.equal(false);
    });
  it("should return false when the shift value is greater than 25", () => {
      const actual = caesar("thinkful", 99);
      expect(actual).to.equal(false);
    });
  
  // tests if function works to decode and encode as expected
  it("should return a encoded string given a input/shift parameter", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
  it("should return decoded string if set to 'false'", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
  it("should maintain spaces and non-alphabetic symbols and ignore capitalized letters", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8)
      expect(actual).to.equal(expected);
    });
});