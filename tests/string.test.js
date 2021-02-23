const { expect } = require("chai");
const { init } = require("../string");

describe("Test the functions created in string.js file", function () {
  before(function () {
    init();
  });

  it("Check reversing a string", () => {
    return expect("Hello 123".reverse()).eql("321 olleH");
  });
});
