const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function", () => {
//Test encode and decode functionality
  it("should encode a message", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
});

  it("should decode a message", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  });
//Test character validation checks
  it("should encode a message that has spaces in it", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces when encoding ", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne"
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces when decoding ", () => {
    const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "you are an excellent spy";
    expect(actual).to.eql(expected);
  });

  it("should return false if length of alphabet is not equal to 26", () => {
    const actual = substitution("thinkful", "abcdef");
    expect(actual).to.be.false;
  });

  it("should return false if alphabet contains duplicate characters", () => {
    const actual = substitution("thinkful", "aabbccddeeff");
    expect(actual).to.be.false;
  });
});
