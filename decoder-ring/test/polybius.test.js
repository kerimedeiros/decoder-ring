const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius function",() => {
//Test encode and decode functionality
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybius("thinkful"); 
      const expected = "4432423352125413";
      expect(actual).to.eql(expected);
    });

    it("should decode a message by translating each number pair into a letter", () => {
      const actual = polybius('23513434112251', false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
//Test character validation checks
    it("should ignore capital letters", () => {
      const actual = polybius("Hello world"); 
      const expected = "3251131343 2543241341";
     expect(actual).to.eql(expected);
    });

    it("should maintain spaces when encoding", () => {
      const actual = polybius("hello world"); 
      const expected = "3251131343 2543241341";
      expect(actual).to.eql(expected);
    });

    it("should maintain spaces when decoding", () => {
      const actual = polybius("3251131343 2543241341", false); 
      const expected = "hello world";
      expect(actual).to.eql(expected);
   });
 
   it("should return false if the number of characters in the string is odd without space present", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });

  it("should translate 42 to i/j when decoding", () => {
    const actual = polybius("4432423352125413", false); 
    const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
 });

  it("should translate i and j to 42 when encoding", () => {
    const actual = polybius("jumping"); 
    const expected = "42542353423322";
    expect(actual).to.eql(expected);
  });
});

