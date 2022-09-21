const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("Caesar shift function", () => {
//Test encode and decode functionality  
  it("should return the decoded message depending on the given shift value", () => {
      const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
      const expected = "this is a secret message!"; 
      expect(actual).to.equal(expected)
    });

      it("should return the encoded message depending on the given shift value", () => {
        const actual = caesar("this is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!"; 
        expect(actual).to.equal(expected)
      });
//Test shift value validation checks
    it("should return false if shift value is not present", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });

    it("should return false if shift value is equal to 0", () => {
      const actual = caesar("bpqa qa i amkzmb umaaiom!", 0);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const actual = caesar("this is a secret message!", 26);
      expect(actual).to.be.false;
    });
    it("should return false if the shift value is less than -25", () => {
      const actual = caesar("this is a secret message!", -26);
      expect(actual).to.be.false;
    });
//Test character validation checks   
    it("should ignore capital letters", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
      const expected = "this is a secret message!"
      expect(actual).to.eql(expected)
    });

    it("should maintain spaces", () => {
      const actual = caesar("testing !", 8);
      const expected = " "
      expect(actual.charAt(7)).to.equal(expected);
    });

    it("should maintain nonalphabetical characters", () => {
      const actual = caesar("testing !", 8);
      const expected = "!"
      expect(actual.charAt(8)).to.equal(expected);
    });

    it("should wrap characters around to front of alphabet when going past letter z", () => {
      const actual = caesar("zebra", 5);
      const expected = "ejgwf"
      expect(actual).to.equal(expected)
    });

}); 