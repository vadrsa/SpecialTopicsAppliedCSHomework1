const { expect, assert } = require("chai");
const { init } = require("../number");

describe("Test the functions created in number.js file", function () {
  before(function () {
    init();
  });

  it("Check isNatural function returns true for natural numbers", () => {
    return expect((3).isNatural()).to.be.true;
  });

  it("Check isNatural function returns false for zero", () => {
    return expect(!(0).isNatural()).to.be.true;
  });

  it("Check isNatural function returns false for non integers", () => {
    return expect(!(2.5).isNatural()).to.be.true;
  });

  it("Check isNatural function returns false for negative numbers", () => {
    return expect(!(-2).isNatural()).to.be.true;
  });

  it("Check isPrime function returns true for prime numbers", () => {
    return expect((71).isPrime()).to.be.true;
  });

  it("Check isPrime function returns false for non-prime numbers numbers", () => {
    return expect(!(10).isPrime()).to.be.true;
  });

  it("Check isPrime function throws error for non natural numbers", () => {
    try {
      (-1).isPrime();
    } catch (err) {
      return expect(err.message).eql("The number should be natural.");
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });

  it("Check isPrime function returns false for 1", () => {
    return expect(!(1).isPrime()).to.be.true;
  });

  it("Check factorial function returns the correct result", () => {
    return expect((5).factorial()).eql(120);
  });

  it("Check factorial function returns 1 for 0", () => {
    return expect((0).factorial()).eql(1);
  });

  it("Check factorial function throws error for negative numbers", () => {
    try {
      (-1.5).factorial();
    } catch (err) {
      return expect(err.message).eql("The number should be a non-negative integer.");
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });

  it("Check factorial function throws error for positive non-integers", () => {
    try {
      (3.5).factorial();
    } catch (err) {
      return expect(err.message).eql("The number should be a non-negative integer.");
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });

  it("Check factors function returns the correct result", () => {
    return expect((20).factors()).eql([2, 5]);
  });

  it("Check factors function throws error for 1", () => {
    try {
      (1).factors();
    } catch (err) {
      return expect(err.message).eql(
        "The number should be natural and greater than 1."
      );
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });

  it("Check factors function throws error for non-natural numbers", () => {
    try {
      (9.7).factors();
    } catch (err) {
      return expect(err.message).eql(
        "The number should be natural and greater than 1."
      );
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });
});
