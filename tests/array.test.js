const { expect, assert } = require("chai");
const { init, mapFactorial } = require("../array");

describe("Test the functions created in array.js file", function () {
  before(function () {
    init();
  });

  it("Check removeDuplocate fucniton works correctly", () => {
    const expectedResult = ["a", "A", 3, 5, true, "true"];
    return expect(
      ["a", "a", "A", 3, 3, 5, true, true, "true"].removeDuplicates()
    ).eql(expectedResult);
  });

  it("Check calculateAverage fucniton works correctly", () => {
    return expect([1, 2, 3, 4].calculateAverage()).eql(2.5);
  });

  it("Check calculateAverage function throws error if the array contains non-number", () => {
    try {
      [1, "some", 3, true].calculateAverage();
    } catch (err) {
      return expect(err.message).eql("All the elements should be numbers.");
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });

  it("Check mapFactorial fucniton works correctly", () => {
    return expect(mapFactorial([0, 1, 2, 3, 4, 5])).eql([1, 1, 2, 6, 24, 120]);
  });

  it("Check mapFactorial function throws error if the input is not an array", () => {
    try {
      mapFactorial("some string");
    } catch (err) {
      return expect(err.message).eql("The input should be an array.");
    }
    assert.fail("actual", "expected", "The function did not throw an error");
  });
});
